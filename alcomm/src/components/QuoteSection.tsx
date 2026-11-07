import { QuoteForm } from "./QuoteForm";

export function QuoteSection() {
  return (
    <section id="quote" aria-labelledby="quote-title" className="relative isolate overflow-hidden bg-gradient-to-br from-deep via-navy to-[#0a3a8f] text-white">
      <div aria-hidden="true" className="absolute -right-20 -top-20 -z-10 size-96 rounded-full bg-gold/30 blur-3xl" />
      <div className="container-x grid items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-5 lg:gap-16">
        <div className="reveal lg:col-span-2">
          <h2 id="quote-title" className="text-3xl font-extrabold sm:text-4xl">Get a Free Quote Today</h2>
          <p className="mt-4 text-base leading-relaxed text-blue-50 sm:text-lg">Let us help you find the best security and automation solution for your home or business.</p>
        </div>
        <div className="lg:col-span-3"><QuoteForm /></div>
      </div>
    </section>
  );
}
