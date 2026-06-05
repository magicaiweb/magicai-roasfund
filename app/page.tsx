import Image from "next/image";

const navItems = [
  { label: "Problème", href: "#probleme" },
  { label: "Solution", href: "#solution" },
  { label: "Marché", href: "#marche" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

const impasses = [
  {
    title: "Banques européennes",
    copy: "Cycles longs, garanties personnelles et lecture limitée des revenus récurrents digitaux.",
  },
  {
    title: "Fonds VC US-UK",
    copy: "Capital utile, mais cher en dilution et rarement aligné avec les besoins tactiques ROAS.",
  },
  {
    title: "Cashflow propre",
    copy: "Autofinancement sain, mais insuffisant quand les cohortes prouvent déjà leur rendement.",
  },
];

const features = [
  "0 % dilution",
  "Décision en 48 h",
  "Sans garantie perso",
  "Remboursement flexible",
];

const steps = [
  {
    title: "Connexion des données",
    copy: "Stripe, comptes publicitaires, CRM et analytics sont connectés en lecture seule.",
  },
  {
    title: "Scoring & offre IA",
    copy: "Roasfund modélise la qualité des revenus, la marge et la vélocité d'acquisition.",
  },
  {
    title: "Virement & remboursement",
    copy: "L'avance est versée, puis remboursée comme un pourcentage plafonné du revenu.",
  },
];

const marketStats = [
  { value: "30 000+", label: "SaaS européens adressables" },
  { value: "€85 Mds", label: "revenus récurrents logiciels" },
  { value: "€12 Mds", label: "marché RBF estimé en 2027" },
  { value: "68 %", label: "fondateurs ouverts au non-dilutif" },
];

function Logo({ variant = "lime" }: { variant?: "lime" | "ink" }) {
  return (
    <Image
      src={
        variant === "lime"
          ? "/websites/roasfund/logo-lime.svg"
          : "/websites/roasfund/logo-ink.svg"
      }
      alt="Roasfund"
      width={170}
      height={28}
      className="h-7 w-auto"
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
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-white">
      <header className="sticky top-0 z-50 border-b border-[#1A2234] bg-[#06080F]/95 backdrop-blur">
        <nav
          aria-label="Navigation principale"
          className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-4 px-5 py-4 md:px-8"
        >
          <a href="#top" className="col-span-6 inline-flex w-fit items-center md:col-span-3">
            <Logo />
          </a>
          <div className="col-span-12 row-start-2 flex items-center gap-5 overflow-x-auto text-sm font-medium text-slate-200 md:col-span-6 md:row-start-auto md:justify-center md:overflow-visible">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-[#C5F02E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="col-span-6 justify-self-end border border-[#C5F02E] px-4 py-3 text-sm font-semibold text-[#C5F02E] transition-colors hover:bg-white hover:text-[#06080F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E] md:col-span-3"
          >
            Demander une avance
          </a>
        </nav>
      </header>

      <section id="top" className="bg-[#06080F]">
        <div className="mx-auto grid min-h-[calc(100svh-74px)] max-w-7xl grid-cols-12 content-center gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-8">
            <SectionLabel>Performance Capital Infrastructure</SectionLabel>
            <h1 className="mt-7 max-w-5xl font-headline text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              Capital de croissance non-dilutif pour les SaaS européens.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-200">
              Financement adossé aux revenus et à la performance ROAS.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-[#C5F02E] px-6 py-4 text-base font-semibold text-[#C5F02E] transition-colors hover:bg-white hover:text-[#06080F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E]"
              >
                Demander une avance
              </a>
              <a
                href="#comment-ca-marche"
                className="inline-flex items-center justify-center border border-[#1A2234] px-6 py-4 text-base font-semibold text-white transition-colors hover:border-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5F02E]"
              >
                Voir comment ça marche
              </a>
            </div>
          </div>
          <aside className="col-span-12 self-end border-l-2 border-[#C5F02E] bg-[#0A0E1A] p-6 lg:col-span-4 lg:p-8">
            <p className="font-mono text-7xl font-medium leading-none text-[#C5F02E] sm:text-8xl">
              48 h
            </p>
            <p className="mt-4 max-w-xs text-lg font-medium text-slate-100">
              de la connexion au virement
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              underwriting data-driven
            </p>
          </aside>
        </div>
      </section>

      <section id="probleme" className="border-y border-[#1A2234] bg-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-4">
            <SectionLabel>Problème</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight text-white md:text-5xl">
              Le capital de croissance reste mal calibré pour les SaaS.
            </h2>
          </div>
          <div className="col-span-12 grid gap-4 md:grid-cols-3 lg:col-span-8">
            {impasses.map((item) => (
              <article key={item.title} className="border border-[#1A2234] bg-[#111726] p-6">
                <h3 className="font-headline text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-5 leading-7 text-slate-400">{item.copy}</p>
              </article>
            ))}
            <div className="border border-[#1A2234] bg-[#06080F] p-6 md:col-span-3">
              <p className="font-mono text-6xl font-medium text-[#C5F02E]">4×</p>
              <p className="mt-3 max-w-3xl text-xl text-slate-200">
                plus de capital de croissance disponible par startup aux États-Unis qu&apos;en Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="bg-[#F7F8FA] text-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-5">
            <Logo variant="ink" />
            <SectionLabel>Solution</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-5xl">
              Une avance RBF souscrite sur la performance réelle.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="max-w-3xl text-xl leading-8 text-slate-600">
              Roasfund connecte les sources de revenus et d&apos;acquisition, mesure la qualité de la
              traction et débloque un financement non-dilutif, remboursé uniquement quand le revenu
              rentre.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
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
              <SectionLabel>Comment ça marche</SectionLabel>
              <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-5xl">
                Trois étapes, du signal data au capital disponible.
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
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
          <SectionLabel>Marché</SectionLabel>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat) => (
              <div key={stat.value} className="border border-[#1A2234] p-6">
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
            <SectionLabel>Souveraineté</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-5xl">
              Une infrastructure financière européenne par conception.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-xl leading-8 text-slate-200">
              Roasfund est pensé pour les contraintes des fondateurs, investisseurs et régulateurs
              européens: gouvernance RGPD, architecture compatible SecNumCloud, parcours de
              conformité ACPR et underwriting explicable.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["RGPD", "SecNumCloud", "ACPR"].map((item) => (
                <div key={item} className="border border-[#1A2234] bg-[#111726] p-5">
                  <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-slate-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#F7F8FA] text-[#0A0E1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 px-5 py-20 md:px-8 lg:py-28">
          <div className="col-span-12 lg:col-span-7">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 font-headline text-4xl font-bold leading-tight md:text-6xl">
              Construisons l&apos;infrastructure de croissance européenne.
            </h2>
          </div>
          <form className="col-span-12 self-end lg:col-span-5" action="mailto:elia@roasfund.com">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-600">
              Email professionnel
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="fondateur@saas.eu"
                className="min-h-14 flex-1 border border-slate-200 bg-white px-4 text-base text-[#0A0E1A] outline-none transition-colors placeholder:text-slate-400 focus:border-[#0A0E1A]"
              />
              <button
                type="submit"
                className="min-h-14 border border-[#0A0E1A] px-6 text-base font-semibold transition-colors hover:border-[#C5F02E] hover:text-[#0A0E1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0E1A]"
              >
                Demander une avance
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
              Performance Capital Infrastructure
            </p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-sm font-semibold text-white">Contact</p>
            <a className="mt-3 block text-slate-400 hover:text-[#C5F02E]" href="mailto:elia@roasfund.com">
              elia@roasfund.com
            </a>
            <a className="mt-2 block text-slate-400 hover:text-[#C5F02E]" href="https://roasfund.com">
              roasfund.com
            </a>
          </div>
          <p className="col-span-12 self-end font-mono text-xs text-slate-400 md:col-span-3 md:text-right">
            © 2026 ROASFUND
          </p>
        </div>
      </footer>
    </main>
  );
}
