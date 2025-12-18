import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { Page, Card } from "../components/ui";

export default function MedlemskapPage() {
  return (
    <SiteShell>
      <Page
        title="Medlemskap"
        subtitle="Støttemedlemskap uten forpliktelser. Forventningen videreføres ved anledning."
      >
        <div className="grid gap-4">
          <Card title="Støttemedlemskap" meta="Uforpliktende">
            <div className="space-y-3 text-sm text-neutral-700">
              <p>
                Støttemedlemskap er en intensjonsbasert tilknytning til foreningen.
                Medlemskapet kan forekomme uten faktisk aktivitet.
              </p>
              <p>
                Medlemskapet gir rett til å opprettholde en indre forventning om rolige
                turer i moderat tempo, uavhengig av gjennomføring.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/kontakt?type=medlemskap&unit=medlemskapsutvalget"
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-800"
                >
                  Send medlemskapsforespørsel
                </Link>

                <Link
                  href="/supplerende-materiale"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 hover:bg-neutral-50"
                >
                  Se vilkår (utdrag)
                </Link>
              </div>

              <p className="text-xs text-neutral-500">
                Innsendt forespørsel innebærer ikke innvilgelse.
              </p>
            </div>
          </Card>

          <Card title="Behandlingsløp" meta="Veiledende">
            <div className="space-y-2 text-sm text-neutral-700">
              <p>
                Forespørsler vurderes i lys av kapasitet, årstid og tilstedeværende
                forventning.
              </p>
              <p>
                Ved behov kan forespørsel videresendes til relevant utvalg, komité eller
                midlertidig vurderingsgruppe.
              </p>
            </div>
          </Card>

          <Card title="Fordeler" meta="Ikke garantert">
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Mulighet for å være orientert (ved anledning).</li>
              <li>Tilgang til supplerende dokumentasjon (PDF).</li>
              <li>Fortrinnsrett til moderat tempo (teoretisk).</li>
            </ul>
          </Card>
        </div>
      </Page>
    </SiteShell>
  );
}
