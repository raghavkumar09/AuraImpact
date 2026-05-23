"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Utensils, Smile, Users, MapPin, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Lightweight, custom animated counter
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2.5; // duration in seconds
      const totalSteps = 60;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = Math.ceil(end / totalSteps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const STATS = [
  {
    icon: Utensils,
    value: 50000,
    suffix: "+",
    label: "Meals Served",
    description: "Prepared and distributed to communities and shelters facing extreme hunger.",
    color: "from-saffron-500/20 to-saffron-600/10 text-saffron-600 dark:text-saffron-400",
  },
  {
    icon: Smile,
    value: 10000,
    suffix: "+",
    label: "Families Assisted",
    description: "Provided with education aids, clothing, basic medical, and shelter assistance.",
    color: "from-gold-500/20 to-gold-600/10 text-gold-500",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Active Volunteers",
    description: "Dedicated individuals executing daily distributions and local wellness circles.",
    color: "from-saffron-500/20 to-gold-500/10 text-saffron-600 dark:text-saffron-400",
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "+",
    label: "Cities Supported",
    description: "Stretching our network of partner shelters and digital hubs across multiple regions.",
    color: "from-gold-500/20 to-saffron-500/10 text-gold-600 dark:text-gold-400",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-muted/40">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-saffron-200/10 dark:bg-saffron-900/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-gold-200/10 dark:bg-gold-900/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left - Heading & Text */}
          <div className="lg:col-span-4 text-left flex flex-col items-start">
            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3 inline-block">
              Quantifiable Hope
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              The Footprint of Our Shared Devotion
            </h2>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed text-balance">
              Transparency builds trust. Every coin donated and every hour volunteered translates directly into local nourishment, youth empowerment, and emotional wellness programs that are tracked and audited.
            </p>
            <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-card border border-border">
              <div className="p-2.5 rounded-xl bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-xs font-semibold text-foreground/80 leading-relaxed text-left">
                Every statistic here represents a real human life, restored with care.
              </p>
            </div>
          </div>

          {/* Right - Dashboard Stats Grid */}
          <div className="lg:col-span-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {STATS.map((stat, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  key={idx}
                  className="p-6 rounded-[2.5rem] bg-card border border-border shadow-sm flex flex-col justify-between text-left transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      {/* Counter */}
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      <h4 className="font-sans font-bold text-base text-foreground mt-2">
                        {stat.label}
                      </h4>
                    </div>
                    {/* Icon */}
                    <div className={cn("p-3 rounded-2xl bg-gradient-to-br", stat.color)}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-full h-px bg-border mb-4" />
                  
                  {/* Description */}
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
