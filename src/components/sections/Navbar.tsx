"use client";

import React, { useState } from "react";
import { useCart } from "../cart/CartContext";
import { SITE_CONTENT } from "@content/site";
import { ShoppingBag, Menu, X, Phone, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsCartOpen, cartBump, language, toggleLanguage } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHi = language === "hi";

  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur-md border-b border-primary/10 transition-all">
      {/* Top Heritage Micro-Bar */}
      <div className="bg-primary text-bg text-[10px] sm:text-xs py-1 px-3 sm:px-4 tracking-wide font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-accent" />
              <span>{isHi ? "सुबह ७:३० - रात १०:३०" : "7:30 AM – 10:30 PM"}</span>
            </span>
            <span className="hidden sm:inline text-bg/40">•</span>
            <span className="hidden md:inline text-accent font-semibold">
              {isHi ? "शुद्ध देसी घी की गारंटी" : "100% Pure Desi Ghee"}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${SITE_CONTENT.store.phoneTel}`}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent" />
              <span className="text-[10px] sm:text-xs">{SITE_CONTENT.store.phoneDisplay}</span>
            </a>
            <span className="text-bg/40">|</span>
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-0.5 rounded-full bg-bg/20 hover:bg-bg/30 text-bg font-semibold text-[10px] tracking-wider transition-colors"
              aria-label="Toggle language between English and Hindi"
            >
              {language === "en" ? "हिन्दी" : "English"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          {/* Traditional Brass / Kumkum Emblemed Monogram */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover border-2 border-accent/40 flex items-center justify-center text-bg shadow-sm flex-shrink-0">
            <span className="font-heading text-lg sm:text-xl text-accent font-bold">म</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-2xl text-primary font-bold tracking-tight leading-tight group-hover:text-primary-hover transition-colors whitespace-nowrap">
              {isHi ? SITE_CONTENT.store.hindiName : "Mishra Mithai"}
              <span className="hidden sm:inline"> Bhandar</span>
            </span>
            <span className="text-[9px] sm:text-[11px] font-medium text-text/75 uppercase tracking-wider">
              {isHi ? "कानपुर • १९८५ से" : "Kanpur • Est. 1985"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {SITE_CONTENT.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-text/85 hover:text-primary transition-colors tracking-wide relative group py-1"
            >
              <span>{isHi ? link.hindiLabel : link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls: Cart Trigger & WhatsApp CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart Icon with Live Count & Micro-Bounce */}
          <motion.button
            onClick={() => setIsCartOpen(true)}
            animate={cartBump ? { scale: [1, 1.25, 0.95, 1.05, 1] } : { scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-2 sm:p-2.5 rounded-full bg-surface border border-primary/20 text-primary hover:bg-surface-saffron transition-all touch-target shadow-sm flex items-center justify-center"
            aria-label="View sweet cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-bg text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-bg shadow-sm">
                {totalItemsCount}
              </span>
            )}
          </motion.button>

          {/* Desktop WhatsApp Quick CTA (Strictly hidden on mobile, md:inline-flex on desktop) */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-bg font-semibold text-sm px-5 py-2.5 rounded-btn shadow-subtle hover:shadow-elevated transition-all touch-target"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.551 1.764.88 2.793.88 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.586-5.766-5.767-5.766zm3.385 8.163c-.143.402-.832.748-1.157.797-.323.048-.737.072-2.138-.475-1.791-.699-2.937-2.529-3.027-2.648-.089-.12-1.282-1.705-1.282-3.251 0-1.547.81-2.308 1.096-2.624.287-.315.626-.394.834-.394.209 0 .418.002.6.012.193.011.452-.073.707.538.263.63.896 2.191.974 2.351.079.16.131.348.026.559-.104.21-.157.34-.312.523-.157.184-.33.41-.471.55-.157.157-.32.327-.138.641.183.313.812 1.342 1.745 2.173 1.201 1.07 2.213 1.401 2.527 1.558.314.157.498.131.681-.079.184-.21.785-.916.994-1.23.21-.314.419-.263.707-.157.288.105 1.831.864 2.145 1.021.314.157.523.236.6.367.078.131.078.761-.065 1.163z" />
            </svg>
            <span>{isHi ? SITE_CONTENT.nav.hindiCtaWhatsApp : SITE_CONTENT.nav.ctaWhatsApp}</span>
          </button>

          {/* Mobile Navigation Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-text hover:bg-surface transition-colors touch-target flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-primary/10 bg-bg px-6 py-5 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-2">
              {SITE_CONTENT.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-text py-2.5 border-b border-primary/5 hover:text-primary transition-colors flex items-center justify-between"
                >
                  <span>{isHi ? link.hindiLabel : link.label}</span>
                  <span className="text-xs text-primary/60 font-serif">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full bg-primary text-bg font-semibold py-3 px-4 rounded-btn shadow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isHi ? "मिठाई की थाली खोलें" : "Open Sweet Box"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
