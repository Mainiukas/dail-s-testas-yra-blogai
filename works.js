// Lietuvos dailės kūriniai testui 2026 (pagal dokumentą „Lietuviu_daile_25“).
//
// first    – autoriaus vardas (-ai). Teste reikia įrašyti kiekvieno vardo pirmąją raidę.
// last     – pavardė, kaip rodoma. surnames – visi priimami pavardės variantai.
// title    – pavadinimas taip, kaip parašyta dokumente.
// accept   – priimami pavadinimo variantai. Žodžių tvarka, didžiosios raidės, kabutės ir
//            lietuviškos raidės (ą, č, ė…) nesvarbios.
//            [žodis] – neprivalomas žodis, a|b – tinka bet kuris iš variantų.
// partial  – variantai, už kuriuos duodama tik pusė taško (per trumpas ar netikslus atsakymas).
// place    – „Kur“: tik tiems kūriniams, kur dokumente vieta parašyta po kablelio.
// extra    – kiek papildomų nuotraukų (img/NN-2.jpg, img/NN-3.jpg).
// Nuotraukos: img/01.jpg … img/29.jpg pagal kūrinio eilės numerį šiame sąraše.

const KAUNAS = { name: "Kaunas", accept: ["kaunas|kaune"] };
const VILNIUS = { name: "Vilnius", accept: ["vilnius|vilniuje"] };
const VU = {
  name: "Vilniaus universitetas",
  accept: [
    "vilniaus universitetas|universitete|universiteto [vilnius|vilniuje] [filologijos] [fakultetas|fakultete] [lituanistikos] [centras|centre]",
    "vu [vilnius|vilniuje] [filologijos] [fakultetas|fakultete]"
  ],
  partial: ["vilnius|vilniuje"]
};

