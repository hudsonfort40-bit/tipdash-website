import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import ServiceAreas from "../components/ServiceAreas";
import FAQ from "../components/FAQ";
import QuoteCTA from "../components/QuoteCTA";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">

      <Header />

      <Hero />

      <Services />

      <WhyChooseUs />

      <Reviews />

      <HowItWorks />

      <ServiceAreas />

      <FAQ />

      <QuoteCTA />

      <QuoteForm />

      <Footer />

    </main>
  );
}