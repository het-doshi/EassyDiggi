import { MessageCircle } from "lucide-react";

// Floating WhatsApp button shown on every page
const WHATSAPP_URL = "https://wa.me/919909103257";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
