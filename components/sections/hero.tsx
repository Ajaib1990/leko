"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/leko/leko-campus-1.jpg",
    alt: "Loimaan Evankelinen Kansanopisto campus",
    caption: "Our beautiful campus in Loimaa",
  },
  {
    id: 2,
    image: "/leko/leko-campus-2.jpg",
    alt: "Students at Leko campus",
    caption: "A welcoming community for all learners",
  },
  {
    id: 3,
    image: "/leko/leko-campus-3.jpg",
    alt: "Leko education activities",
    caption: "Hands-on learning and personal growth",
  },
  {
    id: 4,
    image: "/leko/leko-campus-4.jpg",
    alt: "Leko outdoor life and activities",
    caption: "Nature, self-sufficiency and community",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax on scroll
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 180]);

  // Auto-advance slider every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Parallax Image Slider ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ y: yParallax }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-white bg-brand-600/70 backdrop-blur-sm ring-1 ring-white/20 mb-6">
              Syyslukukausi alkaa 18.8.2025 — Ilmoittaudu nyt!
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 drop-shadow-lg"
          >
            Loimaan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              Evankelinen
            </span>{" "}
            Kansanopisto
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed drop-shadow"
          >
            We offer diverse training programs from language education for immigrants and adults, to self-sufficiency courses, art therapy and professional development — rooted in Christian values.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="brand" size="lg" className="gap-2 shadow-xl shadow-brand-900/40">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Button>
            <Link href="/programs">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:border-white gap-2 backdrop-blur-sm"
              >
                <Play className="w-4 h-4 fill-current" /> Explore Programs
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ── Slider Controls ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-brand-400 w-8 h-2.5"
                  : "bg-white/40 w-2.5 h-2.5 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ── Image caption ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-20 right-8 z-10 hidden md:block text-right"
        >
          <span className="text-white/60 text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            📍 {slides[current].caption}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* ── Slide counter ── */}
      <div className="absolute top-28 right-8 z-10 hidden md:flex flex-col items-end gap-2">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            animate={{ scaleX: i === current ? 1 : 0.4, opacity: i === current ? 1 : 0.3 }}
            transition={{ duration: 0.4 }}
            className="h-0.5 bg-white origin-right"
            style={{ width: 40 }}
          />
        ))}
        <span className="text-white/60 text-xs font-mono mt-1">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}

