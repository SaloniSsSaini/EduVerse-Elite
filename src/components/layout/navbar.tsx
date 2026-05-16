"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, MAIN_NAV } from "@/data/site";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function Navbar() {
  const scrolled = useScrollPosition(20);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <nav className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5" data-cursor-hover>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-premium text-sm font-bold text-white shadow-md shadow-primary/25 transition-transform group-hover:scale-105">
              E
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight">{SITE_CONFIG.name}</p>
              <p className="text-[10px] text-muted-foreground">University</p>
            </div>
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {MAIN_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "text-foreground bg-secondary/60"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                )}
                data-cursor-hover
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MagneticButton asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/admissions">Apply Now</Link>
            </MagneticButton>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-secondary/60 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[min(320px,85vw)] flex-col glass p-6 lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-semibold">{SITE_CONFIG.name}</span>
                <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <Link href="/" className="rounded-lg px-4 py-3 font-medium hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
                {MAIN_NAV.map((link, i) => (
                  <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={link.href} className="block rounded-lg px-4 py-3 font-medium hover:bg-secondary" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <MagneticButton asChild className="w-full" size="lg">
                  <Link href="/admissions" onClick={() => setMobileOpen(false)}>Apply Now</Link>
                </MagneticButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
