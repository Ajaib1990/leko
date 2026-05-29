"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";

// ── Christian cross SVG ──────────────────────────────────────────
function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="10" y="2" width="4" height="20" rx="1" />
      <rect x="3" y="8" width="18" height="4" rx="1" />
    </svg>
  );
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Staff", href: "/staff" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-brand-600 ${
        isScrolled ? "shadow-xl shadow-brand-900/40" : ""
      }`}
    >
      {/* Subtle shimmer line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo + Cross */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <span className="sr-only">Loimaan Evankelinen Kansanopisto</span>

              <div className="hidden lg:flex flex-col -space-y-1">
                <Image
                  src="/leko/leko-logo.png"
                  alt="Loimaan Evankelinen Kansanopisto"
                  width={150}
                  height={36}
                  className="h-9 w-auto brightness-0 invert"
                  priority
                />
                <span className="text-[10px] font-bold text-white/60 tracking-[0.2em] uppercase pl-1">
                  Rooted in Faith since 1946
                </span>
              </div>
              <Image
                src="/leko/leko-logo.png"
                alt="Loimaan Evankelinen Kansanopisto"
                width={150}
                height={36}
                className="h-9 w-auto brightness-0 invert lg:hidden"
                priority
              />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex lg:gap-x-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => setHoveredLink(item.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors group"
                >
                  {/* Highlight bg */}
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-white/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: isActive || hoveredLink === item.name ? 1 : 0,
                      scale: isActive || hoveredLink === item.name ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.15 }}
                  />
                  <span className={`relative z-10 transition-colors ${isActive ? "text-white font-semibold" : "text-white/80 group-hover:text-white"}`}>
                    {item.name}
                  </span>
                  {/* Active indicator cross */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavCross"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2"
                    >
                      <CrossIcon className="w-2 h-2 text-white" />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="default"
                className="font-semibold bg-white text-brand-700 hover:bg-brand-50 shadow-lg shadow-brand-900/20 transition-all"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto sm:max-w-sm"
            >
              {/* Gradient background for drawer */}
              <div className="absolute inset-0 bg-brand-700" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-500/30 to-transparent" />

              <div className="relative px-6 py-6">
                <div className="flex items-center justify-between mb-10">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                    <Image
                      src="/leko/leko-logo.png"
                      alt="Loimaan Evankelinen Kansanopisto"
                      width={130}
                      height={31}
                      className="h-8 w-auto brightness-0 invert"
                    />
                  </Link>
                  <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <button
                      type="button"
                      className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <nav className="space-y-1">
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          pathname === item.href
                            ? "bg-white/20 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {pathname === item.href && (
                          <CrossIcon className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                        )}
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8">
                  <Button className="w-full bg-white text-brand-700 hover:bg-brand-50 font-semibold" onClick={() => setMobileMenuOpen(false)}>
                    Apply Now
                  </Button>
                </div>

                {/* Bottom cross decoration */}
                <div className="absolute bottom-8 right-8 opacity-10">
                  <CrossIcon className="w-16 h-16 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
