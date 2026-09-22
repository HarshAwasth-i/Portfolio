import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-custom-blue overflow-x-hidden selection:bg-custom-yellow selection:text-black font-sans relative">
      {/* Retro Loading Screen */}
      <LoadingScreen />

      {/* Neo-Brutalist Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Floating Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex flex-col gap-16 md:gap-20 pt-28 sm:pt-32 pb-16">
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <Marquee />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;