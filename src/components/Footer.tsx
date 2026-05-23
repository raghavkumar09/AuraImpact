"use client";

import React, { useState } from "react";
import { Heart, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="border-t border-border bg-card/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-saffron-100/10 dark:bg-saffron-900/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-border">
          
          {/* Column 1 - Brand & Quote */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="#home" className="flex items-center gap-2 group mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-tr from-saffron-500 to-gold-400 text-white shadow-md">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <span className="font-serif font-bold text-xl tracking-wide bg-gradient-to-r from-saffron-600 to-gold-500 dark:from-saffron-400 dark:to-gold-400 bg-clip-text text-transparent">
                AuraImpact
              </span>
            </a>
            <p className="text-sm font-medium text-foreground/80 leading-relaxed italic mb-4 max-w-sm">
              &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
            </p>
            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block">
              — Mahatma Gandhi
            </span>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-serif font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", id: "home" },
                { label: "Mission", id: "mission" },
                { label: "Campaigns", id: "campaigns" },
                { label: "Impact", id: "impact" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact Reminders */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Sanctuary
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">
              AuraImpact Sanctuary <br />
              42 Spiritual Path, Bengaluru, India
            </p>
            <p className="text-xs text-muted-foreground mb-1 font-semibold">
              connect@auraimpact.org
            </p>
            <p className="text-xs text-muted-foreground font-semibold">
              +91 80 4912 3456
            </p>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-serif font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Receive uplifting stories, campaign progress updates, and mindful insights.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-sm">
              <div className="flex-1 flex flex-col relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter email"
                  className={cn(
                    "w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all",
                    subscribed && "bg-emerald-500/10 dark:bg-emerald-950/20 border-emerald-500"
                  )}
                  disabled={subscribed}
                />
                {error && <span className="text-[10px] text-red-500 mt-1 absolute bottom-[-16px]">{error}</span>}
              </div>
              <button
                type="submit"
                className={cn(
                  "p-2 rounded-xl text-primary-foreground bg-primary hover:bg-primary/95 transition-all shrink-0",
                  subscribed && "bg-emerald-500 hover:bg-emerald-500"
                )}
                disabled={subscribed}
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-emerald-500 font-medium mt-2">
                Subscribed successfully!
              </span>
            )}
          </div>

        </div>

        {/* Footer Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">
          <span>
            © {new Date().getFullYear()} AuraImpact. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
