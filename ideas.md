# Tervezési koncepciók — grn.35 editorial portfólió

A weboldal célja egy filmes textúrájú, lágy fényekben gazdag, portré- és editorial-orientált fotós (művésznév: **grn.35**) bemutatása. A képek hangulata: meleg, természetes, finoman pasztelles (rózsaszín szatén, púderbarna csipke, arany ékszerek, fehér szárított virágok), nyers analóg-szerű tónus.

---

<response>
<text>

## Idea A — "Quiet Magazine" (Vogue Italia × Kinfolk csendessége)

**Design Movement.** Kortárs print-magazin editorial: nagyon nagy whitespace, kis méretű, ritkított nagybetűs fejlécek, kontent-vezérelt aszimmetrikus tipográfia. Olyan, mintha egy nyomtatott magazin lapozható spread-jeit görgetnénk lefelé.

**Core Principles.** Krém háttér (#F4EFE7), aszimmetrikus 12-oszlopos rács, ritmus nem grid, kép a hős. A tipográfia mindig melléáll, sosem versenyez a fotóval.

**Color Philosophy.** Pergamen háttér + tinta-fekete szöveg + porzott rózsa accent + patinás arany hover.

**Layout Paradigm.** Hosszú vertikális magazin-folyam, képek 2–7 oszlopot foglalnak véletlenszerű ritmusban; spread-szerű szekciók.

**Signature Elements.** Függőlegesen forgatott "01 — PORTRAIT" margószámok, hajszálvékony elválasztók, folio lábjegyzet.

**Interaction Philosophy.** Görgetés mint magazin-lapozás, parallax max 20px, hover = enyhe kivilágosodás + képaláírás.

**Animation.** 600–900ms ease-out, blur-from-2px belépő, semmi spring.

**Typography System.** Display: Cormorant Garamond light; eyebrow: IBM Plex Mono 11px uppercase; body: EB Garamond 16/28.

</text>
<probability>0.06</probability>
</response>

<response>
<text>

## Idea B — "Analog Index" (kontaktkópia + kartoték esztétika)

**Design Movement.** Filmes archívum: az oldal úgy néz ki, mint egy fotós kartoték vagy kontaktkópia-lap, GRN-035 / ROLL 12 / FRAME 28 azonosítókkal. Erősen tipografikus, technikai, mégis intim.

**Core Principles.** Index-logika, monokróm UI + színes fotók, sűrű rács váltakozik kinagyított kockákkal, technikai őszinteség (látható rácsvonalak, regiszter-jelek).

**Color Philosophy.** Hideg #FAFAF8 háttér, #0E0E0E szöveg, középszürke meta. Tudatosan **hideg** UI, hogy a meleg fotók kontrasztban kiemelkedjenek.

**Layout Paradigm.** Landing = kontaktkópia 4×3 rács; görgetésre egy-egy kép full-bleed nagyítódik, alá hosszú mono technikai meta.

**Signature Elements.** Regiszter-keresztek a sarkokban, kódolt fájlnevek (GRN35_R12_F28), tekercs-progressbar felül.

**Interaction Philosophy.** Hover = 1px keret + meta fade; klikk = lightbox fekete háttéren; kurzor mint célkereszt.

**Animation.** Mechanikus 200–300ms ease-in-out; clip-path inset reveal mint film csévélődés; számláló (01/24) görgetésre változik.

**Typography System.** Display: Space Mono / JetBrains Mono kapitális; body: Inter Tight 14/22; meta: IBM Plex Mono 10px.

</text>
<probability>0.05</probability>
</response>

<response>
<text>

## Idea C — "Soft Atelier" (haute couture lookbook lágysága)

**Design Movement.** Maison-lookbook esztétika (Jacquemus, Khaite, The Row): nagyon lágy, érzéki, szinte tapintható felületek; kevés, de gyönyörűen elhelyezett tipográfia; rejtett navigáció; gesztus-alapú felfedezés.

**Core Principles.**
1. **Tapintható lágyság** — finom paper-grain textúra, enyhe vignetta a képek körül.
2. **Csendes navigáció** — minimalizált menü, csak logó + "INDEX" link.
3. **Anyag-folytonosság** — UI színek a fotók szatén-, csipke-, bőrtónusaiból.
4. **Lassú felfedezés** — nem rács, hanem függőleges "kifutó".

**Color Philosophy.** Háttér: halvány púderrózsa-krém (#F2EBE5). Szöveg: mély mokkabarna (#2B201A) a fekete helyett. Accent: patinás arany (#A8895C). A teljes paletta a fotók tónusából desztillálva.

**Layout Paradigm.** Függőleges "runway" — minden kép közel teljes viewport-magasság, generózus margók. Két-három kép után "interlude" oldal: csak idézet vagy folio-szám. Az about egy hosszú narratív hasáb, a sortörések tervezetten ritmizálva.

**Signature Elements.**
- Vízszintes hajszálvonal a logó alatt, ami görgetéssel végighúzódik a viewport tetején (progress).
- Kis kerek "•" jel szekcióátmeneteknél.
- **Római számok** (I, II, III) szekciósarokban — couture-os magazin-érzet.

**Interaction Philosophy.** Finom snap-scroll (nem agresszív). Hover = nem mozog a kép, csak kis kurzív felirat fade-el be alá. Lightbox **mély mokkabarna** háttéren, nem feketén, hogy folytassa a paletta-melegséget.

**Animation.** Nagyon lassú, 1000–1400ms cubic-bezier(0.16, 1, 0.3, 1). Képek scroll-on finom skálázódással (1.05 → 1.0) + opacity fade. Tipográfia karakterenként reveal stagger 30ms. Nyelvváltó (HU/EN) lassú cross-fade.

**Typography System.**
- **Display:** **Italiana** (Google Fonts) — vékony, magas, klasszikus couture, logó és fő címek.
- **Subhead / kurzív kíséret:** *Cormorant Garamond Italic* — képaláírások.
- **Body:** **EB Garamond** regular, 15/26, generózus sortáv.
- **Eyebrow / mono:** *JetBrains Mono* 10px csak kódszámokhoz.
- **Hierarchia:** Display 80–120px Italiana, subhead 18px Cormorant italic, body 15px Garamond, mono 10px meta.

</text>
<probability>0.07</probability>
</response>

---

## Választott koncepció: **Idea C — "Soft Atelier"**

**Indoklás.** A felhasználó kifejezetten **editorial + portré + magazinos, de minimál** hangulatot kért, és a feltöltött képek (szatén, csipke, arany ékszerek, lágy filmes fény, meleg bőrtónusok) couture-jellegűek — egy maison-lookbook esztétika a leghűségesebb a meglévő anyaghoz. Az "Soft Atelier" megőrzi a magazinos editorialitást (fólio-számok, római számozás, kapitális eyebrow-k), de a melegebb krém-mokka-arany paleta és a függőleges "runway" elrendezés folytatja a fotók saját anyaghasználatát az UI-ban. Ugyanezt a vizuális nyelvet használjuk a PDF portfólióban is.
