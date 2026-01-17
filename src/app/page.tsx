import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhySerious from "@/components/WhySerious";
import Solution from "@/components/Solution";
import WhoFor from "@/components/WhoFor";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <WhySerious />
        <Solution />
        <WhoFor />
        <HowItWorks />
        <Trust />
        <EarlyAccess />
      </main>
      <Footer />
    </>
  );
}
