import { MessageCircle } from "lucide-react";
import logo  from '../assets/logo.png'
// WhatsApp link used by the header CTA
const WHATSAPP_URL = "https://wa.me/919909103257";

// Sticky top navigation with brand on the left and nav + CTA on the right
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-3">
        
        {/* Brand: logo + name + tagline */}
        <a href="#" className="flex items-center gap-3">
          {/* Logo */}
          <img
            src={logo}
            alt="Easydiggi Logo"
            className="w-12 h-12 object-contain"
          />

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold text-primary tracking-tight">
              Easydiggi
            </span>
            <span className="text-xs text-muted-foreground -mt-0.5">
              Simple Digital Help
            </span>
          </div>
        </a>

        {/* Right side: nav links + CTA */}
        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden sm:flex items-center gap-5 text-sm font-medium text-foreground/80">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold px-3 sm:px-4 py-2 rounded-lg text-sm shadow hover:opacity-90"
          >
            <MessageCircle size={16} />
            <span className="hidden xs:inline">WhatsApp Now</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
