import { Header } from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">Home</main>
      <Footer />
    </div>
  );
}
