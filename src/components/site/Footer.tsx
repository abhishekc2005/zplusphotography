import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-10 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-9 rounded-full grid place-items-center bg-gradient-to-br from-[var(--gold)] to-[var(--accent)]">
                <Camera className="size-4 text-background" strokeWidth={2.5} />
              </div>
              <div className="font-display text-lg shimmer-text">Z Plus Photography</div>
            </div>
            <p className="text-sm text-foreground/65 leading-relaxed">
              Premium wedding & cinematic photography crafted by Vinay Choudhary, based in Indore, India.
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-foreground/75">
              {[["About","#about"],["Services","#services"],["Portfolio","#portfolio"],["Reels","#reels"],["Booking","#booking"]].map(([l,h]) => (
                <li key={l}><a href={h} className="hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Services</div>
            <ul className="space-y-2 text-sm text-foreground/75">
              {["Wedding Films","Pre-Wedding","Drone Photography","Baby Shoots","Reels & Cinematic","Fashion"].map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>+91 70249 28015</li>
              <li>zplusphotography@gmail.com</li>
              <li>Indore, MP, India</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Z Plus Photography. All rights reserved.</div>
          <div>Designed with cinematic passion.</div>
        </div>
      </div>
    </footer>
  );
}
