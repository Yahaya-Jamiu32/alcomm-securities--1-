import { BatteryCharging, Cable, Cpu, Flame, Phone, PlugZap, ShieldCheck, Sun, Tv, Video, Wifi, type LucideIcon } from "lucide-react";

export interface ServiceImage {
  src: string;
  alt: string;
  /** "contain" suits white-background product shots, "cover" suits photographs. */
  fit: "cover" | "contain";
}

export interface Include { icon: LucideIcon; title: string; text: string }

export interface Service {
  slug: string;
  /** Shown on cards when there is no photo yet, and as the card badge. */
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  /** Optional: when omitted, a designed icon panel is shown instead of a photo. */
  image?: ServiceImage;
  /** Optional "what is included" tiles shown on the service page. */
  includes?: Include[];
  features: string[];
  gallery?: ServiceImage[];
}

export const services: Service[] = [
  {
    slug: "cctv-camera-installation",
    icon: Video,
    title: "CCTV Camera Installation",
    short: "Indoor and outdoor surveillance cameras with recording and remote viewing.",
    description:
      "We plan and install CCTV systems for homes, shops, offices and estates, positioning cameras for the coverage your property actually needs.",
    image: { src: "/images/services/cctv-dome.jpg", alt: "White dome CCTV camera with infrared lights", fit: "contain" },
    features: [
      "Dome and bullet cameras for indoor and outdoor use",
      "Recorder setup and storage configuration",
      "Remote viewing on your phone",
      "Neat cabling and secure mounting",
    ],
    gallery: [
      { src: "/images/services/cctv-bullet.jpg", alt: "Black bullet CCTV camera on a wall bracket", fit: "contain" },
      { src: "/images/services/cctv-building.jpg", alt: "CCTV cameras mounted on the exterior of a building", fit: "cover" },
    ],
  },
  {
    slug: "smart-home-automation",
    icon: Cpu,
    title: "Smart Home Automation",
    short: "Smart locks and connected controls for a more convenient, secure home.",
    description:
      "Bring your home together with smart door locks, app control and connected devices designed around the way you live.",
    image: { src: "/images/services/smart-lock.jpg", alt: "Fingerprint smart door lock on a wooden door", fit: "cover" },
    features: [
      "Fingerprint, keypad and app-controlled smart locks",
      "Connected sensors and controls",
      "Control from your phone",
      "Solutions tailored to your property",
    ],
    gallery: [{ src: "/images/services/access-control.jpg", alt: "Biometric access control keypad with fingerprint reader", fit: "cover" }],
  },
  {
    slug: "fire-alarm-systems",
    icon: Flame,
    title: "Fire Alarm Systems",
    short: "Smoke detectors and manual call points to help protect people and property.",
    description:
      "We supply and install fire alarm equipment so that a developing fire can be detected and raised early in homes and commercial buildings.",
    image: { src: "/images/services/fire-call-point.jpg", alt: "Red manual fire alarm call point", fit: "contain" },
    features: [
      "Smoke detectors",
      "Manual call points",
      "Sounders and control panel connection",
      "Installation planned around your building layout",
    ],
    gallery: [{ src: "/images/services/smoke-detector.jpg", alt: "White ceiling smoke detector", fit: "contain" }],
  },
  {
    slug: "dstv-installation",
    icon: Tv,
    title: "DStv Installation",
    short: "Satellite dish installation, alignment and set-up for clear reception.",
    description:
      "Professional satellite TV installation for homes and businesses, including dish mounting, alignment and cable routing.",
    image: { src: "/images/services/dstv.jpg", alt: "Technician installing a DStv satellite dish on a ladder", fit: "cover" },
    features: [
      "Dish mounting and alignment",
      "Cable routing and connection",
      "Decoder set-up",
      "Multi-room options on request",
    ],
  },
  {
    slug: "tv-intercom-systems",
    icon: Video,
    title: "TV Intercom Systems",
    short: "Video door stations and indoor monitors so you can see who is at the door.",
    description:
      "See and speak to visitors before you open the door with a video intercom system installed for your home, apartment block or office.",
    image: { src: "/images/services/tv-intercom.jpg", alt: "Video intercom indoor monitor and outdoor door station", fit: "contain" },
    features: [
      "Indoor monitor and outdoor door station",
      "Two-way audio with video",
      "Single-home and multi-unit set-ups",
      "Clean wiring and mounting",
    ],
  },
  {
    slug: "telephone-intercom-systems",
    icon: Phone,
    title: "Telephone Intercom Systems",
    short: "Internal telephone intercoms linking rooms, offices and gates.",
    description:
      "Keep your property connected with telephone intercom systems that let people call between rooms, offices, reception and entrances at the press of a button.",
    features: [
      "Internal calling between rooms, offices and gates",
      "Extension handsets with a central unit",
      "Suitable for homes, offices and estates",
      "Neat cabling and set-up",
    ],
  },
  {
    slug: "solar-system-installation",
    icon: Sun,
    title: "Solar & Inverter Systems",
    short: "Complete solar power: panels, inverter, batteries and wiring, installed as one system.",
    description:
      "We design and install complete solar systems for homes and businesses: the panels, the inverter, battery storage and all the mounting and wiring, sized around your power needs.",
    image: { src: "/images/services/solar-roof.jpg", alt: "Solar panels installed on a tiled house roof", fit: "cover" },
    includes: [
      { icon: Sun, title: "Solar Panels", text: "Roof or ground mounted panels sized to your needs." },
      { icon: PlugZap, title: "Inverter", text: "Inverter selection and installation to run your home or business loads." },
      { icon: BatteryCharging, title: "Battery Storage", text: "Batteries connected so power is there when you need it." },
      { icon: Cable, title: "Mounting & Wiring", text: "Secure mounting, cabling and protection, finished neatly." },
    ],
    features: [
      "Site assessment and system sizing",
      "Solar panels, inverter and battery connection",
      "Residential and commercial installations",
      "Complete system from one installer",
    ],
    gallery: [{ src: "/images/services/solar-modern.jpg", alt: "Solar panels on the roof of a modern house", fit: "cover" }],
  },
  {
    slug: "internet-installation",
    icon: Wifi,
    title: "Internet Installation",
    short: "Routers, networking and Wi-Fi coverage for home and business.",
    description:
      "Get connected with correctly installed routers and networking equipment, set up to give you stable coverage where you need it.",
    image: { src: "/images/services/internet-router.jpg", alt: "Wi-Fi router with four antennas on a stand", fit: "cover" },
    features: [
      "Router and modem installation",
      "Wi-Fi coverage planning",
      "Network cabling",
      "Home and office set-ups",
    ],
  },
  {
    slug: "smart-security-systems",
    icon: ShieldCheck,
    title: "Smart Security Systems",
    short: "Connected alarms, sensors, cameras and access control working together.",
    description:
      "Combine cameras, door and window sensors, smoke detection and access control into one connected system you can manage from your phone.",
    image: { src: "/images/services/smart-security-kit.jpg", alt: "Smart security kit with control panel, cameras, sensors and phone app", fit: "cover" },
    features: [
      "Control panel with sensors and cameras",
      "Access control with keypad or fingerprint",
      "App-based monitoring",
      "Systems scaled for homes and businesses",
    ],
    gallery: [
      { src: "/images/services/access-control.jpg", alt: "Fingerprint access control at a glass door", fit: "cover" },
      { src: "/images/services/cyber-security.jpg", alt: "Abstract digital security padlock network", fit: "cover" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
