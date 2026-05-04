/*
 * ─────────────────────────────────────────────────────────────
 *  grn.35 — Home (Soft Atelier design)
 *
 *  Style reminders for this file ONLY:
 *    • cream background (#F2EBE5) + deep mocha (#2B201A) text
 *    • Fraunces for big display (Latin Extended), EB Garamond for body
 *    • generous whitespace, asymmetric runway, no flat black
 *    • slow easings (1100–1400ms), reveal-on-scroll
 *    • bilingual HU/EN through useLang()
 *    • all images are bundled locally from src/assets/photos
 *      (Vite imports → fingerprinted, deployable anywhere — Vercel, Netlify, GitHub Pages, etc.)
 * ─────────────────────────────────────────────────────────────
 */
import { useEffect, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/useReveal";
import p01 from "@/assets/photos/grn35_01.webp"; // florals
import p02 from "@/assets/photos/grn35_02.webp"; // lying on rug
import p03 from "@/assets/photos/grn35_03.webp"; // pink slip lean / pearls
import p04 from "@/assets/photos/grn35_04.webp"; // shell profile / looking up

const PHOTOS = {
  P01: p01,
  P02: p02,
  P03: p03,
  P04: p04,
};

const COPY = {
  navIndex: { hu: "Tárgymutató", en: "Index" },
  navWork: { hu: "Munkák", en: "Work" },
  navAbout: { hu: "Bemutatkozás", en: "About" },
  navContact: { hu: "Kapcsolat", en: "Contact" },

  heroEyebrow: { hu: "Editorial × Portré", en: "Editorial × Portrait" },
  heroTitleA: { hu: "A csendes pillanatok", en: "A chronicler of" },
  heroTitleB: { hu: "krónikása.", en: "quiet moments." },
  heroSub: {
    hu: "Editorial és portréfotográfia — kizárólag analógon, 35mm-en és középformátumon.",
    en: "Editorial and portrait photography — shot exclusively on film, 35mm and medium format.",
  },
  heroMeta: {
    hu: "Budapest · 35mm · Középformátum · Természetes fény",
    en: "Budapest · 35mm · Medium format · Natural light",
  },

  sec1: { hu: "I — Portré", en: "I — Portrait" },
  sec2: { hu: "II — Editorial", en: "II — Editorial" },
  sec3: { hu: "III — Műterem", en: "III — Atelier" },
  sec4: { hu: "IV — Tárgymutató", en: "IV — Index" },

  cap1: { hu: "Kagyló és aranyszeg.", en: "Shell and a gilded clasp." },
  cap1Meta: { hu: "Roll 12 · Frame 28 · 2026", en: "Roll 12 · Frame 28 · 2026" },

  cap2: { hu: "Rózsaszín szatén, fehér oszlop.", en: "Pink satin, white column." },
  cap2Meta: { hu: "Roll 09 · Frame 15 · 2026", en: "Roll 09 · Frame 15 · 2026" },

  cap3: { hu: "Szárított virágok, közelről.", en: "Dried florals, up close." },
  cap3Meta: { hu: "Roll 04 · Frame 01 · 2026", en: "Roll 04 · Frame 01 · 2026" },

  cap4: { hu: "Pihenő. Délutáni fény.", en: "At rest. Afternoon light." },
  cap4Meta: { hu: "Roll 09 · Frame 12 · 2026", en: "Roll 09 · Frame 12 · 2026" },

  interlude: {
    hu: "„A jelenlétet fényképezem, nem a pózt.\u201d",
    en: "\u201cI photograph presence, not the pose.\u201d",
  },

  aboutEyebrow: { hu: "Bemutatkozás", en: "About" },
  aboutTitle: { hu: "Fény, anyag, türelem.", en: "Light, material, patience." },
  aboutBody: {
    hu: "grn.35 egy vizuális napló, amit a fény és a textúrák írnak. A munkáim portrék és editorial sorozatok között mozognak, ott, ahol az anyag — selyem, csipke, bőr, arany — találkozik a természetes fénnyel és egy nagyon csendes nézéssel. Kizárólag analógon dolgozom — 35mm-en és középformátumon. A kettő különböző ritmust kínál: az egyik gyorsabb és közelibb, a másik lassabb, nagyobb lélegzetvételű. Meleg bőrtónusok, lágy árnyékok, kis tökéletlenségek. Inkább a jelenlétet fényképezem, mint a pózt. A nevem — grn.35 — egy 35mm-es film tekercsére utal, és arra a fajta türelemre, amit a film megkövetel.",
    en: "grn.35 is a visual journal written by light and texture. My work moves between portrait and editorial series, where material — silk, lace, skin, gold — meets natural light and a very quiet way of looking. I work exclusively on film — 35mm and medium format. Each offers a different rhythm: one is faster and closer, the other slower, with a longer breath. Warm skin tones, soft shadows, small imperfections. I photograph presence rather than pose. The name — grn.35 — is a nod to a roll of 35mm film, and to the kind of patience film demands.",
  },

  servicesTitle: { hu: "Felkérések", en: "Commissions" },
  service1: { hu: "Portré sorozatok", en: "Portrait series" },
  service2: { hu: "Editorial együttműködések", en: "Editorial collaborations" },
  service3: { hu: "Brand és lookbook", en: "Brand & lookbook" },
  service4: { hu: "Ékszer és anyagstúdió", en: "Jewellery & material studies" },

  contactEyebrow: { hu: "Kapcsolat", en: "Get in touch" },
  contactTitle: { hu: "Dolgozzunk együtt.", en: "Let’s work together." },
  contactBody: {
    hu: "Felkérésekért, együttműködésekért és magántervekért — írj egy üzenetet, és visszajelzek egy héten belül.",
    en: "For commissions, collaborations and private projects \u2014 send a note and I will reply within a week.",
  },

  emailLabel: { hu: "Email", en: "Email" },
  igLabel: { hu: "Instagram", en: "Instagram" },
  basedLabel: { hu: "Bázis", en: "Based in" },
  basedValue: { hu: "Budapest · elérhető Európa-szerte", en: "Budapest · available across Europe" },

  footerNote: { hu: "Minden jog fenntartva.", en: "All rights reserved." },
  scrollHint: { hu: "Görgess", en: "Scroll" },
};

function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-[58px] left-0 right-0 z-40 h-px bg-transparent">
      <div
        className="h-full bg-[var(--color-mocha)] origin-left transition-[width] duration-150 ease-out"
        style={{ width: `${w}%`, opacity: 0.4 }}
      />
    </div>
  );
}

