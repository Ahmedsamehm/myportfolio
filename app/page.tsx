import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/heroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
