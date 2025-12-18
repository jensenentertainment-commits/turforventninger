// app/not-found.tsx
import Link from "next/link";
import { SiteShell } from "./components/SiteShell";
import { Page, Card } from "./components/ui";
import { SITE } from "./lib/site";

export default function NotFound() {
  return (
    <SiteShell>
      <Page
        title="Ikke funnet"
        subtitle="Det forespurte innholdet foreligger ikke per nå."
      >
        <div className="grid gap-4">
          <Card title="Status" meta="Foreløpig">
            <p>
              Ressursen kan være flyttet, vurdert, utsatt eller aldri etablert.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Det tas forbehold om at ressursen kan bli tilgjengelig på et senere
              tidspunkt.
            </p>
          </Card>

          <Card title="Avvik" meta="Dokumentasjon">
            <p>
              Manglende tilgjengelighet anses som et avvik i henhold til gjeldende
              praksis.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href="/docs/avvikshandtering-forelopig_v1-0.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
              >
                Last ned: Avvikshåndtering (foreløpig) (PDF)
              </a>

              <Link
                href="/supplerende-materiale"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
              >
                Supplerende materiale
              </Link>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              Merk: Nedlastning innebærer ikke at avviket er løst.
            </p>
          </Card>

          <Card title="Videre ferd" meta="Veiledende">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
              >
                Tilbake til forsiden
              </Link>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
              >
                Kontakt (foreløpig)
              </Link>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              {SITE.domain} anses som foreningens primære informasjonsflate.
            </p>
          </Card>
        </div>
      </Page>
    </SiteShell>
  );
}
