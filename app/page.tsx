import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Statistics } from "@/components/sections/statistics";
import { Programs } from "@/components/sections/programs";
import { News } from "@/components/sections/news";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
      <Programs />
      <News />
      <Testimonials />
      <CTA />
    </>
  );
}

