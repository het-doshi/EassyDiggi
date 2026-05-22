import { X, Check } from "lucide-react";
import beforeImg from "@/assets/before-shopkeeper.jpg";
import afterImg from "@/assets/after-shopkeeper.jpg";

// Simple list item used in both columns
const Item = ({
  good,
  text,
}: {
  good: boolean;
  text: string;
}) => (
  <li className="flex items-start gap-3">
    <span
      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
        good ? "bg-secondary text-secondary-foreground" : "bg-red-100 text-red-600"
      }`}
    >
      {good ? <Check size={16} /> : <X size={16} />}
    </span>
    <span className="text-base sm:text-lg text-foreground/80">{text}</span>
  </li>
);

const BeforeAfter = () => {
  return (
    <section className="px-5 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Running a Shop Should Be Simple
        </h2>

        {/* Two column compare */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* BEFORE */}
          <div className="bg-gray-50 border border-border rounded-2xl shadow-md p-6 sm:p-8">
            <img
              src={beforeImg}
              alt="Stressed retail business owner before Easydiggi"
              loading="lazy"
              width={768}
              height={768}
              className="w-full h-56 object-contain mb-5"
            />
            <h3 className="text-xl font-bold text-center mb-5 text-red-600">
              Before Easydiggi
            </h3>
            <ul className="space-y-3">
              <Item good={false} text="Customer ka record nahi" />
              <Item good={false} text="Offer bhejne ka system nahi" />
              <Item good={false} text="Payment confusion" />
              <Item good={false} text="Zyada tension" />
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-green-50 border border-secondary/30 rounded-2xl shadow-md p-6 sm:p-8">
            <img
              src={afterImg}
              alt="Happy retail business owner after using Easydiggi"
              loading="lazy"
              width={768}
              height={768}
              className="w-full h-56 object-contain mb-5"
            />
            <h3 className="text-xl font-bold text-center mb-5 text-secondary">
              After Easydiggi
            </h3>
            <ul className="space-y-3">
              <Item good={true} text="Sab customer WhatsApp pe" />
              <Item good={true} text="Offer 1 click mein" />
              <Item good={true} text="Payment easy" />
              <Item good={true} text="Kaam simple" />
            </ul>
          </div>
        </div>

        {/* Relatable tagline */}
        <div className="mt-12 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-foreground">
            “Tension kam, <span className="text-primary">business zyada.</span>”
          </p>
          <p className="mt-2 text-muted-foreground">
            Simple system. Stable profit. Happy retail business owner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
