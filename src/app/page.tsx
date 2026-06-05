import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const WhyUs = dynamic(() => import("@/components/WhyUs"), { ssr: true });
const Reviews = dynamic(() => import("@/components/Reviews"), { ssr: true });
const Contacts = dynamic(() => import("@/components/Contacts"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Reviews />
      <Contacts />
    </>
  );
}