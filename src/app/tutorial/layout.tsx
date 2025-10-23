import type { Metadata } from "next";
import { Header } from "@/components/layout/header/Header";
import { SidebarAccordion } from "@/components/layout/sidebarAccordion";
import "../../styles/globals.css";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Ad tech tutorial",
  description: "Ad tech tutorial",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function TutorialLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden md:block w-64 border-r bg-gray-50">
          <SidebarAccordion />
        </aside>
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
