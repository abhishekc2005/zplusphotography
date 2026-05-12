import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#reels", label: "Reels" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="size-9 rounded-full grid place-items-center bg-gradient-to-br from-[var(--gold)] to-[var(--accent)] shadow-glow">
            <Camera className="size-4 text-background" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg shimmer-text">Z Plus</div>
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Photography</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="relative text-sm text-foreground/80 hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-500">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#booking"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-gold text-sm hover:bg-gold hover:text-background transition-all duration-500 hover-lift">
          Book a Shoot
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden glass-strong border-t border-border mt-3"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-foreground/90 hover:text-gold py-1">{l.label}</a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center px-5 py-3 rounded-full bg-gold text-background font-medium">
              Book a Shoot
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
