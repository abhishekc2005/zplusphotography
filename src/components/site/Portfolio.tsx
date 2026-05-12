import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import wedding from "@/assets/g-wedding.jpg";
import baby from "@/assets/g-baby.jpg";
import drone from "@/assets/g-drone.jpg";
import event from "@/assets/g-event.jpg";
import fashion from "@/assets/g-fashion.jpg";
import reel from "@/assets/g-reel.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Item = { src: string; cat: string; title: string; span?: string };
const items: Item[] = [
  { src: wedding, cat: "Weddings", title: "Mandap Vows", span: "row-span-2" },
  { src: hero1, cat: "Weddings", title: "Bridal Glow" },
  { src: drone, cat: "Drone", title: "Aerial Palace" },
  { src: reel, cat: "Reels", title: "Eyes That Speak", span: "row-span-2" },
  { src: hero2, cat: "Weddings", title: "Golden Hour" },
  { src: event, cat: "Events", title: "Haldi Joy" },
  { src: baby, cat: "Baby Shoots", title: "Tiny Wonder" },
  { src: fashion, cat: "Fashion", title: "Crimson Editorial", span: "row-span-2" },
  { src: hero3, cat: "Drone", title: "Fireworks Aerial" },
];
const cats = ["All", "Weddings", "Drone", "Fashion", "Reels", "Events", "Baby Shoots"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Portfolio</div>
          <h2 className="font-display text-4xl md:text-6xl">Frames we're <span className="text-gradient-luxe">proud of</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                active === c ? "bg-gold text-background shadow-glow" : "glass text-foreground/80 hover:text-gold"
              }`}>{c}</button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          <AnimatePresence>
            {filtered.map((it, idx) => (
              <motion.button
                layout
                key={it.title + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
                onClick={() => setLightbox(it)}
                className={`relative group overflow-hidden rounded-2xl ${it.span ?? ""}`}
              >
                <img src={it.src} alt={it.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute bottom-4 left-4 right-4 text-left translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[10px] tracking-[0.3em] text-gold uppercase">{it.cat}</div>
                  <div className="font-display text-lg">{it.title}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl grid place-items-center p-6"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox.src} alt={lightbox.title}
              className="max-w-full max-h-[90vh] rounded-2xl shadow-elegant"
            />
            <button className="absolute top-6 right-6 size-11 grid place-items-center rounded-full glass text-foreground" aria-label="Close">
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
