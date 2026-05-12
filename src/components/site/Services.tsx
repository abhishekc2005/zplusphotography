import { motion } from "framer-motion";
import { Heart, Camera, Plane, Baby, Sparkles, Film, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  { I: Heart, t: "Wedding Photography", d: "Full-day cinematic coverage of your wedding rituals, candid emotion and grand portraits." },
  { I: Sparkles, t: "Pre-Wedding Shoots", d: "Story-driven couple shoots in dreamy locations with cinematic direction." },
  { I: Plane, t: "Drone Photography", d: "Sweeping aerial shots that turn your venue into a cinematic landscape." },
  { I: Baby, t: "Baby Shoots", d: "Soft, playful and tender portraits crafted for tiny hands and big smiles." },
  { I: Film, t: "Reels & Cinematic Films", d: "Trending reels and feature-length wedding films with sound design." },
  { I: Camera, t: "Fashion Photography", d: "Editorial portraits with bold lighting and a high-fashion finish." },
  { I: Briefcase, t: "Event & Corporate", d: "Coverage for launches, conferences, branded events and campaigns." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">What We Craft</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-2xl leading-[1.05]">
              Premium services. <span className="text-gradient-luxe">Cinematic</span> finish.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            From the first proposal to the last dance — and every quiet glance in between — we shoot it all with intention.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 size-40 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="size-12 rounded-xl glass grid place-items-center mb-5 text-gold group-hover:bg-gold group-hover:text-background transition">
                  <s.I className="size-5" />
                </div>
                <h3 className="font-display text-2xl mb-2">{s.t}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{s.d}</p>
                <a href="#booking" className="mt-5 inline-flex items-center gap-1.5 text-sm text-gold opacity-80 group-hover:opacity-100">
                  Enquire <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
