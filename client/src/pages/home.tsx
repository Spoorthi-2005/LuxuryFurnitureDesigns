import Header from "@/components/header";
import Hero from "@/components/hero";
import Collections from "@/components/collections";
import Process from "@/components/process";
import Craftsmanship from "@/components/craftsmanship";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Collections />
      <Process />
      <Craftsmanship />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
