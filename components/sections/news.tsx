"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { newsData } from "@/data/home";

export function News() {
  return (
    <SectionWrapper id="news" className="bg-zinc-50 dark:bg-zinc-950/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4"
          >
            Latest Updates & Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Stay up to date with the latest campus news, events, and student success stories.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group border-none shadow-md hover:shadow-xl dark:shadow-none bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-300 cursor-pointer">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-3 group-hover:text-brand-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5 line-clamp-3">
                    {item.summary}
                  </p>
                  <div className="mt-auto flex items-center font-medium text-brand-600 dark:text-brand-400">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
