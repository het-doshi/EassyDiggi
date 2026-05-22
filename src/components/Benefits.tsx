import { CheckCircle2 } from "lucide-react";

// Short list of benefits
const benefits = [
  "Simple setup – sirf 15 minutes",
  "Local support in Surat",
  "No disturbance to your business",
  "No technical knowledge needed",
];

const Benefits = () => {
  return (
    <section className="px-5 py-14 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Why Choose Easydiggi
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border shadow-sm"
            >
              <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
              <span className="text-lg">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
