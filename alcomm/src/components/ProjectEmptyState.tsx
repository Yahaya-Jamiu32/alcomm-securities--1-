import Link from "next/link";
import { Camera } from "lucide-react";

export function ProjectEmptyState() {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-brand/30 bg-gradient-to-b from-white to-mist px-6 py-14 text-center sm:px-12">
      <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-navy text-gold shadow-glow"><Camera className="size-8" aria-hidden="true" /></span>
      <h3 className="mt-6 text-2xl font-semibold">Our installation projects will be showcased here soon.</h3>
      <p className="mx-auto mt-3 max-w-md text-muted">In the meantime, tell us about your property and we will help you find the right solution.</p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/contact#quote" className="btn btn-primary">Request a Quote</Link>
        <Link href="/services" className="btn btn-outline">View Our Services</Link>
      </div>
    </div>
  );
}
