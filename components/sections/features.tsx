"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, Handshake, Globe } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { featuresData } from "@/data/home";

const iconMap = {
  BookOpen: BookOpen,
  Briefcase: Briefcase,
  Handshake: Handshake,
  Globe: Globe,
};

export function Features() {
  return (
    <SectionWrapper id="features" className="bg-white dark:bg-black">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mb-4"
          >
            Why Study at Leko?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            A community grounded in Christian values. Our programs range from language training and integration support to self-sufficiency, art therapy, and professional development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-none shadow-lg shadow-zinc-200/50 dark:shadow-none dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-brand-100/50 dark:bg-brand-900/20 flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="mb-2 text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
