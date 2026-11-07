export function SectionHeading({ title, accent, description, tone = "light", as: Tag = "h2" }: { title: string; accent?: string; description?: string; tone?: "light" | "dark"; as?: "h1" | "h2" }) {
  const dark = tone === "dark";
  return (
    <div className="reveal mb-8 max-w-2xl md:mx-auto md:mb-14 md:text-center">
      <Tag className={`text-4xl font-extrabold sm:text-5xl ${dark ? "text-white" : "text-navy"}`}>
        {title} {accent && <span className={dark ? "text-gold" : "text-brand"}>{accent}</span>}
      </Tag>
      <span aria-hidden="true" className="mt-4 block h-1 w-12 rounded-full bg-gold md:mx-auto" />
      {description && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-slate-200" : "text-muted"}`}>{description}</p>}
    </div>
  );
}
