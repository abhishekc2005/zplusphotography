import { motion } from "framer-motion";
import founder from "@/assets/founder.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-radial-luxe opacity-40" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-accent/10 blur-2xl rounded-3xl" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <img src={founder} alt="Vinay Choudhary, founder of Z Plus Photography" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-xs tracking-[0.3em] text-gold uppercase mb-1">Founder</div>
              <div className="font-display text-2xl">Vinay Choudhary</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="text-xs tracking-[0.4em] text-gold uppercase mb-5">About the Studio</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
            Stories told through a <em className="shimmer-text not-italic">cinematic</em> lens.
          </h2>
          <p className="mt-7 text-foreground/75 text-lg leading-relaxed">
            Z Plus Photography transforms emotions into timeless cinematic memories through creativity,
            storytelling, and premium visual production. From intimate first looks to grand celebrations,
            every frame is crafted with intention.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              ["Our Mission", "To preserve fleeting emotions as art that outlives the moment."],
              ["Our Vision", "To be India's most loved cinematic wedding storytellers."],
            ].map(([t, d]) => (
              <div key={t} className="glass rounded-2xl p-5 hover-lift">
                <div className="text-gold text-sm font-medium">{t}</div>
                <p className="text-sm text-foreground/70 mt-2">{d}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 pl-5 border-l-2 border-gold/60 italic text-foreground/85 font-display text-xl">
            “Forever starts now.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
