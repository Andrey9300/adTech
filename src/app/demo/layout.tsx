import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Ad tech demo",
  description: "Ad tech demo",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function DemoLayout({ children }: LayoutProps) {
  return (
    <div>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