function Header() {
  const { lang, toggle, t } = useLang();
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-[6px] bg-[color:var(--color-cream)]/75 border-b border-[color:var(--color-mocha)]/10">
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-[22px] leading-none tracking-tight">
            grn<span className="text-[color:var(--color-gold)]">.</span>35
          </span>
          <span className="font-mono-eyebrow opacity-50 hidden sm:inline">
            {t({ hu: "Fotográfia", en: "Photography" })}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono-eyebrow">
          <a href="#work" className="hover:text-[color:var(--color-gold)] transition-colors">
            {t(COPY.navWork)}
          </a>
          <a href="#about" className="hover:text-[color:var(--color-gold)] transition-colors">
            {t(COPY.navAbout)}
          </a>
          <a href="#index" className="hover:text-[color:var(--color-gold)] transition-colors">
            {t(COPY.navIndex)}
          </a>
          <a href="#contact" className="hover:text-[color:var(--color-gold)] transition-colors">
            {t(COPY.navContact)}
          </a>
        </nav>

        <button
          onClick={toggle}
          aria-label="Toggle language"
          className="font-mono-eyebrow flex items-center gap-1.5 hover:text-[color:var(--color-gold)] transition-colors"
        >
          <span className={lang === "hu" ? "text-[color:var(--color-mocha)]" : "opacity-40"}>HU</span>
          <span className="opacity-30">/</span>
          <span className={lang === "en" ? "text-[color:var(--color-mocha)]" : "opacity-40"}>EN</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="container">
        {/* meta row */}
        <div className="flex items-center justify-between font-mono-eyebrow mb-12 md:mb-20 opacity-70">
          <span>{t(COPY.heroEyebrow)}</span>
          <span className="hidden sm:inline">{t(COPY.heroMeta)}</span>
          <span>2026</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Big title — asymmetric, anchored left */}
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display text-[clamp(56px,11vw,168px)] leading-[0.92] tracking-[-0.015em] text-[color:var(--color-mocha)]">
              <span className="block reveal">{t(COPY.heroTitleA)}</span>
              <span className="block reveal italic font-italic-serif font-light text-[0.78em] pl-[0.6em] text-[color:var(--color-mocha-soft)]">
                {t(COPY.heroTitleB)}
              </span>
            </h1>
          </div>

          {/* Side image — single hero asset on the right, vertical */}
          <div className="col-span-12 lg:col-span-5">
            <div className="frame vignette aspect-[3/4] reveal">
              <img
                src={PHOTOS.P04}
                alt="Portrait — shell and gilded clasp"
                loading="eager"
              />
            </div>
            <p className="mt-3 font-mono-eyebrow opacity-60">{t(COPY.cap1Meta)}</p>
          </div>
        </div>

        <p className="mt-16 md:mt-24 max-w-xl font-italic-serif italic text-[color:var(--color-mocha-soft)] text-lg md:text-xl leading-relaxed reveal">
          {t(COPY.heroSub)}
        </p>

        {/* scroll hint */}
        <div className="mt-20 flex items-center gap-3 font-mono-eyebrow opacity-50">
          <span>{t(COPY.scrollHint)}</span>
          <span className="block h-px w-10 bg-[color:var(--color-mocha)]/40" />
        </div>
      </div>
    </section>
  );
}

