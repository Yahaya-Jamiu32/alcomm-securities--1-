import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section aria-label="Get a quote" className="px-5 py-12 sm:px-8">
      <div className="container-x flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand to-[#0a4fd6] p-8 text-white md:flex-row md:items-center md:p-10">
        <div>
          <p className="font-display text-2xl font-medium">Get a Free Quote Today</p>
          <p className="mt-1 text-blue-50">Let us help you find the best security and automation solution.</p>
        </div>
        <Link href="/contact#quote" className="btn btn-light shrink-0">Contact Us <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
