import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import UrgencyQuote from "@/components/UrgencyQuote";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Availability from "@/components/Availability";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Main page that puts all sections together
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <UrgencyQuote />
      <Services />
      <Pricing />
      <HowItWorks />
      <Benefits />
      <Availability />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
