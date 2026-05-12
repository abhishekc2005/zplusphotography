import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  { n: "Aanya & Rohan", r: "Vinay turned our wedding into a film. Every frame felt like a dream — emotions captured we didn't even know we had.", l: "Indore" },
  { n: "Priya Sharma", r: "The pre-wedding shoot was magical. The team's eye for storytelling and lighting is on another level. Worth every rupee.", l: "Bhopal" },
  { n: "Karthik Mehta", r: "Hands down the best photographer in MP. The drone shots of our reception were straight out of a Bollywood film.", l: "Ujjain" },
  { n: "Ishita Verma", r: "The reels they delivered went viral overnight. Cinematic, classy and so well edited. Highly recommended.", l: "Mumbai" },
];

export function Testimonials() {
  return (
    <section className="py-28 md:py-36 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Kind Words</div>
          <h2 className="font-display text-4xl md:text-6xl">Loved by <span className="text-gradient-luxe">800+ couples</span></h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max">
          {[...items, ...items].map((t, i) => (
            <motion.div key={i}
              className="w-[340px] md:w-[420px] glass rounded-2xl p-7 shrink-0 hover-lift">
              <Quote className="text-gold/60 size-7 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed">{t.r}</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-display text-lg">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.l}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
