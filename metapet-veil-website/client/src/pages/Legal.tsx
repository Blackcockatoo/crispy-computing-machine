import LegalNotice from "@/components/LegalNotice";

export default function Legal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold text-primary">Legal & IP Notice</h1>
          <p className="text-base text-muted-foreground">
            This notice applies to all Jewble branding and creative materials within the Meta-Pet &amp; The
            Veil ecosystem.
          </p>
          <div className="rounded-lg border border-border bg-card p-6">
            <LegalNotice />
          </div>
        </div>
      </section>
    </div>
  );
}
