import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Results from "@/components/landing/Results";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Results />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
