"use client";

import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";

export default function CTABanner() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Glow Container */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-950 dark:from-neutral-950 dark:via-zinc-950 dark:to-neutral-950 p-8 md:p-16 text-center overflow-hidden border border-white/5 shadow-2xl">
          
          {/* Saffron & Gold background glowing orbs */}
          <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[120%] rounded-full bg-saffron-500/20 blur-[130px] pointer-events-none" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[120%] rounded-full bg-gold-500/20 blur-[130px] pointer-events-none" />

          {/* Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.015] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          <div className="max-w-2xl mx-auto relative z-10">
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-bold text-saffron-400 uppercase tracking-widest block mb-4"
            >
              Take Part in the Legacy
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              Be the Reason Someone Smiles Today
            </motion.h2>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-stone-300 text-sm md:text-base mb-10 leading-relaxed text-balance"
            >
              Whether you donate your time as a local volunteer, sponsor an active campaign, or share our mission with your family, your energy makes real impact. Let&apos;s unite.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => handleScrollTo("contact")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0 animate-pulse-glow"
              >
                <Users className="w-4 h-4 group-hover:scale-105 transition-transform" />
                <span>Become Volunteer</span>
              </button>

              <button
                onClick={() => handleScrollTo("campaigns")}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-sm border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-4 h-4 text-saffron-400 fill-saffron-400" />
                <span>Start Donating</span>
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
