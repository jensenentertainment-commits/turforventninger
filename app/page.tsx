// app/page.tsx
import Link from "next/link";
import { SiteShell } from "./components/SiteShell";
import { SITE } from "./lib/site";
import Image from "next/image";

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "utmark" | "vatmark" | "urban" | "tempo" | "neutral";
}) {
  const tones: Record<string, string> = {
    utmark: "border-emerald-200 bg-emerald-50 text-emerald-900",
    vatmark: "border-sky-200 bg-sky-50 text-sky-900",
    urban: "border-amber-200 bg-amber-50 text-amber-900",
    tempo: "border-violet-200 bg-violet-50 text-violet-900",
    neutral: "border-neutral-200 bg-white text-neutral-700",
  };

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs",
        tones[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function Card({
  title,
  meta,
  children,
  href,
}: {
  title: string;
  meta: string;
  children: React.ReactNode;
  href?: string;
}) {
  const Inner = (
    <div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-medium tracking-tight">{title}</h3>
          <p className="mt-1 text-xs text-neutral-600">{meta}</p>
        </div>
        <span className="text-xs text-neutral-500">Se</span>
      </div>

      <div className="mt-4 text-sm text-neutral-700">{children}</div>
    </div>
  );

  return href ? <Link href={href}>{Inner}</Link> : Inner;
}

export default function Home() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
         {/* Venstre: visuell flate */}
<div className="relative min-h-[280px]">
<Image
  src="/bilder/rolig-sti.jpeg"
    alt="Rolig tursti i moderat tempo"
    fill
    priority
    className="object-cover object-[50%_60%]"
  />

  {/* Institusjonell overlay */}
  <div className="absolute inset-0 bg-emerald-950/35" />

  {/* Kartlinje-tekstur */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
    <div className="h-full w-full bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:24px_24px]" />
  </div>

  {/* Badges */}
  <div className="absolute bottom-6 left-6 right-6">
    <div className="flex flex-wrap gap-2">
      <Badge tone="utmark">Utmark</Badge>
      <Badge tone="vatmark">Våtmark</Badge>
      <Badge tone="urban">Urbane bymiljøer</Badge>
      <Badge tone="tempo">Moderat tempo</Badge>
    </div>
  </div>
</div>


            {/* Høyre: tekst */}
            <div className="p-8 lg:p-10">
              <p className="text-xs uppercase tracking-widest text-neutral-500">
                Offisielt organisert forventningsarbeid
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
                {SITE.displayName}
              </h1>

              <p className="mt-2 text-sm text-neutral-600">{SITE.officialName}</p>

              <p className="mt-5 text-base text-neutral-700">
                Foreningen er etablert for å ivareta foreningens formål, samt
                opprettholde forventningen om rolige turer i moderat tempo.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/om"
                  className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
                >
                  Les om foreningen
                </Link>
                <Link
                  href="/referater"
                  className="rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                >
                  Se referater
                </Link>
              </div>

              <p className="mt-6 text-sm text-neutral-600">
                Status: <span className="font-medium">{SITE.tagline}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Seksjoner */}
        <section className="mt-10 grid gap-4 lg:grid-cols-3">
          <Card
            title="Neste mulige tur"
            meta="Tidspunkt vurderes · Forutsetter forhold"
            href="/referater"
          >
            Det foreligger en forventning om at en rolig tur i moderat tempo kan
            finne sted på et senere tidspunkt, forutsatt at forholdene oppleves
            som riktige.
          </Card>

          <Card
            title="Organisasjon"
            meta="Utvalg · Komiteer · Arbeidsgrupper"
            href="/organisasjon"
          >
            Foreningen er strukturert for å sikre bred involvering, god
            forankring og tilstrekkelig vurdering av tempo, rute og forventning.
          </Card>

          <Card
            title="Siste styrebehandling"
            meta="Protokoll 01/2026 (utkast) · Videreføring"
            href="/referater"
          >
            Styret vurderer at forventningen fortsatt er relevant og anbefaler
            videreføring. Eventuelle presiseringer utredes nærmere.
          </Card>
        </section>

        {/* Informasjon */}
        <section className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-medium tracking-tight">
              Hva foreningen gjør
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Vedlikeholder forventningen.</li>
              <li>• Avklarer tempo før, under og etter mulige turer.</li>
              <li>• Etablerer utvalg ved behov (midlertidig, forlenget).</li>
              <li>• Dokumenterer vurderinger i referatform.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-medium tracking-tight">
              Forbehold (utdrag)
            </h2>
            <p className="mt-4 text-sm text-neutral-700">
              Foreningen tar forbehold om endringer i tempo, rute og
              ambisjonsnivå. Videre tas forbehold om at forventningen kan
              justeres ved skiftende forutsetninger.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
