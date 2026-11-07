import Link from "next/link";

/** Shield-and-house mark. Replace with the company's official logo file when available. */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <path d="M3 21 24 4l21 17" stroke="#FFC20E" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 11c5.500 3.500 10.500 4 12.500 4v11c0 8-6.200 13.200-12.500 16-6.300-2.800-12.500-8-12.500-16V15c2 0 7-.5 12.500-4Z" fill="#0A1F63" stroke="#FFC20E" strokeWidth="2" />
      <path d="M15.500 25c2.200-3.300 5.200-5 8.500-5s6.300 1.700 8.500 5c-2.200 3.300-5.200 5-8.500 5s-6.300-1.700-8.500-5Z" fill="#fff" />
      <circle cx="24" cy="25" r="3.300" fill="#1747D1" />
      <circle cx="24" cy="25" r="1.300" fill="#050E3A" />
    </svg>
  );
}

export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const main = tone === "light" ? "text-white" : "text-navy";
  const sub = tone === "light" ? "text-gold" : "text-brand";
  return (
    <Link href="/" className={`flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${className}`} aria-label="Alcomm Securities & Smart Home Automation, home">
      <LogoMark className="size-11" />
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-extrabold uppercase tracking-wide ${main}`}>Alcomm</span>
        <span className={`mt-0.5 text-sm font-extrabold uppercase tracking-wider ${sub}`}>Securities</span>
      </span>
    </Link>
  );
}
