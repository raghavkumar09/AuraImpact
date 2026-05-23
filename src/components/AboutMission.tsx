"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Compass, Eye, Sparkles, Smile } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every act of service is rooted in unconditional warmth, empathy, and deep respect for individual dignity.",
    color: "from-saffron-500/20 to-saffron-600/10",
    iconColor: "text-saffron-500",
  },
  {
    icon: Compass,
    title: "Mindful Action",
    description: "We blend ancient spiritual wisdom with modern social impact, ensuring our support is intentional and sustainable.",
    color: "from-gold-500/20 to-gold-600/10",
    iconColor: "text-gold-500",
  },
  {
    icon: Smile,
    title: "Joyous Community",
    description: "Building bridges of trust, shared responsibility, and celebrating the power of collective hope.",
    color: "from-saffron-500/20 to-gold-500/10",
    iconColor: "text-saffron-600 dark:text-saffron-400",
  },
];

export default function AboutMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-200/10 dark:bg-gold-900/5 blur-[90px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-saffron-200/10 dark:bg-saffron-900/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Background decorative pattern */}
            <div className="absolute inset-0 border-2 border-dashed border-saffron-200/40 dark:border-saffron-900/20 rounded-[2.5rem] transform rotate-3 scale-105 z-0" />
            
            {/* Main Collage Frame */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-border bg-card z-10">
              <Image
                src="/mission_community.png"
                alt="Community volunteers sharing meals"
                fill
                className="object-cover"
              />
              {/* Glass overlay tag */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/20">
                <p className="text-xs font-semibold text-saffron-600 dark:text-saffron-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  Our Core Calling
                </p>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  &ldquo;Uplifting humanity begins with single acts of deliberate love.&rdquo;
                </p>
              </div>
            </div>

            {/* Micro Floating Vision Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" as const }}
              className="absolute top-10 right-[-20px] z-20 glass-card p-4 rounded-2xl border border-border shadow-lg flex flex-col gap-2 max-w-[150px]"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-500 text-white flex items-center justify-center">
                <Eye className="w-4 h-4" />
              </div>
              <h5 className="font-serif font-bold text-sm">Our Vision</h5>
              <p className="text-[11px] text-muted-foreground leading-snug">
                A world where physical relief and spiritual growth walk hand-in-hand.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Text & Values Grid */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Section Tag */}
            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
              About Our Sanctuary
            </span>
            
            {/* Title */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Igniting Compassion, Uplifting Communities
            </h2>
            
            {/* Sub-text */}
            <p className="text-base text-muted-foreground mb-10 leading-relaxed text-balance">
              We operate at the intersection of spiritual mindfulness and active humanitarian support. While our spiritual practices center on grounding, inner peace, and hope, our external initiatives supply nutritious meals, education support, healthcare assistance, and community building blocks. We believe true impact addresses both the physical hunger and the spiritual thirst of our global family.
            </p>

            {/* Values Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            >
              {VALUES.map((val, idx) => (
                <motion.div
                  variants={itemVariants}
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col items-start text-left transition-shadow duration-300 hover:shadow-md"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${val.color} ${val.iconColor} mb-4`}>
                    <val.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-foreground mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
