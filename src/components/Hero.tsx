import { Phone, MessageCircle, MapPin, Clock, Smile } from "lucide-react";

// Contact links for the hero buttons
const WHATSAPP_URL = "https://wa.me/919909103257";
const PHONE_URL = "tel:+919999999999";

// Small trust badge used below the hero
const TrustBadge = ({
  icon: Icon,
  text,
}: {
  icon: typeof MapPin;
  text: string;
}) => (
  <div className="flex items-center gap-2 bg-background/80 border border-border rounded-full px-4 py-2 shadow-sm">
    <Icon size={18} className="text-secondary" />
    <span className="text-sm font-medium text-foreground/80">{text}</span>
  </div>
);

const Hero = () => {
  return (
    <header className="relative px-5 pt-12 pb-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        {/* Small label above title */}
        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
          Easydiggi • Surat
        </span>

        {/* Main title card for visual depth */}
        <div className="mt-5 bg-card/70 backdrop-blur border border-border rounded-2xl shadow-lg p-6 sm:p-10">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-foreground">
            Make Your Shop Digital –{" "}
            <span className="text-primary">Without Any Headache</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            I help you set up payments and connect with customers easily.
          </p>

          {/* Two main action buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold text-base px-6 py-2.5 rounded-xl shadow-md hover:opacity-90"
              >
              <MessageCircle size={18} /> WhatsApp Karo
            </a>
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-6 py-2.5 rounded-xl shadow-md hover:opacity-90"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* Local trust line */}
          <p className="mt-6 text-sm sm:text-base text-muted-foreground">
            Create <span className="font-semibold text-foreground">passive</span>
            {" "}growth for your{" "}
            <span className="font-semibold text-foreground">Business</span> 
            {" "}by connecting it to the digital world
          </p>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <TrustBadge icon={MapPin} text="Local Surat Service" />
          <TrustBadge icon={Clock} text="Fast Setup – 15 Minutes" />
          <TrustBadge icon={Smile} text="Simple & Easy to Use" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
