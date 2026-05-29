"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Heart, Users, MapPin, Milestone } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const timeline = [
  { 
    year: "1946", 
    event: "Loimaan Evankelinen Kansanopisto is founded, rooted in Lutheran evangelical tradition.",
    cartoon: "/leko/tl_1946_faith.png",
    side: "left" as const
  },
  { 
    year: "1970s", 
    event: "Programs expand to include immigrant integration and language education.",
    cartoon: "/leko/tl_1970_integration.png",
    side: "right" as const
  },
  { 
    year: "1995", 
    event: "Launch of the Mustajärvi Camp Center, adding residential summer programs.",
    cartoon: "/leko/tl_1995_nature.png",
    side: "left" as const
  },
  { 
    year: "2010", 
    event: "Introduction of the self-sufficiency 'Omavaraa' programs.",
    cartoon: "/leko/tl_2010_farming.png",
    side: "right" as const
  },
  { 
    year: "2018", 
    event: "Launch of the professional Christian Art Therapy training program.",
    cartoon: "/leko/tl_2018_art.png",
    side: "left" as const
  },
  { 
    year: "2024", 
    event: "Celebrating 78 years of community-centered education and service.",
    cartoon: "/leko/tl_2024_community.png",
    side: "right" as const
  },
];

const values = [
  { icon: Heart, title: "Christian Values", desc: "Our programs are grounded in Lutheran evangelical faith, welcoming all people regardless of background.", color: "text-red-500", bg: "bg-red-50 dark:bg-red-950/20" },
  { icon: Sparkles, title: "Personal Growth", desc: "We believe every person has the potential to grow — spiritually, intellectually, and practically.", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20" },
  { icon: Users, title: "Community", desc: "We are a true community school — our staff, students, and alumni support one another long after graduation.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-950/20" },
  { icon: MapPin, title: "Inclusion", desc: "We warmly welcome immigrants, adults in transition, families, and people of all walks of life.", color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/20" },
];

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      
      {/* ── Floating Background Elements ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-500/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -120, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-[40%] -right-[15%] w-[50%] h-[50%] bg-amber-400/5 rounded-full blur-[120px]"
        />
      </div>

      {/* ── Premium Hero ── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
          <Image
            src="/leko/leko-campus-1.jpg"
            alt="Loimaan Evankelinen Kansanopisto campus"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80" />
        </motion.div>

        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-300 text-sm font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md border border-brand-500/20">
              Est. 1946 · Loimaa
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl">
              Our <span className="text-brand-400 italic">Sacred</span> Story
            </h1>
            <p className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A community of faith, personal growth, and lifelong belonging nestled in the heart of the Finnish countryside.
            </p>
          </motion.div>
          
          {/* Animated scroll indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-32 relative bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#16a34a_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <Container>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center border border-white/5 shadow-2xl"
          >
            <Sparkles className="w-16 h-16 text-brand-500 mx-auto mb-10 animate-pulse" />
            <blockquote className="text-3xl md:text-5xl font-bold text-white leading-[1.2] tracking-tight mb-12">
              "We nurture <span className="text-brand-500 italic">growth</span> in faith, knowledge, and community for every person who walks through our doors."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-white/10" />
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">Leko Mission Statement</p>
              <div className="h-px w-12 bg-white/10" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Attractive Story Section ── */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs mb-4 block underline decoration-brand-500 underline-offset-8 decoration-2">
                Legacy of Light
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-zinc-50 mb-10 leading-tight">
                78 Years of Education & Community Heartbeat
              </h2>
              <div className="space-y-8 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                <p>
                  Loimaan Evankelinen Kansanopisto was founded in <span className="text-zinc-900 dark:text-white font-bold bg-zinc-100 dark:bg-zinc-800 px-2 rounded">1946</span> as a folk high school rooted in the Finnish Lutheran evangelical tradition.
                </p>
                <p>
                  For nearly eight decades, we have been a refuge for learners of all ages — from adult immigrants seeking integration, to families looking for nature-based skills, to professionals deepening their spiritual pratique.
                </p>
                <div className="flex gap-4">
                  <Link href="/programs">
                    <Button variant="default" size="lg" className="rounded-2xl h-14 px-8 bg-brand-600 hover:bg-brand-700 shadow-xl shadow-brand-500/20">
                      Explore Programs <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button variant="outline" size="lg" className="rounded-2xl h-14 px-8 border-brand-200 dark:border-brand-900">
                      View Campus
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="pt-12">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image src="/leko/leko-campus-3.jpg" alt="Campus Life" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>
              <div>
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mb-6 group">
                  <Image src="/leko/leko-campus-4.jpg" alt="Community" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl group">
                  <Image src="/leko/leko-campus-2.jpg" alt="Activities" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Cartoon Timeline Section ── */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
        <Container>
          <div className="text-center mb-24">
            <motion.div 
               animate={{ rotate: [0, 10, -10, 0] }} 
               transition={{ repeat: Infinity, duration: 4 }}
               className="inline-block p-4 bg-brand-100 dark:bg-brand-950/30 rounded-3xl mb-6"
            >
              <Milestone className="w-10 h-10 text-brand-600" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 dark:text-zinc-50 mb-6 tracking-tight">
              Our Journey <span className="text-brand-500">Timeline</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mx-auto">Explore how we grew from a small local school to a diverse educational center over the decades!</p>
          </div>

          <div className="relative max-w-5xl mx-auto px-6">
            {/* Center line with animated path */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-100 dark:bg-zinc-800 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-40">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${item.side === "right" ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Central Spine Connector Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <div className="w-12 h-12 rounded-2xl bg-brand-600 shadow-xl shadow-brand-500/30 flex items-center justify-center text-white font-black text-lg border-4 border-white dark:border-zinc-950">
                      {i + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full max-w-lg ${item.side === "left" ? "md:mr-auto" : "md:ml-auto"}`}>
                    <div className="relative group">
                      {/* Floating Sticker Icon */}
                      <motion.div 
                        initial={{ scale: 0, rotate: -20 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", damping: 12 }}
                        className={`absolute -top-20 z-10 w-32 h-32 ${item.side === "left" ? "right-0 md:-right-16" : "left-0 md:-left-16"}`}
                      >
                        <div className="relative w-full h-full p-4 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 rotate-6 group-hover:rotate-0 transition-transform duration-500">
                           <Image src={item.cartoon} alt="Professional mascot" fill className="object-contain p-4" />
                        </div>
                      </motion.div>

                      {/* Main Card */}
                      <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-10 shadow-xl border border-zinc-100 dark:border-zinc-800 relative z-0 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -translate-y-16 translate-x-16" />
                        <div className="inline-block px-4 py-1 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 font-black text-sm mb-6">
                           {item.year}
                        </div>
                        <h3 className="text-2xl font-black text-zinc-950 dark:text-zinc-50 leading-tight">
                          {item.event}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Interactive Values Grid ── */}
      <section className="py-32 bg-white dark:bg-zinc-950">
        <Container>
          <div className="text-center mb-24">
            <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs mb-4 block">Our Heart & Soul</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-zinc-50 tracking-tighter">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${v.bg} rounded-[2.5rem] p-10 border border-zinc-100 dark:border-zinc-800/50 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden`}
              >
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/50 dark:bg-zinc-800/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className={`${v.color} mb-8 p-4 inline-block bg-white dark:bg-zinc-900 rounded-2xl shadow-lg ring-1 ring-zinc-100 dark:ring-zinc-800`}>
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-4">{v.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Vibrant CTA ── */}
      <section className="py-32 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-none">Ready to start <br/> your <span className="underline decoration-amber-400 decoration-4">own story?</span></h2>
            <p className="text-brand-100 text-xl mb-12 max-w-2xl mx-auto">
              Visit our campus in Loimaa and discover a place where you truly belong.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-brand-700 font-black h-16 px-12 rounded-2xl text-lg hover:bg-brand-50 shadow-2xl">
                  Contact Us Now
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="lg" variant="outline" className="border-white/40 text-white font-black h-16 px-12 rounded-2xl text-lg hover:bg-white/10">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
