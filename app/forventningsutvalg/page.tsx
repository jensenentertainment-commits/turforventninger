import { SiteShell } from "../components/SiteShell";
import { Page, Card } from "../components/ui";

export default function ForventningsutvalgPage() {
  return (
    <SiteShell>
      <Page
        title="Forventningsutvalg"
        subtitle="Utvalget foreligger. Aktivitet kan forekomme."
      >
        <Card title="Status" meta="Foreløpig">
          Innhold foreligger ikke per nå.
        </Card>
      </Page>
    </SiteShell>
  );
}
