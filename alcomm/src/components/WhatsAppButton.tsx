import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Alcomm Securities on WhatsApp"
      className="fixed right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
