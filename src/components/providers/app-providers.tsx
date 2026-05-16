"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { GsapProvider } from "@/components/gsap/gsap-provider";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { PageTransition } from "@/components/effects/page-transition";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <SmoothScroll>
        <GsapProvider>
          <CustomCursor />
          <PageTransition>{children}</PageTransition>
        </GsapProvider>
      </SmoothScroll>
    </ThemeProvider>
  );
}
