"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../cart/CartContext";
import { SITE_CONTENT } from "@content/site";
import { VegBadge } from "../common/VegBadge";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Hero: React.FC = () => {
  const { setIsCartOpen, language } = useCart();
  const [tickerIndex, setTickerIndex] = useState(0);

  const isHi = language === "hi";

  // Cycle through "Today's Fresh" ticker items
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % SITE_CONTENT.hero.todaysFreshTicker.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20 md:pt-14 md:pb-24 bg-jali-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Copy, Bilingual Headings & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-accent/40 text-text shadow-sm">
              <VegBadge size="sm" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-primary">
                {isHi ? SITE_CONTENT.hero.hindiBadge : SITE_CONTENT.hero.badge}
              </span>
            </div>

            {/* Bilingual Headline Group - Static for Instant Zero-Render-Delay LCP */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-heading text-[42px] sm:text-5xl lg:text-[72px] xl:text-[80px] text-text font-normal leading-[1.08] sm:leading-[1.08] tracking-tight">
                {isHi ? (
                  <>
                    शुद्ध देसी घी की मिठाई,{" "}
                    <span className="text-primary italic">रोज़ ताज़ा तैयार।</span>
                  </>
                ) : (
                  <>
                    Pure Desi Ghee Mithai,{" "}
                    <span className="text-primary italic">Handcrafted Daily.</span>
                  </>
                )}
              </h1>

              {/* Authentic Devanagari Subtitle Line */}
              <div className="flex items-center gap-2 sm:gap-2.5 pt-0.5">
                <div className="w-6 sm:w-8 h-[2px] bg-accent rounded-full flex-shrink-0" />
                <p className="font-heading text-base sm:text-2xl text-primary font-medium tracking-normal">
                  {SITE_CONTENT.hero.titleHindi}
                </p>
              </div>
            </div>

            {/* Editorial Description - Immediate text rendering */}
            <p className="text-sm sm:text-lg text-text/85 max-w-xl font-normal leading-relaxed">
              {isHi ? SITE_CONTENT.hero.hindiDescription : SITE_CONTENT.hero.description}
            </p>

            {/* "Today's Fresh" Live Micro-Ticker */}
            <div className="bg-surface/80 border border-primary/15 rounded-card p-2.5 sm:p-3 max-w-lg shadow-sm">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex-shrink-0 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-primary text-bg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent" />
                  <span>{isHi ? "ताज़ा" : "Fresh"}</span>
                </span>

                <div className="overflow-hidden relative h-5 sm:h-6 flex-1 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={tickerIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="text-xs sm:text-sm font-semibold text-text truncate"
                    >
                      {SITE_CONTENT.hero.todaysFreshTicker[tickerIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Two Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              {/* Primary WhatsApp CTA */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="bg-primary hover:bg-primary-hover active:scale-[0.98] text-bg font-semibold text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 rounded-btn shadow-elevated flex items-center justify-center gap-2.5 sm:gap-3 touch-target transition-all group"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.551 1.764.88 2.793.88 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.586-5.766-5.767-5.766zm3.385 8.163c-.143.402-.832.748-1.157.797-.323.048-.737.072-2.138-.475-1.791-.699-2.937-2.529-3.027-2.648-.089-.12-1.282-1.705-1.282-3.251 0-1.547.81-2.308 1.096-2.624.287-.315.626-.394.834-.394.209 0 .418.002.6.012.193.011.452-.073.707.538.263.63.896 2.191.974 2.351.079.16.131.348.026.559-.104.21-.157.34-.312.523-.157.184-.33.41-.471.55-.157.157-.32.327-.138.641.183.313.812 1.342 1.745 2.173 1.201 1.07 2.213 1.401 2.527 1.558.314.157.498.131.681-.079.184-.21.785-.916.994-1.23.21-.314.419-.263.707-.157.288.105 1.831.864 2.145 1.021.314.157.523.236.6.367.078.131.078.761-.065 1.163z" />
                </svg>
                <span>{isHi ? SITE_CONTENT.hero.hindiPrimaryCta : SITE_CONTENT.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Catalog CTA */}
              <a
                href="#catalog"
                className="inline-flex items-center justify-center bg-surface hover:bg-surface-saffron border border-primary/25 text-primary font-semibold text-sm sm:text-base py-3 sm:py-3.5 px-6 sm:px-7 rounded-btn transition-colors touch-target"
              >
                <span>{isHi ? SITE_CONTENT.hero.hindiSecondaryCta : SITE_CONTENT.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-text/80">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-green-veg" />
                {SITE_CONTENT.store.rating.label}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {isHi ? "कानपुर में त्वरित डिलीवरी" : "Same-day Kanpur Express Delivery"}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual in Arch / Jali Mask with Brass Stamp (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* The Main Arch-Masked Visual Composition */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] arch-mask bg-gradient-to-b from-surface via-[#FCE3BA] to-surface border-4 border-accent/40 shadow-elevated p-2.5 sm:p-3 overflow-hidden">
              {/* Subtle Decorative Jali Overlay within Arch */}
              <div className="absolute inset-0 bg-jali-pattern opacity-10 pointer-events-none" />

              {/* Artisanal Heritage Centerpiece Composition */}
              <div className="w-full h-full arch-mask relative overflow-hidden flex flex-col justify-end p-4 sm:p-6 border border-primary/10">
                {/* Real Copyright-Free Sweets Thali Photo */}
                <img
                  src="/images/hero/hero-thali.webp"
                  alt="Authentic Pure Desi Ghee Indian Sweets Thali"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover arch-mask"
                />
                {/* Soft Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="relative z-10 bg-bg/95 backdrop-blur-sm border border-primary/20 rounded-xl p-2.5 sm:p-3.5 shadow-sm space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-primary font-bold text-xs sm:text-sm">
                      {isHi ? "शाही थाल भेंट" : "Royal Shahi Thal"}
                    </span>
                    <VegBadge size="sm" showLabel />
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-text/80 line-clamp-1">
                    {isHi
                      ? "काजू कतली, केसरिया मोतीचूर और ताज़ा पिस्ता"
                      : "Goan Kaju Katli, Kesariya Motichoor & Pistachios"}
                  </p>
                </div>
              </div>

              {/* Authentic "Since 1985" Circular Brass Heritage Stamp */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-accent to-[#C98708] border-2 border-bg shadow-elevated flex flex-col items-center justify-center text-text p-1.5 select-none transform rotate-12 z-20">
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold text-primary">
                  KANPUR
                </span>
                <span className="font-heading text-sm sm:text-base font-bold leading-tight text-primary">
                  1985
                </span>
                <span className="text-[7px] sm:text-[8px] uppercase tracking-wider font-semibold text-text/90">
                  SHUDDH GHEE
                </span>
              </div>

              {/* Floating Quality Guarantee Pill */}
              <div className="absolute bottom-2 left-4 sm:bottom-3 sm:left-5 bg-primary text-bg text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-elevated border border-accent/40 flex items-center gap-1.5 sm:gap-2 z-20">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-ping" />
                <span>{isHi ? "दुकान से सीधे डिलीवरी" : "Direct From Shop Delivery"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
