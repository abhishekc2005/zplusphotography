import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Reels } from "@/components/site/Reels";
import { Booking } from "@/components/site/Booking";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Z Plus Photography — Cinematic Wedding Photographer in Indore" },
      { name: "description", content: "Z Plus Photography by Vinay Choudhary — premium cinematic wedding, pre-wedding, drone & reel photography in Indore, Madhya Pradesh. Book your shoot today." },
      { name: "keywords", content: "Wedding Photographer Indore, Best Photographer in MP, Cinematic Wedding Shoots, Drone Photography India, Pre Wedding Shoot Indore, Z Plus Photography" },
      { property: "og:title", content: "Z Plus Photography — Cinematic Wedding Photographer in Indore" },
      { property: "og:description", content: "Capturing emotions beyond frames. Premium cinematic wedding & event photography by Vinay Choudhary." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reels />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors theme="dark" position="bottom-center" />
    </div>
  );
}
