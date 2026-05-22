import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919909103257";
const PHONE = "tel:+919909103257";

// Final push to take action
const FinalCTA = () => {
  return (
    <section className="px-5 py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Give your shop easy digital access
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8">
          I will personally help you set everything up.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold py-2.5 px-6 rounded-xl shadow-md hover:bg-secondary/90 transition text-base"
          >
            <MessageCircle size={18} /> Start Now
          </a>
          <a
            href={PHONE}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-2.5 px-6 rounded-xl shadow-md hover:bg-primary/90 transition text-base"
          >
            <Phone size={18} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
