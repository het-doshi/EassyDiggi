// Three simple steps explaining how the service works
const steps = [
  { n: "1", title: "Contact Me", desc: "Call or send a quick WhatsApp message." },
  { n: "2", title: "I Visit Your Shop", desc: "We meet at your shop, no hassle." },
  { n: "3", title: "Setup in 15 Minutes", desc: "Quick and easy, ready to use." },
];

const HowItWorks = () => {
  return (
    <section className="px-5 py-14 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.n} className="bg-gray-50 p-6 rounded-2xl text-center border border-border shadow-sm">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
