import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { staffData } from "@/data/pages";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Staff | Loimaan Evankelinen Kansanopisto",
  description: "Meet the dedicated staff and teachers of Loimaan Evankelinen Kansanopisto.",
};

const departments = ["All", "Leadership", "Language Education", "Self-Sufficiency", "Art Therapy", "Social Work", "Administration", "Facilities", "Spiritual Work"];

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <Image src="/leko-campus-2.jpg" alt="Leko staff" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6 pt-20">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3">Our People</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">Meet the Team</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            The dedicated, passionate people who make Loimaan Evankelinen Kansanopisto a place of growth and belonging.
          </p>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-brand-600 py-10">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-3 gap-6 text-center">
          {[
            { number: "8+", label: "Staff Members" },
            { number: "78", label: "Years of Service" },
            { number: "100%", label: "Dedicated to You" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-white">{s.number}</p>
              <p className="text-brand-200 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-950 dark:text-zinc-50 mb-4">Our Team</h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
              Each member of our team brings unique expertise and a shared dedication to the Leko community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {staffData.map((member) => (
              <div
                key={member.id}
                className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative h-60 bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Department badge */}
                  <span className="absolute top-4 left-4 bg-brand-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {member.department}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 mb-1">{member.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50 mb-4">Want to Join Our Team?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
            We are always looking for passionate educators and professionals who share our values and mission. Contact us to learn more.
          </p>
          <a
            href="mailto:toimisto@leko.fi"
            className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-8 py-3 rounded-2xl hover:bg-brand-700 transition-colors"
          >
            <Mail className="w-4 h-4" /> Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
