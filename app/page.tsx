"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Locale = "fr" | "en" | "ar";

type LocalizedContent = {
  dir: "ltr" | "rtl";
  navLabel: string;
  navItems: { label: string; href: string }[];
  primaryCta: string;
  secondaryCta: string;
  hero: {
    label: string;
    title: string;
    copy: string;
    proofValue: string;
    proofCopy: string;
    meta: string;
  };
  manifesto: string[];
  problem: {
    label: string;
    title: string;
    cards: { title: string; copy: string }[];
    statValue: string;
    statCopy: string;
    source: string;
  };
  solution: {
    label: string;
    title: string;
    copy: string;
    features: string[];
  };
  loop: {
    label: string;
    title: string;
    items: string[];
    steps: { title: string; copy: string }[];
  };
  market: {
    label: string;
    title: string;
    stats: { value: string; label: string }[];
  };
  vision: {
    label: string;
    title: string;
    copy: string;
    trust: string[];
    audiencesLabel: string;
    audiences: string[];
  };
  contact: {
    label: string;
    title: string;
    emailLabel: string;
    placeholder: string;
  };
  footerTagline: string;
};

const content: Record<Locale, LocalizedContent> = {
  fr: {
    dir: "ltr",
    navLabel: "Navigation principale",
    navItems: [
      { label: "Problème", href: "#probleme" },
      { label: "Solution", href: "#solution" },
      { label: "Marché", href: "#marche" },
      { label: "Équipe", href: "#equipe" },
      { label: "Contact", href: "#contact" },
    ],
    primaryCta: "Demander une avance",
    secondaryCta: "Voir comment ça marche",
    hero: {
      label: "Performance Capital Infrastructure",
      title: "Capital de croissance non-dilutif pour les SaaS européens.",
      copy:
        "Une nouvelle infrastructure de croissance: du capital aligné avec les revenus, pas avec la dilution.",
      proofValue: "48 h",
      proofCopy: "de la connexion au virement",
      meta: "Paris · Established 2026",
    },
    manifesto: [
      "Pas d'equity.",
      "Pas de garantie personnelle.",
      "Souscription sur la performance.",
    ],
    problem: {
      label: "Problème",
      title: "La dépendance au capital étranger a un coût stratégique.",
      cards: [
        {
          title: "Banques européennes",
          copy:
            "Cycles longs, garanties personnelles et lecture limitée des revenus récurrents digitaux.",
        },
        {
          title: "Fonds VC US-UK",
          copy:
            "Capital utile, mais cher en dilution et rarement aligné avec les besoins tactiques ROAS.",
        },
        {
          title: "Cashflow propre",
          copy:
            "Autofinancement sain, mais insuffisant quand les cohortes prouvent déjà leur rendement.",
        },
      ],
      statValue: "73 %",
      statCopy:
        "du capital de croissance des SaaS français vient des États-Unis et du Royaume-Uni.",
      source: "Sources: Atomico · Bpifrance Le Lab",
    },
    solution: {
      label: "Solution",
      title: "Une avance RBF souscrite sur la performance réelle.",
      copy:
        "Roasfund finance la croissance SaaS européenne avec des données de performance temps réel: pas d'equity, pas de collatéral. Un rail entre performance et capital.",
      features: ["0 % dilution", "Décision en 48 h", "Sans garantie perso", "Remboursement flexible"],
    },
    loop: {
      label: "Comment ça marche",
      title: "La Revenue Loop transforme la performance en capital.",
      items: ["Capital", "Growth", "Revenue", "Capital"],
      steps: [
        {
          title: "Underwrite by data",
          copy:
            "Les données Stripe, ad accounts et CRM connectées pilotent chaque décision: mesurable, actuelle, transparente.",
        },
        {
          title: "Repay by revenue",
          copy:
            "Un pourcentage fixe du revenu jusqu'au règlement de l'avance. Aligné avec la croissance réelle d'un SaaS.",
        },
        {
          title: "Operate sovereign",
          copy:
            "Infrastructure européenne, base de capital européenne, régime réglementaire européen: par conception.",
        },
      ],
    },
    market: {
      label: "Marché",
      title: "Une opportunité européenne de €12 milliards, aujourd'hui.",
      stats: [
        { value: "30 000+", label: "SaaS actifs en Europe" },
        { value: "≈6 000", label: "sièges en France" },
        { value: "€85 Mds", label: "revenus SaaS agrégés, 2025" },
        { value: "€12 Mds", label: "marché RBF européen projeté 2027" },
        { value: "+22 %", label: "croissance YoY moyenne pondérée" },
        { value: "68 %", label: "fondateurs EU ouverts au non-dilutif" },
      ],
    },
    vision: {
      label: "Vision souveraine",
      title:
        "L'infrastructure financière par défaut des économies de performance européennes.",
      copy:
        "Là où les entreprises digitales accèdent au capital à la vitesse du revenu, sur les termes de leurs données. Roasfund construit une alternative souveraine: conformité ACPR par design, attribution ROAS post-cookie et infrastructure cloud européenne.",
      trust: ["RGPD", "SecNumCloud", "ACPR"],
      audiencesLabel: "Audiences clés",
      audiences: [
        "Fondateurs SaaS €2M-€20M ARR",
        "CFO et finance teams scale-up",
        "Investisseurs institutionnels",
        "Bpifrance, French Tech, incubateurs",
      ],
    },
    contact: {
      label: "Contact",
      title: "Construisons l'infrastructure de croissance européenne.",
      emailLabel: "Email professionnel",
      placeholder: "fondateur@saas.eu",
    },
    footerTagline: "Performance Capital Infrastructure",
  },
  en: {
    dir: "ltr",
    navLabel: "Main navigation",
    navItems: [
      { label: "Problem", href: "#probleme" },
      { label: "Solution", href: "#solution" },
      { label: "Market", href: "#marche" },
      { label: "Team", href: "#equipe" },
      { label: "Contact", href: "#contact" },
    ],
    primaryCta: "Request funding",
    secondaryCta: "See how it works",
    hero: {
      label: "Performance Capital Infrastructure",
      title: "Non-dilutive growth capital for European SaaS.",
      copy:
        "A new growth infrastructure: capital aligned with revenue, not dilution.",
      proofValue: "48 h",
      proofCopy: "from connection to transfer",
      meta: "Paris · Established 2026",
    },
    manifesto: [
      "No equity.",
      "No personal guarantee.",
      "Underwritten on performance.",
    ],
    problem: {
      label: "Problem",
      title: "Dependence on foreign capital carries a strategic cost.",
      cards: [
        {
          title: "European banks",
          copy:
            "Long cycles, personal guarantees, and a limited read on digital recurring revenue.",
        },
        {
          title: "US-UK VC funds",
          copy:
            "Useful capital, but expensive in dilution and rarely aligned with tactical ROAS needs.",
        },
        {
          title: "Internal cashflow",
          copy:
            "Healthy self-funding, but not enough when cohorts already prove their yield.",
        },
      ],
      statValue: "73%",
      statCopy:
        "of French SaaS growth capital comes from the United States and the United Kingdom.",
      source: "Sources: Atomico · Bpifrance Le Lab",
    },
    solution: {
      label: "Solution",
      title: "An RBF advance underwritten on real performance.",
      copy:
        "Roasfund finances European SaaS growth with real-time performance data: no equity, no collateral. A rail between performance and capital.",
      features: ["0% dilution", "48 h decision", "No personal guarantee", "Flexible repayment"],
    },
    loop: {
      label: "How it works",
      title: "The Revenue Loop turns performance into capital.",
      items: ["Capital", "Growth", "Revenue", "Capital"],
      steps: [
        {
          title: "Underwrite by data",
          copy:
            "Connected Stripe, ad account, and CRM data drives every decision: measurable, current, transparent.",
        },
        {
          title: "Repay by revenue",
          copy:
            "A fixed percentage of revenue until the advance is settled. Aligned with real SaaS growth.",
        },
        {
          title: "Operate sovereign",
          copy:
            "European infrastructure, European capital base, European regulatory regime: by design.",
        },
      ],
    },
    market: {
      label: "Market",
      title: "A €12 billion European opportunity, today.",
      stats: [
        { value: "30,000+", label: "active SaaS companies in Europe" },
        { value: "≈6,000", label: "headquartered in France" },
        { value: "€85B", label: "aggregate SaaS revenue, 2025" },
        { value: "€12B", label: "projected European RBF market, 2027" },
        { value: "+22%", label: "weighted average YoY growth" },
        { value: "68%", label: "EU founders open to non-dilutive capital" },
      ],
    },
    vision: {
      label: "Sovereign vision",
      title: "The default financial infrastructure for Europe's performance economy.",
      copy:
        "Where digital companies access capital at revenue speed, on the terms of their own data. Roasfund builds a sovereign alternative: ACPR compliance by design, post-cookie ROAS attribution, and European cloud infrastructure.",
      trust: ["GDPR", "SecNumCloud", "ACPR"],
      audiencesLabel: "Key audiences",
      audiences: [
        "SaaS founders at €2M-€20M ARR",
        "Scale-up CFOs and finance teams",
        "Institutional investors",
        "Bpifrance, French Tech, incubators",
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's build Europe's growth infrastructure.",
      emailLabel: "Work email",
      placeholder: "founder@saas.eu",
    },
    footerTagline: "Performance Capital Infrastructure",
  },
  ar: {
    dir: "rtl",
    navLabel: "التنقل الرئيسي",
    navItems: [
      { label: "المشكلة", href: "#probleme" },
      { label: "الحل", href: "#solution" },
      { label: "السوق", href: "#marche" },
      { label: "الفريق", href: "#equipe" },
      { label: "تواصل", href: "#contact" },
    ],
    primaryCta: "اطلب تمويلا",
    secondaryCta: "كيف يعمل",
    hero: {
      label: "بنية رأس مال الأداء",
      title: "رأس مال نمو غير مخفف لشركات SaaS الأوروبية.",
      copy:
        "بنية نمو جديدة: رأس مال مرتبط بالإيرادات، وليس بتخفيف الملكية.",
      proofValue: "48 ساعة",
      proofCopy: "من ربط البيانات إلى التحويل",
      meta: "باريس · تأسست 2026",
    },
    manifesto: [
      "بدون تنازل عن حصص.",
      "بدون ضمان شخصي.",
      "اكتتاب مبني على الأداء.",
    ],
    problem: {
      label: "المشكلة",
      title: "الاعتماد على رأس المال الأجنبي يحمل تكلفة استراتيجية.",
      cards: [
        {
          title: "البنوك الأوروبية",
          copy:
            "دورات طويلة، ضمانات شخصية، وفهم محدود للإيرادات الرقمية المتكررة.",
        },
        {
          title: "صناديق الاستثمار الأمريكية والبريطانية",
          copy:
            "رأس مال مفيد، لكنه مكلف من حيث تخفيف الملكية ونادرا ما يواكب احتياجات ROAS العملية.",
        },
        {
          title: "التدفق النقدي الذاتي",
          copy:
            "تمويل ذاتي صحي، لكنه غير كاف عندما تثبت المجموعات بالفعل عائدها.",
        },
      ],
      statValue: "73%",
      statCopy:
        "من رأس مال نمو شركات SaaS الفرنسية يأتي من الولايات المتحدة والمملكة المتحدة.",
      source: "المصادر: Atomico · Bpifrance Le Lab",
    },
    solution: {
      label: "الحل",
      title: "سلفة RBF يتم تقييمها على الأداء الحقيقي.",
      copy:
        "تمول Roasfund نمو SaaS الأوروبي ببيانات أداء لحظية: بدون أسهم وبدون ضمانات. مسار مباشر بين الأداء ورأس المال.",
      features: ["0% تخفيف ملكية", "قرار خلال 48 ساعة", "بدون ضمان شخصي", "سداد مرن"],
    },
    loop: {
      label: "كيف يعمل",
      title: "تحول حلقة الإيراد الأداء إلى رأس مال.",
      items: ["رأس المال", "النمو", "الإيراد", "رأس المال"],
      steps: [
        {
          title: "اكتتاب عبر البيانات",
          copy:
            "بيانات Stripe وحسابات الإعلانات وCRM المتصلة تقود كل قرار: قابلة للقياس، حديثة، وشفافة.",
        },
        {
          title: "السداد من الإيراد",
          copy:
            "نسبة ثابتة من الإيراد حتى تسوية السلفة. متوافقة مع النمو الحقيقي لشركة SaaS.",
        },
        {
          title: "تشغيل سيادي",
          copy:
            "بنية أوروبية، قاعدة رأس مال أوروبية، ونظام تنظيمي أوروبي: بالتصميم.",
        },
      ],
    },
    market: {
      label: "السوق",
      title: "فرصة أوروبية بقيمة 12 مليار يورو اليوم.",
      stats: [
        { value: "+30,000", label: "شركة SaaS نشطة في أوروبا" },
        { value: "≈6,000", label: "مقرها في فرنسا" },
        { value: "€85B", label: "إيرادات SaaS المجمعة في 2025" },
        { value: "€12B", label: "سوق RBF الأوروبي المتوقع في 2027" },
        { value: "+22%", label: "متوسط نمو سنوي مرجح" },
        { value: "68%", label: "مؤسسون أوروبيون منفتحون على رأس مال غير مخفف" },
      ],
    },
    vision: {
      label: "رؤية سيادية",
      title: "البنية المالية الافتراضية لاقتصاد الأداء الأوروبي.",
      copy:
        "حيث تصل الشركات الرقمية إلى رأس المال بسرعة الإيراد وبشروط بياناتها. تبني Roasfund بديلا سياديا: امتثال ACPR بالتصميم، إسناد ROAS بعد ملفات الارتباط، وبنية سحابية أوروبية.",
      trust: ["GDPR", "SecNumCloud", "ACPR"],
      audiencesLabel: "الجمهور الرئيسي",
      audiences: [
        "مؤسسو SaaS بإيرادات ARR بين 2 و20 مليون يورو",
        "مديرو المالية وفرق التمويل في شركات النمو",
        "المستثمرون المؤسسيون",
        "Bpifrance وFrench Tech والحاضنات",
      ],
    },
    contact: {
      label: "تواصل",
      title: "لنبن بنية النمو الأوروبية.",
      emailLabel: "البريد المهني",
      placeholder: "founder@saas.eu",
    },
    footerTagline: "بنية رأس مال الأداء",
  },
};

const localeLabels: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
];

