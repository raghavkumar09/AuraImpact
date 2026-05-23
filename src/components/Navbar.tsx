"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Mission", href: "#mission" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when the section occupies a substantial portion of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navbarHeight = 80;
      const targetPosition = targetEl.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="p-2 rounded-xl bg-gradient-to-tr from-saffron-500 to-gold-400 text-white shadow-md shadow-saffron-500/20 group-hover:scale-105 transition-transform duration-300">
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <span className="font-serif font-bold text-xl md:text-2xl tracking-wide bg-gradient-to-r from-saffron-600 to-gold-500 dark:from-saffron-400 dark:to-gold-400 bg-clip-text text-transparent">
            AuraImpact
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-colors duration-200 py-1.5",
                  isActive
                    ? "text-primary"
                    : "text-foreground/75 hover:text-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Section CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-foreground/80 hover:text-foreground transition-all duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          {/* CTA */}
          <a
            href="#campaigns"
            onClick={(e) => handleScrollTo(e, "#campaigns")}
            className="px-6 py-2.5 rounded-xl font-medium text-sm text-primary-foreground bg-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/95 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Join Mission
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border bg-card text-foreground/80 hover:text-foreground"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-border bg-card text-foreground"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={cn(
                      "text-base font-medium py-1 transition-colors duration-200",
                      isActive ? "text-primary border-l-2 border-primary pl-3" : "text-foreground/75 pl-3 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                href="#campaigns"
                onClick={(e) => handleScrollTo(e, "#campaigns")}
                className="mt-2 w-full text-center py-3 rounded-xl font-medium text-primary-foreground bg-primary hover:bg-primary/95 transition-all shadow-md shadow-primary/10"
              >
                Join Mission
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
