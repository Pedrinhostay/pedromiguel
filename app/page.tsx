import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Solutions />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}
