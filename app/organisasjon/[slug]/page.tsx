import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "../../components/SiteShell";
import { Card } from "../../components/ui";
import { UNITS } from "../../lib/organisasjon";


export default function UnitDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = decodeURIComponent(params.slug).trim().toLowerCase();
const unit = UNITS.find((u) => u.slug.trim().toLowerCase() === slug);
  if (!unit) return notFound();

  return (
    <SiteShell>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8">
          <Link
            href="/organisasjon"
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            ← Tilbake til organisasjon
          </Link>

          <p className="mt-4 text-xs text-neutral-600">{unit.type}</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            {unit.name}
          </h1>

          <p className="mt-3 text-sm text-neutral-700">
            Status: <span className="font-medium text-neutral-900">{unit.status}</span>
            {unit.lastReviewed ? (
              <>
                {" "}
                · Sist vurdert:{" "}
                <span className="font-medium text-neutral-900">
                  {unit.lastReviewed}
                </span>
              </>
            ) : null}
          </p>
        </div>

        <div className="grid gap-4">
          <Card title="Mandat" meta="Gjeldende forståelse">
            {unit.mandate}
          </Card>

          <Card title="Arbeidsform" meta="Praksis · Forbehold">
            Utvalget arbeider innenfor rammen av foreningens formål, og legger til grunn
            en samlet vurdering. Eventuelle avklaringer anses foreløpige.
          </Card>

          <Card title="Merknader" meta="Utdrag · Ikke uttømmende">
            <ul className="space-y-2">
              {(unit.notes?.length ? unit.notes : ["Ingen særskilte merknader per nå."]).map(
                (n, i) => (
                  <li key={i}>• {n}</li>
                )
              )}
            </ul>
          </Card>

          <Card title="Vedtak" meta="Standard">
            • Forhold tas til orientering. <br />
            • Videre vurdering videreføres. <br />
            • Eventuelle presiseringer vurderes ved anledning.
          </Card>
        </div>
      </main>
    </SiteShell>
  );
}
