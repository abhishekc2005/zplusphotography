import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Reach Out</div>
          <h2 className="font-display text-4xl md:text-6xl">Get in <span className="text-gradient-luxe">touch</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { I: Phone, t: "Call Us", v: "+91 70249 28015", href: "tel:+917024928015" },
            { I: Mail, t: "Email", v: "zplusphotography@gmail.com", href: "mailto:zplusphotography@gmail.com" },
            { I: MapPin, t: "Studio", v: "Indore, Madhya Pradesh", href: "#" },
          ].map((c, i) => (
            <motion.a
              href={c.href} key={c.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover-lift block"
            >
              <div className="size-12 rounded-xl glass grid place-items-center text-gold mb-5"><c.I className="size-5" /></div>
              <div className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{c.t}</div>
              <div className="font-display text-xl mt-1">{c.v}</div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden glass aspect-[16/9]">
            <iframe
              title="Indore Map"
              src="https://www.google.com/maps?q=Indore,Madhya+Pradesh&output=embed"
              className="w-full h-full grayscale-[60%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="glass rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs tracking-[0.4em] text-gold uppercase mb-3">Follow</div>
              <h3 className="font-display text-2xl">Behind the lens</h3>
              <p className="text-sm text-foreground/70 mt-3">Daily reels, BTS, and the latest cinematic stories.</p>
            </div>
            <div className="mt-8 flex gap-3">
              {[
                { I: Instagram, href: "https://instagram.com/z_plus_photography" },
                { I: Youtube, href: "https://youtube.com/@zplusphotographybyvinay" },
              ].map(({ I, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noreferrer"
                  className="size-12 rounded-full glass grid place-items-center hover:text-gold hover:border-gold/40 transition">
                  <I className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
