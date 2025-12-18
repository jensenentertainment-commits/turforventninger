// app/kart/page.tsx
import Image from "next/image";
import { SiteShell } from "../components/SiteShell";
import { Page, Card } from "../components/ui";

export default function KartPage() {
  return (
    <SiteShell>
      <Page
        title="Kart"
        subtitle="Kartet er veiledende. Det foreligger per nå ingen endelig rute."
      >
        <div className="grid gap-4">
          <Card title="Kartutsnitt" meta="Skala: moderat · Detaljnivå: tilstrekkelig">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <div className="relative h-[440px]">
                <Image
                  src="/kart/kartutsnitt.png"
                  alt="Kartutsnitt (illustrativt)"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* “Papir / trykksak”-tone (roer ned kontrast) */}
                <div className="absolute inset-0 bg-white/14" />

                {/* Svak vignette for dybde (og mer “dokument”) */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_35%,rgba(0,0,0,0.10)_100%)] opacity-60" />

                {/* Diskré rutenett / kartfølelse (samme språk som header/footer) */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.09]">
                  <div className="h-full w-full bg-[linear-gradient(135deg,rgba(0,0,0,0.35)_1px,transparent_1px)] bg-[size:28px_28px]" />
                </div>

                {/* Illustrative ruter (ikke bindende) */}
                <svg
                  viewBox="0 0 1000 500"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  {/* Hovedrute */}
                  <path
                    d="M-40,330 C130,260 250,420 380,330 520,235 640,400 820,285 900,230 980,245 1040,205"
                    fill="none"
                    stroke="rgba(0,0,0,0.38)"
                    strokeWidth="3"
                    strokeDasharray="8 10"
                    strokeLinecap="round"
                  />

                  {/* Alternativ rute (under vurdering) */}
                  <path
                    d="M60,370 C190,330 270,420 430,360 600,295 690,360 860,315"
                    fill="none"
                    stroke="rgba(0,0,0,0.22)"
                    strokeWidth="2.5"
                    strokeDasharray="3 10"
                    strokeLinecap="round"
                  />

                  {/* Markører */}
                  <circle cx="90" cy="360" r="6" fill="rgba(0,0,0,0.50)" />
                  <circle cx="860" cy="315" r="6" fill="rgba(0,0,0,0.50)" />
                </svg>

                {/* “Offisielle” chips */}
                <div className="absolute bottom-4 left-4 rounded-full border border-neutral-200 bg-white/85 px-3 py-1 text-xs text-neutral-800 backdrop-blur">
                  Rute: ikke fastsatt
                </div>
                <div className="absolute bottom-4 right-4 rounded-full border border-neutral-200 bg-white/85 px-3 py-1 text-xs text-neutral-800 backdrop-blur">
                  Forventning: til stede
                </div>

                {/* Liten status-chip øverst (valgfri, men fin) */}
                <div className="absolute top-4 left-4 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-800 backdrop-blur">
                  Kartgrunnlag: illustrativt
                </div>
              </div>
              {/* Kartstempel */}
<div className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2">
  <div className="rounded-full bg-white/65 p-1.5 backdrop-blur">
    <Image
      src="/logo/logo-emblem.png"
      alt=""
      width={28}
      height={28}
      className="opacity-70"
    />
  </div>
</div>

            </div>

            <p className="mt-4 text-xs text-neutral-600">
              Merknad: Kartet illustrerer forventningen. Det kan ikke utledes faktisk
              gjennomføring av kartgrunnlaget.
            </p>
          </Card>

          <Card title="Ruteinformasjon" meta="Oppsummering">
            • Startpunkt: vurderes <br />
            • Endepunkt: vurderes <br />
            • Underlag: varierende <br />
            • Avvik: må påregnes <br />
            • Konklusjon: foreløpig
          </Card>

          <Card title="Forbehold" meta="Utdrag">
            Foreningen tar forbehold om endringer i tempo, rute, ambisjonsnivå og kartets
            fortolkning.
          </Card>
        </div>
      </Page>
    </SiteShell>
  );
}
