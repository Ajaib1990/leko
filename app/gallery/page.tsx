"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryData } from "@/data/pages";

const categories = ["All", "Campus", "Students", "Programs", "Nature", "Events"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<null | typeof galleryData[0]>(null);

  const filtered = activeCategory === "All"
    ? galleryData
    : galleryData.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Header */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-brand-600 dark:text-brand-400 font-semibold text-sm uppercase tracking-widest">Visual Stories</span>
          <h1 className="text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 mt-3 mb-4">Our Gallery</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Photo moments from campus life, programs, events, and the beautiful Loimaa community.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-zinc-950 sticky top-20 z-20 border-b border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
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
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setLightboxImage(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{img.caption}</p>
                    <span className="text-white/60 text-xs">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">{lightboxImage.caption}</p>
                <span className="text-white/50 text-sm">{lightboxImage.category}</span>
              </div>
              <button
                className="absolute -top-4 -right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setLightboxImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
