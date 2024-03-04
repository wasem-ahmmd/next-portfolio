import About from "@/components/About";
import C_logo from "@/components/C_logo";
import Hero from "@/components/Hero";
import Nav from "@/components/common/Nav";
import Work from "../components/Work";
import Testimonial from "@/components/Testimonial";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
    <Nav />
     <main className="mt-[64px] xl:mt-[65px]">
      <Hero />
      <C_logo />
      <About />
      <Work />
      <Testimonial />
      <Services />
    </main>
    </>
  )
}

