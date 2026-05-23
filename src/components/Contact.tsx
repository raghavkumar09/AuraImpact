"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, MessageCircle, Share2, Video } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number (10-15 digits).";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message details are required.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-15%] w-[45%] h-[45%] rounded-full bg-saffron-100/15 dark:bg-saffron-900/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-15%] w-[45%] h-[45%] rounded-full bg-gold-100/15 dark:bg-gold-900/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
              Reach Out
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Connect With Our Sanctuary
            </h2>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed">
              Have questions regarding our meditation programs, or want to schedule a group food distribution? Drop us a line. Our sanctuary managers respond within 24 hours.
            </p>

            {/* Info Cards */}
            <div className="flex flex-col gap-6 w-full mb-10">
              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <div className="p-3 rounded-xl bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">Sanctuary Address</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    AuraImpact Sanctuary, 42 Spiritual Path, Sector 4, Bengaluru, Karnataka, 560001
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <div className="p-3 rounded-xl bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">Email Channels</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    connect@auraimpact.org <br />
                    volunteers@auraimpact.org
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <div className="p-3 rounded-xl bg-saffron-100 dark:bg-saffron-900/30 text-saffron-600 dark:text-saffron-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">Call/WhatsApp</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    +91 80 4912 3456 <br />
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif font-bold text-sm text-foreground mb-4">Follow the Light</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: Globe, link: "#", label: "Website" },
                  { icon: MessageCircle, link: "#", label: "Telegram" },
                  { icon: Share2, link: "#", label: "Share" },
                  { icon: Video, link: "#", label: "YouTube" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="p-3 rounded-xl border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 text-muted-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 w-full bg-card border border-border rounded-[2.5rem] p-6 md:p-10 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground/80">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`px-4 py-3 rounded-xl bg-muted/40 border ${
                          errors.name ? "border-red-500" : "border-border"
                        } focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all`}
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-medium">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground/80">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`px-4 py-3 rounded-xl bg-muted/40 border ${
                          errors.email ? "border-red-500" : "border-border"
                        } focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all`}
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-medium">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="phone" className="text-xs font-semibold text-foreground/80">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`px-4 py-3 rounded-xl bg-muted/40 border ${
                        errors.phone ? "border-red-500" : "border-border"
                      } focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 font-medium">{errors.phone}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground/80">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how you would like to join the mission..."
                      className={`px-4 py-3 rounded-xl bg-muted/40 border ${
                        errors.message ? "border-red-500" : "border-border"
                      } focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all resize-none`}
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-medium">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-semibold text-sm text-primary-foreground bg-primary hover:bg-primary/95 shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm mb-8 leading-relaxed">
                    Thank you for connecting with AuraImpact. A sanctuary administrator will reach out to you via email shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl font-semibold text-xs border border-border bg-card hover:bg-muted text-foreground transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
