"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { statisticsData } from "@/data/home";

// Helper component for counting up animation
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      // if zero, return
      if (start === end) return;

      const duration = 2000;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutQuart)
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(start + easeOut * (end - start));
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-700 dark:from-brand-300 dark:to-brand-600">
      {count}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <SectionWrapper id="statistics" className="bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-zinc-800">
          {statisticsData.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
