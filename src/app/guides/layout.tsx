import type { Metadata } from "next";
import { Header } from "@/components/layout/header/Header";
import { SidebarAccordion } from "@/components/layout/sidebarAccordion";
import "../../styles/globals.css";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Ad tech Guides",
  description: "Ad tech Guides",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function GuidesLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <aside className="hidden md:block w-64 border-r bg-gray-50">
          <SidebarAccordion />
        </aside>
        <main className="flex-1 p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
