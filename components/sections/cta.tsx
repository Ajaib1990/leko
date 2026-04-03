"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <SectionWrapper id="cta" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-zinc-950 -z-20" />
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <Container>
        <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent opacity-50" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500/20 text-brand-400 mb-8 ring-1 ring-brand-500/30">
              <Sparkles className="w-8 h-8 flex-shrink-0" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to Begin Your Studies at Leko?
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-medium">
              Apply for the upcoming semester and join our welcoming community in Loimaa. Programs are available in Finnish, Swedish, and English.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="brand" size="lg" className="w-full sm:w-auto min-w-[200px] h-14 text-lg">
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto min-w-[200px] h-14 text-lg bg-transparent border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 dark:bg-transparent dark:border-brand-500 dark:text-brand-400 dark:hover:bg-brand-500 dark:hover:text-white dark:hover:border-brand-500"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