function Logo({ variant = "lime" }: { variant?: "lime" | "ink" }) {
  return (
    <Image
      src={variant === "lime" ? "/websites/roasfund/logo-lime.png" : "/websites/roasfund/logo-ink.png"}
      alt="Roasfund"
      width={896}
      height={353}
      className="h-9 w-auto md:h-10"
      priority={variant === "lime"}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
      {children}
    </p>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const page = content[locale];
  const isArabic = locale === "ar";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = page.dir;
  }, [locale, page.dir]);

  return (
    <main
      dir={page.dir}
      className={`min-h-screen bg-[#0A0E1A] text-white ${
        isArabic ? "font-arabic" : ""
      }`}
    >
      <header className="sticky top-0 z-50 border-b border-[#1A2234] bg-[#06080F]/95 backdrop-blur">
        <nav
          aria-label={page.navLabel}
          className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-5 py-4 md:px-8"
        >
          <a href="#top" className="col-span-6 inline-flex w-fit items-center md:col-span-3">
            <Logo />
          </a>
          <div className="col-span-12 row-start-2 flex items-center gap-5 overflow-x-auto text-sm font-medium text-slate-200 md:col-span-5 md:row-start-auto md:justify-center md:overflow-visible">
            {page.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-[#C5F02E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="col-span-6 flex items-center justify-end gap-4 md:col-span-4">
            <div
              className="inline-flex items-center border border-[#C5F02E]/70 text-xs font-bold text-[#C5F02E]"
              aria-label="Language"
            >
              {localeLabels.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLocale(item.code)}
                  aria-pressed={locale === item.code}
                  className={`px-3 py-3 transition-colors hover:bg-[#C5F02E] hover:text-[#06080F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E] ${
                    locale === item.code ? "bg-[#C5F02E] text-[#06080F]" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden border border-[#C5F02E] px-4 py-3 text-sm font-semibold text-[#C5F02E] transition-colors hover:bg-white hover:text-[#06080F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E] sm:inline-flex"
            >
              {page.primaryCta}
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="bg-[#06080F]">
        <div className="mx-auto grid min-h-[calc(100svh-74px)] max-w-7xl grid-cols-12 content-center gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-8">
            <SectionLabel>{page.hero.label}</SectionLabel>
            <h1 className="mt-7 max-w-5xl font-headline text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              {page.hero.title}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-200">
              {page.hero.copy}
            </p>
            <div className="mt-8 grid max-w-3xl gap-2 sm:grid-cols-3">
              {page.manifesto.map((line) => (
                <p
                  key={line}
                  className="border border-[#1A2234] px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-slate-200"
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-[#C5F02E] px-6 py-4 text-base font-semibold text-[#C5F02E] transition-colors hover:bg-white hover:text-[#06080F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E]"
              >
                {page.primaryCta}
              </a>
              <a
                href="#comment-ca-marche"
                className="inline-flex items-center justify-center border border-[#1A2234] px-6 py-4 text-base font-semibold text-white transition-colors hover:border-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E]"
              >
                {page.secondaryCta}
              </a>
            </div>
          </div>
          <aside className="col-span-12 self-end border-l-2 border-[#C5F02E] bg-[#0A0E1A] p-6 rtl:border-l-0 rtl:border-r-2 lg:col-span-4 lg:p-8">
            <p className="font-mono text-7xl font-medium leading-none text-[#C5F02E] sm:text-8xl">
              {page.hero.proofValue}
            </p>
            <p className="mt-4 max-w-xs text-lg font-medium text-slate-100">
              {page.hero.proofCopy}
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              {page.hero.meta}
            </p>
          </aside>
        </div>
      </section>

      <section id="probleme" className="border-y border-[#1A2234] bg-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel>{page.problem.label}</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight text-white md:text-5xl">
              {page.problem.title}
            </h2>
          </div>
          <div className="col-span-12 grid gap-4 md:grid-cols-3 lg:col-span-8">
            {page.problem.cards.map((item) => (
              <article key={item.title} className="border border-[#1A2234] bg-[#111726] p-6">
                <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{item.copy}</p>
              </article>
            ))}
            <div className="border border-[#1A2234] bg-[#06080F] p-6 md:col-span-3">
              <p className="font-mono text-6xl font-medium text-[#C5F02E]">
                {page.problem.statValue}
              </p>
              <p className="mt-3 max-w-3xl text-xl text-slate-200">
                {page.problem.statCopy}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                {page.problem.source}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="bg-[#F7F8FA] text-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-5">
            <Logo variant="ink" />
            <SectionLabel>{page.solution.label}</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-5xl">
              {page.solution.title}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="max-w-3xl text-xl leading-8 text-slate-600">
              {page.solution.copy}
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {page.solution.features.map((feature) => (
                <div key={feature} className="border border-slate-200 bg-white p-6">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-slate-600">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="comment-ca-marche" className="bg-[#0A0E1A]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <SectionLabel>{page.loop.label}</SectionLabel>
              <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-5xl">
                {page.loop.title}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <div className="grid grid-cols-2 border border-[#1A2234] bg-[#06080F]">
                {page.loop.items.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="min-h-28 border border-[#1A2234] p-5"
                  >
                    <p className="font-mono text-xs font-medium text-[#C5F02E]">
                      0{index + 1}
                    </p>
                    <p className="mt-8 font-headline text-2xl font-bold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {page.loop.steps.map((step, index) => (
              <article key={step.title} className="border border-[#1A2234] bg-[#111726] p-6">
                <p className="font-mono text-sm font-medium text-[#C5F02E]">
                  0{index + 1}
                </p>
                <h3 className="mt-8 font-headline text-2xl font-bold">{step.title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marche" className="border-y border-[#1A2234] bg-[#06080F]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
          <SectionLabel>{page.market.label}</SectionLabel>
          <h2 className="mt-5 max-w-4xl font-headline text-4xl font-bold leading-tight md:text-5xl">
            {page.market.title}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.market.stats.map((stat) => (
              <div key={`${stat.value}-${stat.label}`} className="border border-[#1A2234] p-6">
                <p className="font-mono text-4xl font-medium text-white">{stat.value}</p>
                <p className="mt-4 leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipe" className="bg-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-5">
            <SectionLabel>{page.vision.label}</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-5xl">
              {page.vision.title}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xl leading-8 text-slate-200">{page.vision.copy}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {page.vision.trust.map((item) => (
                <div key={item} className="border border-[#1A2234] bg-[#111726] p-5">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 border border-[#1A2234] bg-[#111726] p-6">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                {page.vision.audiencesLabel}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {page.vision.audiences.map((audience) => (
                  <p key={audience} className="border border-[#1A2234] px-4 py-3 text-slate-200">
                    {audience}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F7F8FA] text-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel>{page.contact.label}</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-6xl">
              {page.contact.title}
            </h2>
          </div>
          <form className="col-span-12 self-end lg:col-span-5" action="mailto:elia@roasfund.com">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-600">
              {page.contact.emailLabel}
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={page.contact.placeholder}
                className="min-h-14 flex-1 border border-slate-200 bg-white px-4 text-base text-[#0A0E1A] outline-none transition-colors placeholder:text-slate-400 focus:border-[#0A0E1A]"
              />
              <button
                type="submit"
                className="min-h-14 border border-[#0A0E1A] px-6 text-base font-semibold transition-colors hover:border-[#C5F02E] hover:text-[#0A0E1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0E1A]"
              >
                {page.primaryCta}
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#06080F]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-12 md:px-8">
          <div className="col-span-12 md:col-span-5">
            <Logo />
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
              {page.footerTagline}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-sm font-semibold text-white">{page.contact.label}</p>
            <a className="mt-3 block text-slate-400 hover:text-[#C5F02E]" href="mailto:elia@roasfund.com">
              elia@roasfund.com
            </a>
            <a className="mt-2 block text-slate-400 hover:text-[#C5F02E]" href="https://roasfund.com">
              roasfund.com
            </a>
          </div>
          <p className="col-span-12 self-end font-mono text-xs text-slate-400 md:col-span-3 md:text-right rtl:md:text-left">
            © 2026 ROASFUND
          </p>
        </div>
      </footer>
    </main>
  );
}
