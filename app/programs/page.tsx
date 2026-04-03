import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Award, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { programsData } from "@/data/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Programs | Loimaan Evankelinen Kansanopisto",
  description: "Explore our diverse range of educational programs including language studies, self-sufficiency training, art therapy, and more.",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
          style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}
        />
        <Container className="relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6 backdrop-blur-sm">
            Discover Your Path
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-sm">
            Educational Programs
          </h1>
          <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From language immersion and vocational training to personal growth and creative arts, we offer programs rooted in community and values.
          </p>
        </Container>
      </section>

      {/* Why Choose Us / Highlights */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Community Focused", desc: "Join a supportive learning environment where everyone belongs." },
              { title: "Practical Skills", desc: "Gain hands-on experience and real-world knowledge in every course." },
              { title: "Value-Based", desc: "Education grounded in faith and respect for every individual." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-950 dark:text-zinc-50 mb-1">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programsData.map((program) => (
              <Card key={program.id} className="group h-full flex flex-col overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {program.level}
                    </span>
                  </div>
                </div>
                <CardContent className="flex flex-col flex-grow p-8">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold tracking-wide uppercase">{program.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-4 group-hover:text-brand-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {program.description}
                  </p>
                  <Button variant="outline" className="w-full h-12 rounded-xl group/btn border-zinc-200 dark:border-zinc-800 hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-brand-950/30 transition-all">
                    View Course Details 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <Container>
          <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-500/20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-400/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Not sure where to start?</h2>
              <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto">
                Our advisors are here to help you find the perfect program that matches your goals and interests. Get in touch today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-brand-700 hover:bg-brand-50 font-bold h-14 px-10 rounded-2xl shadow-xl">
                  Contact Admissions
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold h-14 px-10 rounded-2xl">
                  Download Prospectus
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
