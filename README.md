# Lietuvos dailės testas 2026

Atidaryk `index.html` naršyklėje (arba įjunk GitHub Pages). Kūriniai ir nuotraukos – iš dokumento „Lietuviu_daile_25“.

## Skiltys

- **Treniruotė** – visi kūriniai su nuotrauka, autoriumi, pavadinimu ir vieta (atsakymus galima paslėpti).
- **Praktika** – kaip testas, tik suklydus galima bandyti dar kartą. Po pirmų trijų neteisingų bandymų atsakymo nerodo
  (tik pažymi, kurie langeliai teisingi), po ketvirto – parodo. Pabaigoje matyti, kas pavyko iš pirmo karto.
- **Testavimas** – pasirenki lygį, intervalą (nuo Nr. iki Nr.) ir klausimų skaičių, atsakymą tikrina iš karto, pabaigoje – ataskaita.

## Lygiai ir langeliai

Praktikoje ir teste prieš pradedant pasirenkamas lygis (jis įsimenamas naršyklėje):

- **Paprastas** – tik pavardė ir kūrinio pavadinimas (iki 2 taškų už klausimą).
- **Sunkesnis** – dar vardo raidė (-ės) ir vieta (3 arba 4 taškai už klausimą).

| Langelis | Lygis | Kada rodomas | Taškai |
|---|---|---|---|
| Pavardė | abu | visada | 1 |
| Kūrinio pavadinimas | abu | visada | 1 |
| Vardo raidė (-ės) | sunkesnis | visada; du langeliai, jei autorius turi du vardus | 1 (du langeliai – po 0,5) |
| Kur | sunkesnis | tik kur dokumente vieta parašyta po kablelio (10 kūrinių) | 1 |

Už nedidelę rašybos klaidą ar netikslią žodžio formą duodama 0,5 taško.

## Kaip tikrinami atsakymai (`grade.js`)

Nesvarbu didžiosios raidės, lietuviškos raidės (`ą` = `a`), kabutės, skyryba ir **žodžių tvarka**.
Priimami variantai aprašyti `works.js` lauke `accept`:

- `[žodis]` – neprivalomas žodis, `a|b` – tinka bet kuris variantas;
- pvz. `[buvęs] [kauno] [centrinis] paštas` priima ir „buvęs Kauno centrinis paštas“, ir „buvęs centrinis Kauno paštas“.

Norėdamas, kad būtų užskaitytas dar vienas variantas, papildyk to kūrinio `accept`.

## Atsitiktinė tvarka

Kūriniai nesikartoja. To paties autoriaus kūriniai nestatomi vienas šalia kito, o nauja eilė parenkama taip, kad
būtų kuo mažiau panaši į kelis paskutinius bandymus (jie įsimenami naršyklėje). Jei klausiama tik dalies kūrinių,
pirmenybė tiems, kurių neseniai nebuvo.

## Nuotraukos

Aplanke `img/` pagal kūrinio numerį: `01.jpg` … `29.jpg`. Kūriniai su keliomis nuotraukomis turi papildomas:
`18-2.jpg` (Jonyno „Metai“), `29-2.jpg`, `29-3.jpg` („Vilniaus ženklai“); jų skaičius – `works.js` lauke `extra`.

| Nr. | Kūrinys | Nr. | Kūrinys |
|---|---|---|---|
| 01 | Gucevičius – Vilniaus arkikatedra | 16 | Vizbaras – Kauno centrinis paštas |
| 02 | Smuglevičius – Lietuvos valstiečiai | 17 | Čekanauskas – Kompozitorių sąjungos rūmai |
| 03 | Smuglevičius – Šv. Stanislovo mirtis | 18 | Jonynas – iliustracijos „Metams“ |
| 04 | Ruseckas – Pjovėja | 19 | Gibavičius – Šv. Onos ir Bernardinų bažnyčios |
| 05 | Ruseckas – Lietuvaitė su verbomis | 20 | Gibavičius – Aušros vartai |
| 06 | Ruščicas – Rudens vėjas | 21 | Mikėnas – Pirmosios kregždės |
| 07 | Rimša – Lietuvos mokykla | 22 | V. Vildžiūnas – Barbora |
| 08 | Čiurlionis – Pasaka (Karalių pasaka) | 23 | V. Vildžiūnas – paminklas Gucevičiui |
| 09 | Čiurlionis – Bičiulystė | 24 | Žilytė – Žaliabarzdžio pasakos iliustracija |
| 10 | Kalpokas – Pavasario pradžia | 25 | Žilytė – Žalgiris II |
| 11 | Žmuidzinavičius – Senos žemaičių kapinės | 26 | Repšys – freska „Metų laikai“ |
| 12 | Samuolis – Baltoji obelis | 27 | Eidrigevičius – Jaunas mokslininkas |
| 13 | Samuolis – Geltona moteris | 28 | Navakas – Kablys |
| 14 | Zikaras – Laisvė | 29 | K. Vildžiūnas – Vilniaus ženklai |
| 15 | Zikaras – Knygnešys | | |
