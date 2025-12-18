import { SiteShell } from "../components/SiteShell";
import { Page, Card } from "../components/ui";
import { UNITS } from "../lib/organisasjon";

export default function OrganisasjonPage() {
  return (
    <SiteShell>
      <Page
        title="Organisasjon"
        subtitle="Utvalg og komiteer etableres, forankres og videreføres etter behov. Oversikten er ikke uttømmende."
      >
        <div className="grid gap-4">
          <Card title="Overordnet struktur" meta="Prinsipper · Samordning">
            Foreningen er strukturert for å sikre bred involvering, god forankring og
            tilstrekkelig vurdering av tempo, rute og forventning. Utvalg kan etableres,
            slås sammen eller settes på vent etter behov.
          </Card>

          {UNITS.map((u) => (
            <Card
              key={u.slug}
              title={u.name}
              meta={`${u.type} · Status: ${u.status}`}
              href={`/organisasjon/${u.slug}`}
            >
              {u.mandate}
            </Card>
          ))}

          <Card title="Tilleggsbestemmelse" meta="Utdrag">
            Foreningen kan nedsette midlertidige organer for å utrede behovet for
            ytterligere organer.
          </Card>
        </div>
      </Page>
    </SiteShell>
  );
}
