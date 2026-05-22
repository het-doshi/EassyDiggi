import { Phone, MessageCircle, MapPin } from "lucide-react";

// Contact info shown in the footer
const PHONE = "919999999999";
const WHATSAPP_URL = `https://wa.me/${PHONE}`;

import texlogo from "../assets/textlogo.png";

const Footer = () => {
  return (
    <footer className="px-5 py-10 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto">
        
        {/* Logo + Brand */}
        <div className="text-center mb-6 flex flex-col items-center">
          
          {/* Medium size logo */}
          <img
            src={texlogo}
            alt="Easydiggi Logo"
            className="w-45 h-45 object-contain mb-1"
          />

          <p className="text-lg text-muted-foreground">
            Simple Digital Help for Your Shop
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Phone size={20} className="text-primary" />
            <a href={`tel:+${PHONE}`} className="text-lg">
              +{PHONE}
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MessageCircle size={20} className="text-secondary" />

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-lg"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin size={20} className="text-primary" />
            <span className="text-lg">Surat</span>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          © {new Date().getFullYear()} Easydiggi
        </p>
      </div>
    </footer>
  );
};
export default Footer;
