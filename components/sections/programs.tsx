"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Award } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { programsData } from "@/data/home";

export function Programs() {
  return (
    <SectionWrapper id="programs" className="bg-white dark:bg-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4"
            >
              Explore Our Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-zinc-600 dark:text-zinc-400"
            >
              From tech engineering to business analytics, discover the path that aligns with your ambition.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/programs">
              <Button variant="outline" className="hidden md:flex gap-2">
                View All Programs <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                    <span className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md">
                      <Clock className="w-3.5 h-3.5" /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5 bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 px-2.5 py-1 rounded-md">
                      <Award className="w-3.5 h-3.5" /> {program.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-3 line-clamp-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 flex-grow line-clamp-3">
                    {program.description}
                  </p>
                  <Button variant="outline" className="w-full justify-between group mt-auto border-zinc-200 dark:border-zinc-800 hover:border-brand-500 dark:hover:border-brand-500">
                    Learn More 
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/programs" className="w-full">
            <Button variant="outline" className="w-full gap-2">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}
