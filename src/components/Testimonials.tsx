"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Shreya Iyer",
    role: "Active Volunteer, Bengaluru",
    text: "Serving with AuraImpact transformed my perspective on community work. The transparency, care, and mindfulness behind every single food distribution drive are truly refreshing.",
    rating: 5,
    initials: "SI",
    color: "from-saffron-500 to-saffron-600 text-white",
  },
  {
    name: "Aarav Mehta",
    role: "Key Donor, Mumbai",
    text: "I love the detailed campaign structures. I know exactly where my donation goes, and receiving visual progress updates makes me feel deeply connected to the souls we are helping.",
    rating: 5,
    initials: "AM",
    color: "from-gold-400 to-gold-600 text-white",
  },
  {
    name: "Meera Nair",
    role: "Community Leader, Delhi",
    text: "The integration of mental wellness circles with hot meals is a blessing. AuraImpact doesn't just feed the body; they soothe and heal the spirit of our local neighborhood.",
    rating: 5,
    initials: "MN",
    color: "from-saffron-600 to-gold-400 text-white",
  },
  {
    name: "Rohan Malhotra",
    role: "Supporter, New York",
    text: "This is the most modern, dignified, and well-executed social impact platform I've ever supported. Their respect for people is evident in every campaign detail.",
    rating: 5,
    initials: "RM",
    color: "from-gold-500 to-saffron-500 text-white",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(handleNext, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const active = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-saffron-100/10 dark:bg-saffron-900/5 blur-[100px]" />
        <div className="absolute bottom-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-gold-100/10 dark:bg-gold-900/5 blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3 inline-block">
            Voices of Aura
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What Our Community Shares
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative min-h-[350px] sm:min-h-[280px] flex items-center justify-center"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-md relative text-left flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center"
            >
              {/* Quote Icon Overlay */}
              <Quote className="absolute right-8 top-8 w-12 h-12 text-primary/5 pointer-events-none" />

              {/* Initials Avatar */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${active.color} flex items-center justify-center text-xl font-bold tracking-wider shrink-0 shadow-md`}>
                {active.initials}
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed italic mb-6">
                  &ldquo;{active.text}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div>
                  <h4 className="font-serif font-bold text-base text-foreground">
                    {active.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {active.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex items-center justify-between mt-8">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > index ? 1 : -1);
                  setIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
