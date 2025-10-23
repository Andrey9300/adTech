import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ad tech",
  description: "Ad tech",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
