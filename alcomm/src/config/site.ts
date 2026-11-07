/**
 * Central site configuration. Real company details are supplied through
 * environment variables (see .env.example) so nothing is invented in code.
 */
const env = (v: string | undefined) => (v && v.trim() ? v.trim() : "");

const vercelUrl = env(process.env.VERCEL_PROJECT_PRODUCTION_URL);

export const site = {
  name: "Alcomm Securities & Smart Home Automation",
  shortName: "Alcomm Securities",
  tagline: "Smart Security. Smarter Living.",
  title: "Alcomm Securities | Smart Home Automation & Security Solutions",
  description:
    "Professional CCTV installation, smart home automation, fire alarm systems, solar installation, DStv, TV intercom, and internet connectivity solutions.",
  // Falls back to the Vercel production domain, then to a neutral placeholder.
  url:
    env(process.env.NEXT_PUBLIC_SITE_URL) ||
    (vercelUrl ? `https://${vercelUrl}` : "https://www.example.com"),
  contact: {
    phone: env(process.env.NEXT_PUBLIC_PHONE),
    whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER).replace(/\D/g, ""),
    email: env(process.env.NEXT_PUBLIC_EMAIL),
    address: env(process.env.NEXT_PUBLIC_ADDRESS),
    mapQuery: env(process.env.NEXT_PUBLIC_MAP_QUERY),
  },
  formEndpoint: env(process.env.NEXT_PUBLIC_FORM_ENDPOINT),
  socials: [
    { label: "Facebook", href: env(process.env.NEXT_PUBLIC_FACEBOOK_URL) },
    { label: "Instagram", href: env(process.env.NEXT_PUBLIC_INSTAGRAM_URL) },
    { label: "YouTube", href: env(process.env.NEXT_PUBLIC_YOUTUBE_URL) },
  ].filter((s) => s.href),
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const PLACEHOLDERS = {
  phone: "##########",
  email: "##########",
  address: "##########",
  whatsapp: "##########",
} as const;
