import { motion } from "framer-motion";
import { Play, Youtube, Instagram } from "lucide-react";
import r1 from "@/assets/g-reel.jpg";
import r2 from "@/assets/hero-1.jpg";
import r3 from "@/assets/g-fashion.jpg";
import r4 from "@/assets/hero-2.jpg";

const reels = [
  { img: r1, title: "Bridal Story", views: "210K" },
  { img: r2, title: "Candle Vows", views: "98K" },
  { img: r3, title: "Editorial Cut", views: "152K" },
  { img: r4, title: "Sunset Promise", views: "76K" },
];

export function Reels() {
  return (
    <section id="reels" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-luxe opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Reels & Films</div>
            <h2 className="font-display text-4xl md:text-6xl">Cinema in <span className="text-gradient-luxe">motion</span></h2>
          </div>
          <div className="flex gap-3">
            <a href="https://youtube.com/@zplusphotographybyvinay" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:text-gold transition">
              <Youtube className="size-4" /> YouTube
            </a>
            <a href="https://instagram.com/reel_by_z_plus_photography" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:text-gold transition">
              <Instagram className="size-4" /> Reels
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {reels.map((r, i) => (
            <motion.a
              href="https://instagram.com/reel_by_z_plus_photography" target="_blank" rel="noreferrer"
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden glass hover-lift"
            >
              <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="size-16 rounded-full bg-gold/90 grid place-items-center text-background shadow-glow group-hover:scale-110 transition-transform">
                  <Play className="size-6 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-lg">{r.title}</div>
                <div className="text-xs text-foreground/60 mt-0.5">{r.views} views</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
