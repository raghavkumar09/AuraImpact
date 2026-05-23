import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMission from "@/components/AboutMission";
import Campaigns from "@/components/Campaigns";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden bg-background">
        <Hero />
        <AboutMission />
        <Campaigns />
        <Impact />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
