import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/917024928015?text=Hi%20Z%20Plus%20Photography%2C%20I%27d%20like%20to%20book%20a%20shoot."
      target="_blank" rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full grid place-items-center shadow-glow animate-float"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-6 text-white" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </a>
  );
}
