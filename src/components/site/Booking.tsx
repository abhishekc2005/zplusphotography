import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const eventTypes = ["Wedding", "Pre-Wedding", "Baby Shoot", "Drone", "Fashion", "Event", "Corporate", "Other"];

export function Booking() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", type: "Wedding", date: "", location: "", budget: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const set = <K extends keyof typeof form>(k: K, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill your name and phone number");
      return;
    }
    setSent(true);
    toast.success("Booking request received! We'll reach out shortly.");
  };

  const wa = () => {
    const text = encodeURIComponent(
      `Hi Z Plus Photography! I'd like to book a shoot.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nEvent: ${form.type}\nDate: ${form.date}\nLocation: ${form.location}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.open(`https://wa.me/917024928015?text=${text}`, "_blank");
  };

  const fld = "w-full bg-transparent border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition";

  return (
    <section id="booking" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-radial-luxe opacity-40" />
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="text-xs tracking-[0.4em] text-gold uppercase mb-4">Booking</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Let's create something <em className="shimmer-text not-italic">unforgettable</em>.
            </h2>
            <p className="mt-6 text-foreground/70">
              Tell us about your event and we'll craft a custom package with the right team, gear and creative direction.
            </p>
            <div className="mt-8 space-y-4">
              {["Custom cinematic package", "Drone & multi-cam coverage", "Same-day reels available", "All-India travel"].map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-foreground/85">
                  <span className="size-6 grid place-items-center rounded-full bg-gold/15 text-gold"><Check className="size-3.5" /></span>
                  {b}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 md:p-10 shadow-elegant"
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto size-16 rounded-full bg-gold/15 grid place-items-center text-gold mb-5">
                  <Check className="size-7" />
                </div>
                <h3 className="font-display text-3xl">Request received</h3>
                <p className="text-foreground/70 mt-3">Our team will contact you within 24 hours. For urgent bookings, message us on WhatsApp.</p>
                <button type="button" onClick={wa}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-background font-medium">
                  <MessageCircle className="size-4" /> Continue on WhatsApp
                </button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className={fld} placeholder="Full Name" value={form.name} onChange={(e) => set("name", e.target.value)} />
                  <input className={fld} placeholder="Phone Number" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  <input className={fld} placeholder="Email Address" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
                  <select className={fld} value={form.type} onChange={(e) => set("type", e.target.value)}>
                    {eventTypes.map((t) => <option key={t} className="bg-background">{t}</option>)}
                  </select>
                  <input className={fld} type="date" value={form.date} onChange={(e) => set("date", e.target.value)} />
                  <input className={fld} placeholder="Shoot Location" value={form.location} onChange={(e) => set("location", e.target.value)} />
                  <input className={`${fld} sm:col-span-2`} placeholder="Approx. Budget (₹)" value={form.budget} onChange={(e) => set("budget", e.target.value)} />
                  <textarea className={`${fld} sm:col-span-2 min-h-[110px] resize-none`} placeholder="Tell us about your vision..." value={form.message} onChange={(e) => set("message", e.target.value)} />
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <button type="submit" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-background font-medium hover-lift shadow-glow">
                    <Send className="size-4" /> Send Request
                  </button>
                  <button type="button" onClick={wa}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:text-gold transition">
                    <MessageCircle className="size-4" /> WhatsApp Inquiry
                  </button>
                </div>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
