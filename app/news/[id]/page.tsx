import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import { newsData } from "@/data/home";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return newsData.map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = newsData.find((n) => n.id === id);
  if (!article) return {};
  return { title: `${article.title} | Leko News`, description: article.summary };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = newsData.find((n) => n.id === id);
  if (!article) notFound();

  const related = newsData.filter((n) => n.id !== id).slice(0, 2);

  const fullContent = [
    article.summary,
    `Loimaan Evankelinen Kansanopisto continues to serve its diverse community with this inspiring initiative. This is a significant development for students, families, and educators alike.`,
    `The program builds on the school's long-standing commitment to inclusive, faith-based education that serves people of all backgrounds and ages. Our faculty has prepared thoroughly to ensure the highest quality of instruction and community support.`,
    `For more information or to register your interest, please contact our office directly at toimisto@leko.fi or call 050 4488 470.`,
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Back */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-6">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-6 lg:px-8 pb-20">
        {/* Meta */}
        <div className="flex flex-wrap gap-3 items-center mb-6">
          <span className="bg-brand-100 dark:bg-brand-950/50 text-brand-700 dark:text-brand-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Tag className="w-3 h-3" /> {article.category}
          </span>
          <span className="flex items-center gap-1 text-zinc-400 text-xs">
            <Calendar className="w-3 h-3" /> {article.date}
          </span>
          <span className="flex items-center gap-1 text-zinc-400 text-xs">
            <Clock className="w-3 h-3" /> 3 min read
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-zinc-50 mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Hero Image */}
        <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-10 shadow-lg">
          <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        </div>

        {/* Body */}
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          {fullContent.map((para, i) => (
            <p key={i} className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-6">{para}</p>
          ))}

          {/* Highlighted quote */}
          <blockquote className="border-l-4 border-brand-500 pl-6 my-8 bg-brand-50 dark:bg-brand-950/20 py-4 pr-4 rounded-r-xl">
            <p className="text-brand-800 dark:text-brand-200 font-medium text-xl leading-relaxed italic">
              "Education is not just instruction — it is formation of the whole person, in spirit, mind, and community."
            </p>
            <footer className="text-brand-600 dark:text-brand-400 text-sm mt-2 font-semibold">— Leko Faculty</footer>
          </blockquote>

          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
            We look forward to welcoming students from across Finland and internationally. Applications are open and the community is ready to receive you warmly.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-brand-600 rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Have Questions?</h3>
          <p className="text-brand-100 mb-6">Our team is happy to help. Reach out to us directly or visit our campus in Loimaa.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:toimisto@leko.fi" className="bg-white text-brand-700 font-semibold px-6 py-2.5 rounded-xl hover:bg-brand-50 transition-colors text-sm">
              toimisto@leko.fi
            </a>
            <Link href="/contact" className="border border-white/30 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
              Contact Page
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-8">More News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((n) => (
                <Link key={n.id} href={`/news/${n.id}`} className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image src={n.image} alt={n.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-brand-600 dark:text-brand-400 text-xs font-bold">{n.category}</span>
                    <h3 className="font-semibold text-zinc-950 dark:text-zinc-50 mt-1 mb-2 line-clamp-2">{n.title}</h3>
                    <p className="text-zinc-400 text-xs">{n.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
