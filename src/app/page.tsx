import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
	  <Contacts />
    </main>
  );
}