import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, MapPin, Tag, ExternalLink, ArrowLeft } from "lucide-react";
import { eventsData } from "@/data/pages";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return eventsData.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const event = eventsData.find((e) => e.id === id);
  if (!event) return {};
  return { title: `${event.title} | Leko Events`, description: event.description };
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = eventsData.find((e) => e.id === id);
  if (!event) notFound();

  const otherEvents = eventsData.filter((e) => e.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 pt-20">
      {/* Back */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-6 lg:px-16">
          <div className="mx-auto max-w-5xl">
            <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-3 inline-block">
              {event.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">{event.title}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main */}
        <div className="lg:col-span-2 space-y-8">
          <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">{event.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs font-medium bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-400 px-2.5 py-1 rounded-md">
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>

          {/* Slider */}
          {event.gallery.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {event.gallery.map((src, i) => (
                  <div key={i} className="aspect-video rounded-xl overflow-hidden">
                    <Image src={src} alt={`${event.title} ${i + 1}`} width={400} height={225} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Video */}
          {event.hasVideo && event.videoUrl && (
            <div>
              <h2 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-4">Event Video</h2>
              <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                <iframe
                  src={event.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video: ${event.title}`}
                />
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 space-y-4">
            <h3 className="font-bold text-zinc-950 dark:text-zinc-50 text-lg">Event Details</h3>
            <div className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <Calendar className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
              <span>{event.location}</span>
            </div>

            {event.registrationUrl !== "#" ? (
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brand-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-700 transition-colors text-sm mt-2"
              >
                Register Now <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <p className="text-sm text-zinc-400 text-center pt-2">No registration required</p>
            )}
          </div>

          <div className="bg-brand-600 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">Questions?</h3>
            <p className="text-brand-100 text-sm mb-4">Contact us for more information about this event.</p>
            <a href="mailto:toimisto@leko.fi" className="text-sm font-semibold underline text-white">toimisto@leko.fi</a>
          </div>
        </div>
      </div>

      {/* Other events */}
      {otherEvents.length > 0 && (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-8">More Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherEvents.map((e) => (
                <Link key={e.id} href={`/events/${e.id}`} className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image src={e.image} alt={e.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-brand-600 dark:text-brand-400 text-xs font-bold uppercase">{e.category}</span>
                    <h3 className="font-semibold text-zinc-950 dark:text-zinc-50 mt-1 line-clamp-2">{e.title}</h3>
                    <p className="text-zinc-400 text-xs mt-1">{e.date}</p>
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