window.WORKS = [
  { first: ["Laurynas"], last: "Gucevičius", surnames: ["Gucevičius", "Stuoka-Gucevičius"],
    title: "Vilniaus Šv. Stanislovo ir Šv. Vladislovo arkikatedra bazilika",
    accept: ["[vilniaus] [šv|švento|šventojo|šventųjų] [vyskupo] [stanislovo] [ir] [vladislovo] arkikatedra|katedra [bazilika]"],
    year: "1783–1801", info: "Brandžiojo klasicizmo architektas. Vilniaus katedros rekonstrukcija – vienas svarbiausių Lietuvos klasicizmo architektūros kūrinių." },

  { first: ["Pranciškus"], last: "Smuglevičius", surnames: ["Smuglevičius"],
    title: "„Lietuvos valstiečiai“",
    accept: ["lietuvos valstiečiai"],
    year: "XVIII a. pab. – XIX a. pr.", info: "Įžymiausias klasicizmo dailininkas Lietuvoje, vienas šio žanro pradininkų Europoje. Buitinio žanro paveikslas." },

  { first: ["Pranciškus"], last: "Smuglevičius", surnames: ["Smuglevičius"],
    title: "„Šv. Stanislovo mirtis“",
    accept: ["[šv|švento|šventojo] stanislovo mirtis"],
    year: "1799", info: "Paveikslas Vilniaus katedros altoriuje." },

  { first: ["Kanutas"], last: "Ruseckas", surnames: ["Ruseckas"],
    title: "„Pjovėja“",
    accept: ["pjovėja"],
    year: "1844", info: "Klasicizmo ir romantizmo bruožai. Idealizuota lietuvių valstietė." },

  { first: ["Kanutas"], last: "Ruseckas", surnames: ["Ruseckas"],
    title: "„Lietuvaitė su verbomis“",
    accept: ["lietuvaitė su verbomis"],
    year: "1847", info: "Romantizmui būdingas susidomėjimas liaudies gyvenimu ir papročiais." },

  { first: ["Ferdinandas"], last: "Ruščicas", surnames: ["Ruščicas", "Ruszczyc"],
    title: "„Rudens vėjas (Tuštuma)“",
    accept: ["rudens vėjas [tuštuma]", "tuštuma"],
    year: "1901", info: "Vienas Varšuvos dailės mokyklos įkūrėjų (ten mokėsi Čiurlionis). Siejamas su ekspresionistinės tapybos ištakomis." },

  { first: ["Petras"], last: "Rimša", surnames: ["Rimša"],
    title: "„Lietuvos mokykla 1864–1904“",
    accept: ["lietuvos mokykla [1864] [1904] [vargo]", "vargo mokykla"],
    place: KAUNAS,
    year: "1906", info: "Skulptūra Vytauto Didžiojo karo muziejaus sodelyje Kaune. Slaptas mokymas spaudos draudimo metais (dar vadinama „Vargo mokykla“)." },

  { first: ["Mikalojus", "Konstantinas"], last: "Čiurlionis", surnames: ["Čiurlionis"],
    title: "„Pasaka (Karalių pasaka)“",
    accept: ["[karalių] pasaka"],
    year: "1909", info: "Simbolizmas. Karaliai saugo švytintį mažą pasaulį su lietuviška sodyba." },

  { first: ["Mikalojus", "Konstantinas"], last: "Čiurlionis", surnames: ["Čiurlionis"],
    title: "„Bičiulystė“",
    accept: ["bičiulystė"],
    year: "1906–1907", info: "Simbolistinis paveikslas – šviesa kaip bičiulystės ir dvasinio ryšio simbolis." },

  { first: ["Petras"], last: "Kalpokas", surnames: ["Kalpokas"],
    title: "„Pavasario pradžia“",
    accept: ["pavasario pradžia"],
    year: "1907", info: "Peizažistas; realizmas derinamas su impresionizmo bruožais." },

  { first: ["Antanas"], last: "Žmuidzinavičius", surnames: ["Žmuidzinavičius"],
    title: "„Senos žemaičių kapinės“",
    accept: ["senos|senosios žemaičių kapinės"],
    year: "1914", info: "Lietuvių dailės draugijos steigėjas, Lietuvos gamtos peizažų tapytojas." },

  { first: ["Antanas"], last: "Samuolis", surnames: ["Samuolis"],
    title: "„Baltoji obelis“",
    accept: ["baltoji obelis"],
    year: "1932", info: "Ekspresionizmas, grupuotė „Ars“." },

  { first: ["Antanas"], last: "Samuolis", surnames: ["Samuolis"],
    title: "„Geltona moteris“",
    accept: ["geltona moteris"],
    year: "1933", info: "Sodrios spalvos, apibendrintos formos, ekspresyvi tapysena." },

  { first: ["Juozas"], last: "Zikaras", surnames: ["Zikaras"],
    title: "„Laisvė“",
    accept: ["laisvė", "laisvės paminklas|statula|skulptūra"],
    place: KAUNAS,
    year: "1921", info: "Lietuvos nepriklausomybės simbolis, atkurtas 1989 m. vasario 16 d." },

  { first: ["Juozas"], last: "Zikaras", surnames: ["Zikaras"],
    title: "„Knygnešys“",
    accept: ["knygnešys"],
    place: KAUNAS,
    year: "1939", info: "Tautinių simbolių kūrėjas." },

  { first: ["Feliksas"], last: "Vizbaras", surnames: ["Vizbaras"],
    title: "Buvęs Kauno centrinis paštas",
    accept: ["[buvęs] [kauno] [centrinis] paštas", "[buvęs|buvę] [kauno] [centrinio] pašto rūmai|pastatas"],
    place: KAUNAS,
    year: "1930–1932", info: "Kauno modernizmas, UNESCO paveldo „Modernistinis Kaunas“ dalis." },

  { first: ["Vytautas", "Edmundas"], last: "Čekanauskas", surnames: ["Čekanauskas"],
    title: "Lietuvos kompozitorių sąjungos rūmai",
    accept: ["[lietuvos] kompozitorių [sąjungos] rūmai|namai|pastatas", "[lietuvos] kompozitorių sąjunga"],
    place: VILNIUS,
    year: "1966", info: "XX a. II pusės modernizmas, A. Aalto įtaka. Taip pat Lazdynų ir Vyriausybės rūmų autorius." },

  { first: ["Vytautas", "Kazimieras"], last: "Jonynas", surnames: ["Jonynas"],
    title: "Iliustracijos Kristijono Donelaičio poemai „Metai“",
    accept: ["[iliustracijos|iliustracija] [kristijono] [donelaičio] [poemai|poemos|poema] metai|metų|metams"],
    extra: 1,
    year: "1940", info: "Medžio raižiniai – lietuviškos knygos grafikos klasika." },

  { first: ["Rimtautas", "Vincentas"], last: "Gibavičius", surnames: ["Gibavičius"],
    title: "„Šv. Onos ir Bernardinų bažnyčios“ (iš ciklo „Vilnius“)",
    accept: ["[šv|šventos|šventosios] onos [ir] [bernardinų] bažnyčios|bažnyčia [iš] [ciklo] [vilnius]"],
    year: "1967", info: "Medžio raižinių ciklas „Vilnius“ (200 raižinių)." },

  { first: ["Rimtautas", "Vincentas"], last: "Gibavičius", surnames: ["Gibavičius"],
    title: "„Aušros vartai“ (iš ciklo „Vilnius“)",
    accept: ["aušros vartai [iš] [ciklo] [vilnius]"],
    year: "1973", info: "Ritmiška, apibendrinta grafinė kompozicija." },

  { first: ["Jonas"], last: "Mikėnas", surnames: ["Mikėnas"],
    title: "„Pirmosios kregždės“",
    accept: ["pirmosios kregždės"],
    place: VILNIUS,
    year: "1964", info: "Prie Nacionalinės dailės galerijos (bronza – 1987 m.)." },

  { first: ["Vladas"], last: "Vildžiūnas", surnames: ["Vildžiūnas"],
    title: "„Barbora“",
    accept: ["barbora [radvilaitė]", "barborai [radvilaitei]"],
    place: VILNIUS,
    year: "1982", info: "Vokiečių gatvė. Skirta Barborai Radvilaitei." },

  { first: ["Vladas"], last: "Vildžiūnas", surnames: ["Vildžiūnas"],
    title: "Paminklas Laurynui Stuokai Gucevičiui",
    accept: ["[laurynui] [stuokai] gucevičiui", "[laurynas] [stuoka] gucevičius", "[lauryno] [stuokos] gucevičiaus"],
    place: VILNIUS,
    year: "1984", info: "Paminklas Vilniaus arkikatedros rekonstrukcijos autoriui." },

  { first: ["Birutė"], last: "Žilytė", surnames: ["Žilytė"],
    title: "Pasakos „Apie narsią Vilniaus mergaitę ir galvažudį Žaliabarzdį“ iliustracija",
    accept: [
      "[pasakos|pasakai|pasaka] [apie] narsią [vilniaus] mergaitę [ir] [galvažudį] [žaliabarzdį]",
      "[pasakos|pasakai|pasaka] narsi [vilniaus] mergaitė [ir] [galvažudys] [žaliabarzdis]",
      "[pasakos|pasakai|pasaka] [galvažudys] žaliabarzdis"
    ],
    partial: ["[pasakos|pasakai|pasaka] [apie] narsią [vilniaus]"],
    year: "1970", info: "Dekoratyvi, folkloriniais motyvais paremta iliustracija." },

  { first: ["Birutė"], last: "Žilytė", surnames: ["Žilytė"],
    title: "„Žalgiris II“",
    accept: ["žalgiris [ii|2]"],
    year: "", info: "Litografija – Vytautas kaip simbolinis, monumentalus herojaus vaizdinys." },

  { first: ["Petras"], last: "Repšys", surnames: ["Repšys"],
    title: "Freska „Metų laikai“",
    accept: ["metų laikai"],
    place: VU,
    year: "1974–1986", info: "Filologijos fakulteto Lituanistikos centras. Lietuvių papročiai, mitologija, gyvenimo ciklas." },

  { first: ["Stasys"], last: "Eidrigevičius", surnames: ["Eidrigevičius"],
    title: "„Jaunas mokslininkas“",
    accept: ["jaunas mokslininkas"],
    year: "1985", info: "Pasaulinio masto plakato kūrėjas; veido, kaukės motyvai." },

  { first: ["Mindaugas"], last: "Navakas", surnames: ["Navakas"],
    title: "„Kablys“",
    accept: ["kablys"],
    place: VILNIUS,
    year: "1994–1995", info: "Šiuolaikinė skulptūra kaip intervencija į miesto erdvę." },

  { first: ["Kunotas"], last: "Vildžiūnas", surnames: ["Vildžiūnas"],
    title: "„Vilniaus ženklai“",
    accept: ["vilniaus ženklai"],
    extra: 2,
    year: "2010", info: "Skulptūros Vilniaus tiltams ir Neries erdvei. Vlado Vildžiūno sūnus." }
];
