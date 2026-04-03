import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Mail, Phone, MapPin, Globe, Share2, Link2, MessageSquare } from "lucide-react";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/leko-logo.png"
                alt="Loimaan Evankelinen Kansanopisto"
                width={160}
                height={38}
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Loimaan Evankelinen Kansanopisto — a community-rooted school in Loimaa offering language education, self-sufficiency training, art therapy, and more.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Share2 className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-brand-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Link2 className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-zinc-950 dark:text-zinc-50 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">About Leko</Link></li>
              <li><Link href="/programs" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">All Programs</Link></li>
              <li><Link href="/admissions" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Admissions</Link></li>
              <li><Link href="/news" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">News & Events</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-zinc-950 dark:text-zinc-50 mb-6">Key Programs</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Adult Basic Education</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Finnish Language Courses</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Self-Sufficiency Training</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Art Therapy</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 hover:text-brand-500 transition-colors dark:text-zinc-400">Children's Art Camps</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-zinc-950 dark:text-zinc-50 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Loimaan evankelinen kansanopisto<br />Opistontie 4, 32210 Loimaa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">050 4488 470</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-500 shrink-0" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">toimisto@leko.fi</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Leko.fi Education Center. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