function FolioMark({ label }: { label: string }) {
  return (
    <div className="container py-10 md:py-16 flex items-center gap-8">
      <div className="hairline flex-1" />
      <span className="font-mono-eyebrow text-[color:var(--color-gold)]">{label}</span>
      <div className="hairline flex-1" />
    </div>
  );
}

function WorkSection1() {
  const { t } = useLang();
  return (
    <section id="work" className="relative">
      <FolioMark label={t(COPY.sec1)} />

      {/* asymmetric editorial spread — left big, right column with caption */}
      <div className="container grid grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="col-span-12 md:col-span-8 reveal">
          <div className="frame vignette aspect-[4/5]">
            <img src={PHOTOS.P03} alt="Pink satin, white column" loading="lazy" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10 md:pt-12 reveal">
          <p className="font-mono-eyebrow opacity-60 mb-4">001 / 04</p>
          <h3 className="font-display text-[36px] md:text-[44px] leading-[1] mb-3">
            {t({ hu: "Oszlop", en: "Column" })}
          </h3>
          <p className="font-italic-serif italic text-[color:var(--color-mocha-soft)] text-lg leading-relaxed mb-4">
            {t(COPY.cap2)}
          </p>
          <p className="font-mono-eyebrow opacity-50">{t(COPY.cap2Meta)}</p>
        </div>
      </div>
    </section>
  );
}

function Interlude() {
  const { t } = useLang();
  return (
    <section className="py-32 md:py-48">
      <div className="container max-w-3xl text-center">
        <span className="block font-mono-eyebrow opacity-50 mb-8">·</span>
        <p className="font-display text-[clamp(32px,5vw,64px)] leading-[1.1] text-[color:var(--color-mocha)] reveal">
          {t(COPY.interlude)}
        </p>
        <p className="mt-6 font-mono-eyebrow opacity-50">— grn.35</p>
      </div>
    </section>
  );
}

