import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Loimaan Evankelinen Kansanopisto",
  description: "Get in touch with us for admissions, general inquiries, or campus visits. We are located in Loimaa, Southwest Finland.",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "050 4488 470",
    description: "Office hours: Mon-Fri 8:00 - 15:45",
    href: "tel:0504488470"
  },
  {
    icon: Mail,
    title: "Email",
    value: "toimisto@leko.fi",
    description: "General inquiries and admissions",
    href: "mailto:toimisto@leko.fi"
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Opistontie 4, 32210 Loimaa",
    description: "Main campus and administrative office",
    href: "https://maps.google.com/?q=Opistontie+4,+32210+Loimaa"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-full bg-white dark:bg-zinc-950 pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-600/5 -skew-x-12 translate-x-1/4" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-sm mb-4 block italic">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
              We're here to <span className="text-brand-600">help you grow.</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Whether you have questions about our programs, admissions, or just want to visit our campus, we'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Send us a message</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Full Name</label>
                  <Input placeholder="Eija Laitinen" className="h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Email Address</label>
                  <Input type="email" placeholder="eija@example.com" className="h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Subject</label>
                <Input placeholder="Inquiry about Language Courses" className="h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">Message</label>
                <Textarea placeholder="How can we help you today?" className="min-h-[160px] rounded-2xl bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 resize-none" />
              </div>
              <Button size="lg" className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-xl shadow-brand-500/20 transition-all gap-2">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <a 
                  key={i}
                  href={info.href}
                  className="group flex flex-col sm:flex-row gap-6 p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl hover:border-brand-500/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 text-brand-600 dark:text-brand-400">
                    <info.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">{info.title}</h3>
                    <p className="text-lg font-semibold text-brand-600 dark:text-brand-400 mb-2 truncate max-w-full">
                      {info.value}
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Placeholder Map */}
            <div className="relative h-[420px] rounded-[2.5rem] overflow-hidden group shadow-2xl">
              {/* This mimics a map with brand styling */}
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_2px_2px,_#16a34a_1px,_transparent_0)] bg-[length:24px_24px] dark:opacity-20" />
                <div className="relative z-10 flex flex-col items-center gap-4 p-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl max-w-xs text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center animate-bounce shadow-xl shadow-brand-500/40">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-zinc-950 dark:text-zinc-50">Leko Campus</h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">Opistontie 4, 32210 Loimaa, Finland</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full h-10 rounded-xl font-bold border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white transition-colors">
                    Get Directions
                  </Button>
                </div>
              </div>
              {/* Corner decor */}
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* FAQs or Social Section */}
      <section className="py-24 bg-brand-600 text-white overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay connected with our community</h2>
              <p className="text-brand-100 text-lg mb-8">
                Follow us on social media for daily updates, student stories, and upcoming course announcements.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {['Facebook', 'Instagram', 'YouTube'].map(social => (
                  <Button key={social} variant="outline" className="h-12 px-6 rounded-xl border-white/20 text-white hover:bg-white hover:text-brand-600 transition-all font-bold">
                    {social}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-full flex items-center justify-center relative">
               <div className="absolute inset-0 bg-white/5 animate-ping rounded-full" />
               <MessageSquare className="w-20 h-20 md:w-28 md:h-28 text-white opacity-40" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
