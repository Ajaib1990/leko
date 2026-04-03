"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { testimonialsData } from "@/data/home";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <SectionWrapper id="testimonials" className="bg-white dark:bg-black overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/30 text-brand-500 mb-6">
                <Quote className="w-6 h-6 fill-current" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-6">
                Don't just take our word for it.
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
                Our graduates have gone on to build incredible careers at top companies around the world. Here's what they have to say about their Leko experience.
              </p>
              
              <div className="flex gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="flex gap-1 text-brand-500 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-zinc-950 dark:text-zinc-50 mb-8">
                  "{testimonialsData[currentIndex].content}"
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white dark:border-zinc-800 shadow-sm">
                    <Image 
                      src={testimonialsData[currentIndex].avatar}
                      alt={testimonialsData[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-950 dark:text-zinc-50 text-base">
                      {testimonialsData[currentIndex].name}
                    </h4>
                    <p className="text-brand-600 dark:text-brand-400 text-sm font-medium">
                      {testimonialsData[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots indicator */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-brand-500 w-6" 
                      : "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
