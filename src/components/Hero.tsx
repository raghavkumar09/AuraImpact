"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, Users, Award, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Warm saffron radial glow */}
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-saffron-200/20 dark:bg-saffron-900/10 blur-[120px]" />
        {/* Soft gold radial glow */}
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold-200/20 dark:bg-gold-900/10 blur-[120px]" />
        
        {/* Fine grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-saffron-200/30 text-saffron-600 dark:text-saffron-400 text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Spiritual Sanctuary & Social Action</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 text-balance"
          >
            Creating Hope, Compassion &{" "}
            <span className="bg-gradient-to-r from-saffron-500 via-gold-500 to-saffron-600 bg-clip-text text-transparent">
              Spiritual Impact
            </span>{" "}
            Together
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed text-balance"
          >
            AuraImpact is a modern community sanctuary uniting spiritual wisdom and decisive social action. We empower change-makers to restore lives, distribute meals, and foster deep connection.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#campaigns"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("campaigns");
                if (target) {
                  const navbarHeight = 80;
                  window.scrollTo({
                    top: target.offsetTop - navbarHeight,
                    behavior: "smooth"
                  });
                }
              }}
              className="px-8 py-3.5 rounded-2xl font-semibold text-primary-foreground bg-primary hover:bg-primary/95 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all text-center flex items-center justify-center gap-2 group animate-pulse-glow"
            >
              <span>Donate Now</span>
              <Heart className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#campaigns"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("campaigns");
                if (target) {
                  const navbarHeight = 80;
                  window.scrollTo({
                    top: target.offsetTop - navbarHeight,
                    behavior: "smooth"
                  });
                }
              }}
              className="px-8 py-3.5 rounded-2xl font-semibold border border-border bg-card/50 hover:bg-muted text-foreground transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Explore Campaigns</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </a>
          </motion.div>
        </div>

        {/* Right column - Graphics and Interactive Cards */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Main Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card/40 z-10 group"
          >
            <Image
              src="/hero_spirituality.png"
              alt="Spiritual Connection and Community Hope"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Card 1: Lives Impacted */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 50 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: 0.4, duration: 0.6 },
              x: { delay: 0.4, duration: 0.6 },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute left-[-20px] top-[15%] z-20 glass-card p-4 rounded-2xl flex items-center gap-3 border border-border max-w-[170px]"
          >
            <div className="p-2.5 rounded-xl bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Impacted</p>
              <h4 className="font-serif text-lg font-bold leading-tight">50K+ Lives</h4>
            </div>
          </motion.div>

          {/* Floating Card 2: Volunteers */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: [0, 8, 0],
            }}
            transition={{
              opacity: { delay: 0.5, duration: 0.6 },
              x: { delay: 0.5, duration: 0.6 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-[-15px] bottom-[25%] z-20 glass-card p-4 rounded-2xl flex items-center gap-3 border border-border max-w-[170px]"
          >
            <div className="p-2.5 rounded-xl bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Volunteers</p>
              <h4 className="font-serif text-lg font-bold leading-tight">500+ Active</h4>
            </div>
          </motion.div>

          {/* Floating Card 3: Raised */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: [0, -6, 0] 
            }}
            transition={{
              opacity: { delay: 0.6, duration: 0.6 },
              y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-[-15px] left-[15%] z-20 glass-card px-5 py-3 rounded-2xl flex items-center gap-3 border border-border"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div className="text-left">
              <p className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">Raised Today</p>
              <h4 className="font-serif text-base font-bold leading-tight">$1,240 Raised</h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
