import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Instagram, Youtube, Facebook } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img src={slides[i]} alt="Cinematic photography" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      <div className="absolute inset-0 bg-radial-luxe" />
      <div className="absolute inset-0 bg-grain opacity-40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-flex w-fit items-center gap-3 glass rounded-full px-4 py-2 mb-7"
        >
          <span className="size-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-foreground/80">Indore · Madhya Pradesh</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.02] max-w-5xl"
        >
          Capturing <em className="shimmer-text not-italic">Emotions</em>
          <br />
          Beyond <span className="text-gradient-luxe">Frames</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-7 max-w-xl text-base md:text-lg text-foreground/75"
        >
          Premium wedding & cinematic photography by Vinay Choudhary — turning your most precious moments into timeless visual stories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#booking" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold text-background font-medium hover-lift shadow-glow">
            Book Now <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#portfolio" className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-foreground hover:border-gold/60 transition">
            Explore Portfolio
          </a>
          <a href="#reels" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border text-foreground hover:text-gold transition">
            <Play className="size-4" /> Watch Reels
          </a>
        </motion.div>

        {/* Counters bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px glass rounded-2xl overflow-hidden max-w-3xl"
        >
          {[
            ["1500+", "Shoots Delivered"],
            ["28K+", "Followers"],
            ["800+", "Happy Clients"],
            ["7+", "Years Crafting"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/50 p-5 text-center">
              <div className="font-display text-2xl md:text-3xl text-gradient-gold">{n}</div>
              <div className="text-[11px] tracking-widest uppercase text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating socials */}
      <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 flex-col gap-3">
        {[
          { I: Instagram, href: "https://instagram.com/z_plus_photography" },
          { I: Youtube, href: "https://youtube.com/@zplusphotographybyvinay" },
          { I: Facebook, href: "#" },
        ].map(({ I, href }, idx) => (
          <a key={idx} href={href} target="_blank" rel="noreferrer"
            className="size-11 rounded-full glass grid place-items-center text-foreground/80 hover:text-gold hover:border-gold/40 transition">
            <I className="size-4" />
          </a>
        ))}
      </div>

      {/* Slide pager */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${i === idx ? "w-10 bg-gold" : "w-4 bg-foreground/30"}`} />
        ))}
      </div>
    </section>
  );
}
