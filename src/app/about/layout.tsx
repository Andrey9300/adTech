import type { Metadata } from "next";
import { Header } from "@/components/layout/header/Header";
import "../../styles/globals.css";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "Ad tech tutorial",
  description: "Ad tech tutorial",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
