const legalText =
  "“All Jewble branding and creative IP remains the property of Blue Snake Studios; the school receives a limited educational-use license.”";

export default function LegalNotice() {
  const year = new Date().getFullYear();

  return (
    <p className="text-xs text-muted-foreground leading-relaxed text-center">
      © {year} Blue Snake Studios — {legalText}
    </p>
  );
}
