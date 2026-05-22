import { useState, FormEvent } from "react";

// Email where inquiries should be sent
const EMAIL = "youremail@example.com";

const ContactForm = () => {
  // Basic form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // On submit, open the user's email app with the form details
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Inquiry");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-5 py-14 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-6">
          Fill the form and I will contact you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-2xl border border-border shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="How can I help?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold text-base py-2.5 px-6 rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
