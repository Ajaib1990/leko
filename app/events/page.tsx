"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Tag, ExternalLink } from "lucide-react";
import { eventsData } from "@/data/pages";

const categories = ["All", "Course", "Camp", "Event", "Lecture"];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSlide, setActiveSlide] = useState<Record<string, number>>({});

  const filtered = activeCategory === "All"
    ? eventsData
    : eventsData.filter((e) => e.category === activeCategory);

  const getSlide = (id: string) => activeSlide[id] ?? 0;
  const setSlide = (id: string, i: number) => setActiveSlide((prev) => ({ ...prev, [id]: i }));

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Header */}
      <section className="py-20 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-brand-200 font-semibold text-sm uppercase tracking-widest">What's On</span>
          <h1 className="text-5xl font-extrabold text-white mt-3 mb-4">Events & Courses</h1>
          <p className="text-brand-100 max-w-2xl mx-auto text-lg">
            Discover upcoming courses, camps, and community events at Loimaan Evankelinen Kansanopisto.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white dark:bg-zinc-950 sticky top-20 z-20 border-b border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-brand-600 text-white shadow-md"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
          {filtered.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Image Slider */}
                <div className="relative h-72 lg:h-auto min-h-[300px] bg-zinc-100 dark:bg-zinc-800">
                  {/* Slider images */}
                  <Image
                    src={event.gallery[getSlide(event.id)] ?? event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    {event.category}
                  </span>

                  {/* Slider dots */}
                  {event.gallery.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {event.gallery.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setSlide(event.id, i)}
                          className={`rounded-full transition-all duration-300 ${
                            i === getSlide(event.id) ? "bg-white w-5 h-2" : "bg-white/50 w-2 h-2"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="p-8 lg:p-10 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs font-medium bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 px-2.5 py-1 rounded-md">
                        <Tag className="w-3 h-3" /> {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-4 leading-tight">{event.title}</h2>

                  <div className="flex flex-col gap-2 mb-5 text-sm text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-500" /> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-500" /> {event.location}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">{event.description}</p>

                  {/* Video embed */}
                  {event.hasVideo && event.videoUrl && (
                    <div className="mb-6 rounded-xl overflow-hidden aspect-video bg-black">
                      <iframe
                        src={event.videoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Video: ${event.title}`}
                      />
                    </div>
                  )}

                  <div className="flex gap-3 mt-auto">
                    {event.registrationUrl !== "#" ? (
                      <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors text-sm"
                      >
                        Register Now <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-zinc-400 text-sm font-medium">Registration not required</span>
                    )}
                    <Link
                      href={`/events/${event.id}`}
                      className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-semibold px-5 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
