"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageLoader } from "@/components/animations/page-loader";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { BackToTop } from "@/components/animations/back-to-top";

export function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      <PageLoader />
      <ScrollProgress />
      {!isAdmin && <Navbar />}
      <main>{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <BackToTop />}
    </>
  );
}