function WorkSection2() {
  const { t } = useLang();
  return (
    <section className="relative">
      <FolioMark label={t(COPY.sec2)} />

      {/* full-bleed wide image with side caption below */}
      <div className="container">
        <div className="reveal">
          <div className="frame vignette aspect-[16/10] md:aspect-[16/9]">
            <img src={PHOTOS.P02} alt="At rest — afternoon light" loading="lazy" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-12 mt-6">
          <div className="col-span-12 md:col-span-4 md:col-start-2 reveal">
            <p className="font-mono-eyebrow opacity-60 mb-3">002 / 04</p>
            <h3 className="font-display text-[28px] md:text-[36px] leading-[1] mb-2">
              {t({ hu: "Délután", en: "Afternoon" })}
            </h3>
            <p className="font-italic-serif italic text-[color:var(--color-mocha-soft)] text-base md:text-lg leading-relaxed">
              {t(COPY.cap4)}
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-9 md:text-right reveal">
            <p className="font-mono-eyebrow opacity-50">{t(COPY.cap4Meta)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection3() {
  const { t } = useLang();
  return (
    <section className="relative">
      <FolioMark label={t(COPY.sec3)} />

      {/* two-up asymmetric spread */}
      <div className="container grid grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="col-span-12 md:col-span-4 md:pt-24 reveal">
          <p className="font-mono-eyebrow opacity-60 mb-4">003 / 04</p>
          <h3 className="font-display text-[36px] md:text-[48px] leading-[1] mb-4">
            {t({ hu: "Műterem", en: "Atelier" })}
          </h3>
          <p className="font-italic-serif italic text-[color:var(--color-mocha-soft)] text-lg leading-relaxed mb-3">
            {t(COPY.cap3)}
          </p>
          <p className="font-mono-eyebrow opacity-50">{t(COPY.cap3Meta)}</p>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 reveal">
          <div className="frame vignette aspect-[3/4]">
            <img src={PHOTOS.P01} alt="Dried florals, up close" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function IndexGrid() {
  const { t } = useLang();
  const items = [
    { src: PHOTOS.P04, code: "GRN35 · R12 · F28", caption: t(COPY.cap1) },
    { src: PHOTOS.P03, code: "GRN35 · R09 · F15", caption: t(COPY.cap2) },
    { src: PHOTOS.P02, code: "GRN35 · R09 · F12", caption: t(COPY.cap4) },
    { src: PHOTOS.P01, code: "GRN35 · R04 · F01", caption: t(COPY.cap3) },
  ];
  return (
    <section id="index" className="relative">
      <FolioMark label={t(COPY.sec4)} />
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <figure key={i} className="reveal">
              <div className="frame aspect-[3/4]">
                <img src={it.src} alt={it.caption} loading="lazy" />
              </div>
              <figcaption className="mt-2 flex items-baseline justify-between gap-2">
                <span className="font-italic-serif italic text-sm text-[color:var(--color-mocha-soft)] truncate">
                  {it.caption}
                </span>
                <span className="font-mono-eyebrow opacity-40 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              </figcaption>
              <p className="font-mono-eyebrow opacity-40 mt-1">{it.code}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative">
      <FolioMark label={t(COPY.aboutEyebrow)} />
      <div className="container grid grid-cols-12 gap-6 md:gap-12 items-start">
        <div className="col-span-12 md:col-span-5 reveal">
          <div className="frame vignette aspect-[3/4]">
            <img src={PHOTOS.P04} alt="Self portrait — looking up" loading="lazy" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7 reveal">
          <h2 className="font-display text-[clamp(40px,6vw,84px)] leading-[1] tracking-[-0.01em] mb-8 text-[color:var(--color-mocha)]">
            {t(COPY.aboutTitle)}
          </h2>
          <p className="text-[17px] leading-[1.85] text-[color:var(--color-mocha)]/85 mb-10 max-w-prose">
            {t(COPY.aboutBody)}
          </p>

          <h3 className="font-mono-eyebrow opacity-70 mb-4">{t(COPY.servicesTitle)}</h3>
          <ul className="divide-y divide-[color:var(--color-mocha)]/15 border-y border-[color:var(--color-mocha)]/15">
            {[COPY.service1, COPY.service2, COPY.service3, COPY.service4].map((s, i) => (
              <li key={i} className="py-3 flex items-baseline justify-between gap-4">
                <span className="font-italic-serif italic text-lg">{t(s)}</span>
                <span className="font-mono-eyebrow opacity-40">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useLang();
  const phrase = t({
    hu: "Editorial · Portré · Műterem · Anyag · Természetes fény · 35mm · Középformátum",
    en: "Editorial · Portrait · Atelier · Material · Natural light · 35mm · Medium format",
  });
  const items = Array.from({ length: 8 }).map((_, i) => (
    <span key={i} className="font-display text-[clamp(40px,7vw,96px)] leading-none">
      {phrase} <span className="text-[color:var(--color-gold)]">·</span>
    </span>
  ));
  return (
    <section aria-hidden="true" className="overflow-hidden py-16 md:py-24 border-y border-[color:var(--color-mocha)]/15">
      <div className="marquee-track">{items}{items}</div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  return (
    <section id="contact" className="relative">
      <FolioMark label={t(COPY.contactEyebrow)} />
      <div className="container grid grid-cols-12 gap-6 md:gap-12 items-end pb-32">
        <div className="col-span-12 md:col-span-7 reveal">
          <h2 className="font-display text-[clamp(48px,9vw,140px)] leading-[0.95] tracking-[-0.015em] text-[color:var(--color-mocha)]">
            {t(COPY.contactTitle)}
          </h2>
          <p className="mt-8 max-w-md font-italic-serif italic text-lg md:text-xl text-[color:var(--color-mocha-soft)] leading-relaxed">
            {t(COPY.contactBody)}
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-9 reveal">
          <dl className="space-y-6">
            <div>
              <dt className="font-mono-eyebrow opacity-60 mb-1">{t(COPY.emailLabel)}</dt>
              <dd>
                <a
                  href="mailto:grn35.analog@gmail.com"
                  className="text-xl font-italic-serif italic underline decoration-[color:var(--color-gold)]/60 underline-offset-4 hover:text-[color:var(--color-gold)] transition-colors"
                >
                  grn35.analog@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono-eyebrow opacity-60 mb-1">{t(COPY.igLabel)}</dt>
              <dd>
                <a
                  href="https://instagram.com/grn.35"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-italic-serif italic underline decoration-[color:var(--color-gold)]/60 underline-offset-4 hover:text-[color:var(--color-gold)] transition-colors"
                >
                  @grn.35
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono-eyebrow opacity-60 mb-1">{t(COPY.basedLabel)}</dt>
              <dd className="text-base font-italic-serif italic text-[color:var(--color-mocha-soft)]">
                {t(COPY.basedValue)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-[color:var(--color-mocha)]/15">
      <div className="container py-10 flex flex-wrap items-center justify-between gap-4 font-mono-eyebrow opacity-70">
        <span>© 2026 grn.35 — {t(COPY.footerNote)}</span>
        <span>
          {t({ hu: "Designed in Budapest", en: "Designed in Budapest" })} · 2026
        </span>
      </div>
    </footer>
  );
}

export default function Home() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <ScrollProgress />
      <main className="flex-1">
        <Hero />
        <WorkSection1 />
        <Interlude />
        <WorkSection2 />
        <WorkSection3 />
        <Marquee />
        <About />
        <IndexGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
