"use client";

import { motion } from "framer-motion";
import { Utensils, BookOpen, HeartPulse, Flower2, Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CAMPAIGNS = [
  {
    icon: Utensils,
    title: "Nourishing Hearts",
    tagline: "Food Distribution",
    description: "Distributing freshly cooked, nutritionally balanced warm meals to displaced families and municipal shelters daily.",
    raised: 35450,
    goal: 50000,
    iconBg: "bg-saffron-100 dark:bg-saffron-900/30 text-saffron-500",
    glowColor: "group-hover:shadow-saffron-500/10",
  },
  {
    icon: BookOpen,
    title: "Enlightened Minds",
    tagline: "Education Support",
    description: "Sponsoring local school supplies, digital learning tablets, and after-school spiritual mentorship programs.",
    raised: 18200,
    goal: 25000,
    iconBg: "bg-gold-100 dark:bg-gold-900/30 text-gold-500",
    glowColor: "group-hover:shadow-gold-500/10",
  },
  {
    icon: HeartPulse,
    title: "Healing Presence",
    tagline: "Medical Assistance",
    description: "Providing local health screenings, essential prescriptions, and medical coverage for low-income citizens.",
    raised: 42100,
    goal: 60000,
    iconBg: "bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400",
    glowColor: "group-hover:shadow-saffron-600/10",
  },
  {
    icon: Flower2,
    title: "Inner Sanctuary",
    tagline: "Meditation & Wellness",
    description: "Offering community meditation classes, mental resilience counseling, and daily spiritual discourse circles.",
    raised: 9800,
    goal: 15000,
    iconBg: "bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400",
    glowColor: "group-hover:shadow-gold-600/10",
  },
];

export default function Campaigns() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="campaigns" className="py-24 relative overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[40%] rounded-full bg-saffron-200/10 dark:bg-saffron-900/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-15%] w-[40%] h-[40%] rounded-full bg-gold-200/10 dark:bg-gold-900/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3 inline-block">
            Active Endeavors
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Campaigns Worth Supporting
          </h2>
          <p className="text-base text-muted-foreground">
            Explore our continuous initiatives. Your contributions fund immediate physical relief and local spiritual counseling directly.
          </p>
        </div>

        {/* Campaign Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {CAMPAIGNS.map((camp, idx) => {
            const percentage = Math.min(100, Math.round((camp.raised / camp.goal) * 100));

            return (
              <motion.div
                variants={cardVariants}
                key={idx}
                className={cn(
                  "group relative p-6 rounded-[2rem] bg-card border border-border shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:shadow-xl hover:border-primary/20",
                  camp.glowColor
                )}
              >
                <div>
                  {/* Campaign Tag */}
                  <span className="text-[10px] font-bold text-primary/80 uppercase tracking-widest block mb-4">
                    {camp.tagline}
                  </span>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={cn("p-3 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm", camp.iconBg)}>
                      <camp.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {camp.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {camp.description}
                  </p>
                </div>

                <div>
                  {/* Progress Indicator */}
                  <div className="mb-5">
                    <div className="flex justify-between items-end text-xs font-semibold mb-2">
                      <span className="text-foreground/80">Progress</span>
                      <span className="text-primary font-bold">{percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted dark:bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" as const, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-saffron-500 to-gold-400 rounded-full"
                      />
                    </div>
                    
                    {/* Amounts */}
                    <div className="flex justify-between items-center mt-3 text-xs font-medium text-muted-foreground">
                      <span>Raised: <strong className="text-foreground">${camp.raised.toLocaleString()}</strong></span>
                      <span>Goal: <strong>${camp.goal.toLocaleString()}</strong></span>
                    </div>
                  </div>

                  {/* Donate Card Button */}
                  <button
                    onClick={() => {
                      const target = document.getElementById("contact");
                      if (target) {
                        const navbarHeight = 80;
                        window.scrollTo({
                          top: target.offsetTop - navbarHeight,
                          behavior: "smooth"
                        });
                      }
                    }}
                    className="w-full py-3 rounded-xl font-semibold text-xs border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary text-foreground transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Support Campaign</span>
                    <Heart className="w-3.5 h-3.5 fill-transparent group-hover/btn:fill-current group-hover/btn:scale-110 transition-all duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Action Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center items-center gap-2 text-sm text-muted-foreground"
        >
          <span>Looking to establish a custom campaign?</span>
          <a
            href="#contact"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-0.5"
            onClick={(e) => {
              e.preventDefault();
              const contact = document.getElementById("contact");
              if (contact) {
                window.scrollTo({
                  top: contact.offsetTop - 80,
                  behavior: "smooth"
                });
              }
            }}
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
