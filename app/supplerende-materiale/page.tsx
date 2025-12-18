import { SiteShell } from "../components/SiteShell";
import { Page, Card } from "../components/ui";

const DOCS = [
  {
    title: "Prinsipper for forventningsavklaring",
    href: "/docs/prinsipper-for-forventningsavklaring_v1-1.pdf",
    meta: "PDF · v1.1",
  },
  {
    title: "Begrepsavklaringer (utdrag)",
    href: "/docs/begrepsavklaringer-utdrag_v1-0.pdf",
    meta: "PDF · v1.0",
  },
  {
    title: "Bruk av logo",
    href: "/docs/bruk-av-logo_v1-0.pdf",
    meta: "PDF · v1.0",
  },
  {
    title: "Visuell identitet",
    href: "/docs/visuell-identitet_v1-0.pdf",
    meta: "PDF · v1.0",
  },
];

export default function SupplerendeMaterialePage() {
  return (
    <SiteShell>
      <Page
        title="Supplerende materiale"
        subtitle="Dokumentene er veiledende og ikke bindende."
      >
        <div className="grid gap-4">
          <Card title="Dokumenter" meta="Gjeldende">
            <ul className="space-y-2 text-sm">
              {DOCS.map((d) => (
                <li key={d.href} className="flex flex-wrap items-baseline gap-x-2">
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-500"
                  >
                    {d.title}
                  </a>
                  <span className="text-neutral-500">{d.meta}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Merknad" meta="Til orientering">
            Dokumentene er ikke ment å leses samlet.
          </Card>
        </div>
      </Page>
    </SiteShell>
  );
}
