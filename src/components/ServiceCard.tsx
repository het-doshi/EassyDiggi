import { LucideIcon, Check } from "lucide-react";

// Props for one service card
type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  whatIDo: string[];
  benefits: string[];
  quote?: string;
};

const ServiceCard = ({ icon: Icon, title, subtitle, whatIDo, benefits, quote }: Props) => {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition flex flex-col h-full">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
        <Icon size={28} />
      </div>

      {/* Title + subtitle */}
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{subtitle}</p>

      {/* What I will do */}
      <div className="mb-5">
        <p className="font-semibold text-base mb-2">What I will do:</p>
        <ul className="space-y-2">
          {whatIDo.map((item) => (
            <li key={item} className="flex gap-2 text-base text-foreground/90">
              <Check size={18} className="text-primary shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mt-auto p-4 rounded-xl bg-secondary/10 border border-secondary/20">
        <p className="font-semibold text-base mb-2 text-black">How it helps you:</p>
        <ul className="space-y-1.5">
          {benefits.map((b) => (
            <li key={b} className="flex gap-2 text-base">
              <span className="text-secondary">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Trust quote */}
      {quote && (
        <p className="mt-4 text-sm italic text-muted-foreground text-center">
          “{quote}”
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
