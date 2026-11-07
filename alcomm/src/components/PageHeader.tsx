import Link from "next/link";

export function PageHeader({ title, description, crumbs = [] }: { title: string; description?: string; crumbs?: { label: string; href?: string }[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="container-x px-5 py-14 sm:px-8 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-slate-300">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {c.href ? <Link href={c.href} className="hover:text-white">{c.label}</Link> : <span aria-current="page" className="text-white">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>}
      </div>
    </section>
  );
}
