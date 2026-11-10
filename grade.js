// Atsakymų tikrinimas. Rezultatas kiekvienam langeliui: 1 (teisinga), 0.5 (beveik), 0 (neteisinga).
//
// Nesvarbu: didžiosios raidės, lietuviškos raidės (ą→a, š→s…), kabutės, skyryba, žodžių tvarka.
// „Beveik“ – kai žodis parašytas su nedidele klaida arba kita forma (balta / baltoji).
(function (root) {
  "use strict";

  function norm(s) {
    return String(s).toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, " ").trim();
  }
  function tokens(s) {
    const n = norm(s);
    return n ? Array.from(new Set(n.split(" "))) : [];
  }
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++)
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const sim = (a, b) => 1 - lev(a, b) / Math.max(a.length, b.length, 1);

  // Ar du žodžiai „beveik tas pats“: rašybos klaida arba ta pati šaknis su kita galūne.
  function close(a, b) {
    if (a.length < 4 || b.length < 4) return false;
    if (sim(a, b) >= 0.7) return true;
    let p = 0;
    while (p < a.length && p < b.length && a[p] === b[p]) p++;
    return p >= 4 && p >= 0.6 * Math.min(a.length, b.length);
  }

  // Bendriniai žodžiai, kuriuos galima pridėti prie bet kurio pavadinimo.
  const GENERIC = ["paveikslas", "skulptūra", "paminklas", "statula", "freska", "freskos",
    "iliustracija", "iliustracijos", "pastatas", "kūrinys", "raižinys", "litografija", "plakatas"].map(norm);

  // "[a|b] c d|e" -> privalomos žodžių grupės ir neprivalomi žodžiai
  function parsePattern(p, extraOpt) {
    const req = [], opt = extraOpt.slice(), parts = [];
    p.trim().split(/\s+/).forEach(raw => {
      const optional = raw.charAt(0) === "[";
      const alts = raw.replace(/^\[|\]$/g, "").split("|").map(norm).filter(Boolean);
      if (optional) opt.push.apply(opt, alts); else req.push(alts);
      parts.push({ optional: optional, first: alts[0] });
    });
    return {
      req: req, opt: opt,
      forms: [parts.map(x => x.first).join(""), parts.filter(x => !x.optional).map(x => x.first).join("")]
    };
  }

  function matchPattern(toks, pat) {
    const hit = new Set(), rest = [];
    let fuzzy = false;
    toks.forEach(t => {
      const g = pat.req.findIndex(alts => alts.includes(t));
      if (g >= 0) hit.add(g);
      else if (!pat.opt.includes(t) && t.length > 1) rest.push(t);   // pavienės raidės (L., K.) ignoruojamos
    });
    for (const t of rest) {
      let g = pat.req.findIndex((alts, i) => !hit.has(i) && alts.some(a => close(t, a)));
      if (g < 0) g = pat.req.findIndex(alts => alts.some(a => close(t, a)));
      if (g >= 0) hit.add(g);
      else if (!pat.opt.some(o => close(t, o))) return 0;            // nepažįstamas žodis
      fuzzy = true;
    }
    if (!hit.size) return 0;
    for (let i = 0; i < pat.req.length; i++) {
      if (hit.has(i)) continue;
      if (pat.req[i].some(a => a.length >= 4)) return 0;             // trūksta svarbaus žodžio
      fuzzy = true;                                                  // trūksta tik „su“, „ir“ ir pan.
    }
    return fuzzy ? 0.5 : 1;
  }

  function makeSpec(patterns, display, opt, partial) {
    const pats = patterns.map(p => parsePattern(p, opt));
    const forms = [norm(display).replace(/ /g, "")];
    pats.forEach(p => p.forms.forEach(f => { if (f && !forms.includes(f)) forms.push(f); }));
    return { pats: pats, forms: forms, partial: (partial || []).map(p => parsePattern(p, opt)) };
  }

  function gradeText(answer, spec) {
    const t = tokens(answer);
    if (!t.length) return 0;
    let best = 0;
    for (const p of spec.pats) {
      best = Math.max(best, matchPattern(t, p));
      if (best === 1) return 1;
    }
    if (best) return best;
    const compact = norm(answer).replace(/ /g, "");                  // pvz. suklijuoti žodžiai
    if (spec.forms.some(f => sim(compact, f) >= 0.85)) return 0.5;
    if (spec.partial.some(p => matchPattern(t, p) === 1)) return 0.5;
    return 0;
  }

  function gradeSurname(answer, w) {
    const a = norm(answer);
    if (!a) return 0;
    const cands = [a].concat(a.split(" ").filter(x => x.length >= 3));
    if (cands.some(c => w._own.includes(c))) return 1;
    let bestOwn = 0, bestOther = 0;
    cands.forEach(c => {
      w._own.forEach(s => { bestOwn = Math.max(bestOwn, sim(c, s)); });
      w._others.forEach(s => { bestOther = Math.max(bestOther, sim(c, s)); });
    });
    // „beveik“ tik tada, kai atsakymas nėra artimesnis kito autoriaus pavardei
    return bestOwn >= 0.75 && bestOwn > bestOther ? 0.5 : 0;
  }

  function gradeInitial(answer, firstName) {
    const a = norm(answer);
    return a && a.charAt(0) === norm(firstName).charAt(0) ? 1 : 0;
  }

  // Paruošia kūrinių sąrašą tikrinimui (vieną kartą, užkrovus puslapį).
  function prepare(works) {
    const all = Array.from(new Set(works.flatMap(w => w.surnames.map(norm))));
    works.forEach(w => {
      w.author = w.first.join(" ") + " " + w.last;
      w._own = w.surnames.map(norm);
      w._others = all.filter(s => !w._own.includes(s));
      const placeWords = w.place
        ? w.place.accept.join(" ").replace(/[\[\]|]/g, " ").split(/\s+/).map(norm).filter(Boolean) : [];
      w._title = makeSpec(w.accept, w.title, GENERIC.concat(placeWords), w.partial);
      if (w.place) w._place = makeSpec(w.place.accept, w.place.name, [], w.place.partial);
    });
  }

  // ans: { init: ["M", "K"], surname, title, place }
  // hard = false (paprastas lygis): tikrinama tik pavardė ir pavadinimas, init ir place lieka null.
  // hard = true (sunkesnis lygis): dar vardo raidė (-ės) ir vieta, jei kūrinys ją turi.
  function gradeAll(w, ans, hard) {
    return {
      init: hard ? w.first.map((f, i) => gradeInitial(ans.init[i] || "", f)) : null,
      surname: gradeSurname(ans.surname, w),
      title: gradeText(ans.title, w._title),
      place: hard && w.place ? gradeText(ans.place, w._place) : null
    };
  }

  // Taškai: po 1 už pavardę ir pavadinimą; sunkesniame lygyje – dar po 1 už vardo raidę (-es) ir vietą.
  function points(sc) {
    const hasInit = sc.init !== null, hasPlace = sc.place !== null;
    const init = hasInit ? sc.init.reduce((a, b) => a + b, 0) / sc.init.length : 0;
    const place = hasPlace ? sc.place : 0;
    return {
      init: init, surname: sc.surname, title: sc.title, place: place, hasInit: hasInit, hasPlace: hasPlace,
      total: init + sc.surname + sc.title + place,
      max: 2 + (hasInit ? 1 : 0) + (hasPlace ? 1 : 0)
    };
  }

  const allRight = sc => (sc.init === null || sc.init.every(x => x === 1)) && sc.surname === 1 &&
    sc.title === 1 && (sc.place === null || sc.place === 1);

  root.Grade = { norm: norm, prepare: prepare, gradeAll: gradeAll, gradeText: gradeText,
    gradeSurname: gradeSurname, points: points, allRight: allRight };
})(typeof window !== "undefined" ? window : globalThis);
