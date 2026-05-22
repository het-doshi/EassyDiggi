import { Clock, Calendar, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919909103257";

// Shows when setup work happens, so retail business owners know it won't disturb business
const Availability = () => {
  return (
    <section id="availability" className="px-5 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            When I Work{" "}
            <span className="text-primary">(So Your Business Doesn’t Stop)</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            I respect your business time and daily flow.
          </p>
        </div>

        {/* Schedule cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-2xl shadow-md p-6 sm:p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Saturday</h3>
            <p className="text-lg font-semibold text-foreground/90">
              After 9:00 PM
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Post business hours
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-md p-6 sm:p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4">
              <Calendar size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Sunday</h3>
            <p className="text-lg font-semibold text-foreground/90">Full Day</p>
            <p className="text-sm text-muted-foreground mt-1">Flexible timing</p>
          </div>
        </div>

        {/* Subtext */}
        <p className="text-center text-base text-muted-foreground mb-8">
          This ensures your shop work is not disturbed while setting up
          everything.
        </p>

        {/* Strong trust line */}
        <div className="bg-card border-l-4 border-primary rounded-xl shadow-sm px-6 py-5 text-center mb-10">
          <p className="text-xl sm:text-2xl font-bold text-foreground">
            Your <span className="text-primary">business</span> comes first.
            Setup comes after.
          </p>
          <p className="mt-2 text-sm text-muted-foreground italic">
            No disturbance to your daily sales.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold py-2.5 px-6 rounded-xl shadow-md hover:bg-secondary/90 transition text-base"
          >
            <MessageCircle size={22} /> Book Weekend Setup
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Quick setup without affecting your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default Availability;
