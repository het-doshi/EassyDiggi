import {
  Smartphone,
  MessageCircle,
  Palette,
  Headphones,
  Zap,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

// List of services with simple, non-technical explanations
const services = [
  {
    icon: Smartphone,
    quote: "Simple start makes strong business.",
    title: "Digital Setup",
    subtitle: "Start Your Shop Online",
    whatIDo: [
      "Set up UPI payments (QR code for easy payment)",
      "Set up WhatsApp Business account",
      "Save your customer contacts properly",
      "Show you how to use everything in a simple way",
    ],
    benefits: [
      "Accept payments easily",
      "Manage customers without confusion",
      "Start using digital tools without stress",
    ],
  },
  {
    icon: MessageCircle,
    quote: "Customers who remember you, return to you.",
    title: "Customer Messaging",
    subtitle: "Bring Customers Back",
    whatIDo: [
      "Send offers and updates to customers on WhatsApp",
      "Create simple festival or discount messages",
      "Help you maintain your customer list",
    ],
    benefits: [
      "Customers will remember your shop",
      "Increase repeat sales",
      "More customers without extra effort",
    ],
  },
  {
    icon: Palette,
    quote: "First impression builds trust.",
    title: "Shop Branding",
    subtitle: "Make Your Shop Look Professional",
    whatIDo: [
      "Create a simple logo for your shop",
      "Design offer posters for WhatsApp",
      "Improve your shop's digital look",
    ],
    benefits: [
      "Your shop looks more trusted",
      "Customers feel confident buying from you",
      "Better image than nearby shops",
    ],
  },
  {
    icon: Headphones,
    quote: "No tension, no confusion.",
    title: "Digital Support",
    subtitle: "No Tension Help",
    whatIDo: [
      "Help you when something is not working",
      "Fix payment or WhatsApp issues",
      "Guide you anytime you need",
    ],
    benefits: [
      "No stress about technology",
      "Someone is always there to help",
      "You can focus on your business",
    ],
  },
  {
    icon: Zap,
    quote: "Less work, more control.",
    title: "Simple Automation",
    subtitle: "Save Time",
    whatIDo: [
      "Set up basic auto messages",
      "Help track simple sales or customers",
      "Create reminder systems",
    ],
    benefits: [
      "Save time in daily work",
      "Less manual effort",
      "Run your shop more smoothly",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="px-5 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Services</h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          Simple help for your shop — easy to understand, easy to use.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            subtitle={s.subtitle}
            whatIDo={s.whatIDo}
            benefits={s.benefits}
            quote={s.quote}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Services;
