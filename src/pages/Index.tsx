import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
