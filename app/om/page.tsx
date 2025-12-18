import { SiteShell } from "../components/SiteShell";
import { SITE } from "../lib/site";
import { Page, Card } from "../components/ui";

export default function OmPage() {
  return (
    <SiteShell>
      <Page
        title="Om foreningen"
        subtitle="Foreningen omtales i det følgende som «Foreningen». Dokumentasjonen er veiledende."
      >
        <div className="grid gap-4">
          <Card title="Identifikasjon" meta="Grunnopplysninger · Oppdatert ved anledning">
            <div className="space-y-3">
              <div>
                <p className="text-xs text-neutral-600">Offisielt navn</p>
                <p className="mt-1 font-medium text-neutral-900">{SITE.officialName}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-600">Visningsnavn</p>
                <p className="mt-1 font-medium text-neutral-900">{SITE.displayName}</p>
              </div>
              <div>
                <p className="text-xs text-neutral-600">Domene</p>
                <p className="mt-1 font-medium text-neutral-900">{SITE.domain}</p>
              </div>
            </div>
          </Card>

          <Card title="Formål (§1)" meta="Utdrag · Gjeldende forståelse">
            Foreningens formål er å opprettholde foreningen som sådan, samt ivareta den
            overordnede forventningen om rolige turer i moderat tempo i utmark, våtmark
            og urbane bymiljøer.
          </Card>

          <Card title="Virke og avgrensning" meta="Omfang · Forutsetninger">
            Foreningen driver sin virksomhet gjennom etablering av utvalg og komiteer,
            løpende vurderinger, referatføring og videreføring av gjeldende praksis.
            Foreningen tar ikke stilling til faktisk gjennomføring utover det som følger av
            forventningen.
          </Card>

          <Card title="Status" meta="Løpende · Ikke endelig">
            {SITE.tagline} Eventuelle presiseringer vurderes ved anledning.
          </Card>

          <Card title="Begrepsavklaring" meta="Arbeidsdefinisjoner">
            <ul className="space-y-2">
              <li>
                <span className="font-medium text-neutral-900">Rolig:</span>{" "}
                Opplevd rolig innenfor en samlet vurdering.
              </li>
              <li>
                <span className="font-medium text-neutral-900">Moderat:</span>{" "}
                Moderat i lys av forutsetninger, dagsform og ytre forhold.
              </li>
              <li>
                <span className="font-medium text-neutral-900">Forventning:</span>{" "}
                En tilstedeværende antakelse om mulig aktivitet.
              </li>
            </ul>
          </Card>
          <a
  href="/supplerende-materiale"
  className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500"
>
  Supplerende materiale
</a>

        </div>
      </Page>
    </SiteShell>
  );
}
