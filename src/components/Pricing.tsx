import { Check, Sparkles } from "lucide-react";

// Simple pricing data
const plans = [
  {
    name: "Basic Setup",
    price: "₹199 /month",
    features: ["UPI setup", "WhatsApp Business setup", "Basic guidance"],
    quote: "Start small, but start today.",
    recommended: false,
  },
  {
    name: "Standard Plan",
    price: "₹499 /month",
    features: [
      "Everything in Basic",
      "Customer messaging setup",
      "Offer templates",
    ],
    quote: "More connection = more customers.",
    recommended: false,
  },
  {
    name: "No-Tension Plan",
    price: "₹999 /month",
    features: ["Ongoing support", "Offer sending help", "Issue fixing"],
    quote: "You focus on business, I handle the rest.",
    recommended: true,
  },
];

const WHATSAPP_URL = "https://wa.me/919909103257";

const Pricing = () => {
  return (
    <section id="pricing" className="px-5 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3">
            Affordable plans designed to save your <span className="text-primary">time and grow</span> {" "}
            your business
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose what fits your shop. No hidden charges
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 border bg-card flex flex-col ${
                plan.recommended
                  ? "border-secondary shadow-xl ring-2 ring-secondary/30 scale-[1.02]"
                  : "border-border shadow-md"
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={14} /> Recommended
                </span>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold text-primary mb-5">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-base">
                    <Check size={18} className="text-secondary shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="italic text-sm text-muted-foreground mb-6 border-l-4 border-primary/30 pl-3">
                “{plan.quote}”
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto text-center font-semibold py-2.5 px-6 text-base rounded-xl transition ${
                  plan.recommended
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
