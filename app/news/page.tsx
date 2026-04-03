import Image from "next/image";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { newsData } from "@/data/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Loimaan Evankelinen Kansanopisto",
  description: "Stay up to date with the latest news, announcements, and events from Loimaan Evankelinen Kansanopisto.",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Header */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-brand-600 dark:text-brand-400 font-semibold text-sm uppercase tracking-widest">Latest Updates</span>
          <h1 className="text-5xl font-extrabold text-zinc-950 dark:text-zinc-50 mt-3 mb-4">News & Announcements</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            The latest news, course announcements, and community updates from Loimaan Evankelinen Kansanopisto.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Featured */}
          <Link href={`/news/${newsData[0].id}`} className="group block mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-zinc-50 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow">
              <div className="relative h-72 lg:h-auto min-h-[320px]">
                <Image src={newsData[0].image} alt={newsData[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-3">Featured · {newsData[0].category}</span>
                <h2 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-4 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{newsData[0].title}</h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">{newsData[0].summary}</p>
                <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm">
                  Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(1).map((article) => (
              <Link key={article.id} href={`/news/${article.id}`} className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-52">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">{article.summary}</p>
                  <div className="mt-4 flex items-center gap-1 text-brand-600 dark:text-brand-400 font-semibold text-sm">
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
