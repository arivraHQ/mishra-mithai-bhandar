"use client";

import React from "react";
import Image from "next/image";
import { SITE_CONTENT } from "@content/site";
import { useCart } from "../cart/CartContext";
import { VegBadge } from "../common/VegBadge";
import { ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const { language } = useCart();
  const isHi = language === "hi";

  const { footer, store } = SITE_CONTENT;

  return (
    <footer className="bg-primary text-bg pt-16 pb-24 md:pb-16 border-t-4 border-accent relative overflow-hidden">
      {/* Subtle Background Rangoli Embellishment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Editorial Headline */}
        <div className="border-b border-bg/15 pb-12 mb-12">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-bg">
              {isHi ? footer.hindiHeroLine : footer.heroLine}
            </h2>
            <p className="font-heading text-xl sm:text-2xl text-accent font-medium">
              {isHi ? "१९८५ से कानपुर की शान और पहचान।" : footer.subLine}
            </p>
          </div>
        </div>

        {/* 4-Column Footer Navigation & Heritage NAP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-bg/15">
          {/* Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/60 shrink-0 bg-[#8C1C13]">
                <Image
                  src="/images/mishra-emblem.png"
                  alt="Mishra Mithai Bhandar emblem"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-xl text-bg font-bold block">
                  {store.name}
                </span>
                <span className="text-xs text-accent uppercase tracking-wider block">
                  {store.establishedText}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-bg/80 leading-relaxed max-w-sm">
              {isHi
                ? "शुद्ध देसी घी, गंगा बेसिन के ताज़ा दूध और तीन पीढ़ियों के विश्वास से बनी पारंपरिक मिठाई।"
                : "Handcrafted in Kanpur using pure desi ghee and fresh farm milk. Order your festive sweets directly on WhatsApp."}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <VegBadge size="md" />
              <span className="text-xs font-semibold text-accent tracking-wide">
                100% Pure Vegetarian (शुद्ध शाकाहारी)
              </span>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block">
              {isHi ? "त्वरित लिंक" : "Explore Shop"}
            </span>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-bg/85 hover:text-accent transition-colors block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block">
              {isHi ? "दुकान व संपर्क" : "Timings & Order"}
            </span>
            <div className="text-xs sm:text-sm text-bg/85 space-y-2 leading-relaxed">
              <p>
                <strong>{isHi ? "दुकान का समय:" : "Daily Timings:"}</strong><br />
                {store.hours.display}
              </p>
              <p>
                <strong>{isHi ? "व्हाट्सएप आर्डर:" : "WhatsApp Orders:"}</strong><br />
                {store.phoneDisplay}
              </p>
              <p className="text-bg/70 text-xs">
                {store.address.line1}, {store.address.line2}, Kanpur
              </p>
            </div>
          </div>

          {/* FSSAI & Quality Certification (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block">
              {isHi ? "प्रमाणपत्र" : "Food Standards"}
            </span>
            <div className="bg-bg/10 rounded-xl p-3 border border-bg/15 space-y-2">
              <div className="flex items-center gap-1.5 text-accent text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>FSSAI Certified</span>
              </div>
              <p className="text-[11px] text-bg/75 leading-tight font-mono">
                {store.fssaiLicense}
              </p>
              <span className="text-[10px] text-bg/60 block leading-tight">
                Pure Cow Ghee & Food Safety Standard Verified
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-bg/70">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="text-accent flex items-center gap-1 font-medium">
              Made for Kanpur <Heart className="w-3 h-3 fill-accent" />
            </span>
          </div>
        </div>

        {/* Portfolio & Showcase Disclaimer + Arivra Design Labs Attribution */}
        <div className="mt-8 pt-6 border-t border-bg/15 text-center space-y-3">
          <p className="text-[11px] text-bg/75 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-accent">Notice &amp; Disclaimer:</strong> This website is an interactive concept application engineered solely for portfolio demonstration and showcase purposes. Mishra Mithai Bhandar is a fictional entity. All contact details, telephone numbers, FSSAI license identifiers, and customer reviews are simulated dummy data. Please do not contact these numbers for real sweet orders or bulk catering bookings.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-bg/10 border border-accent/35 text-xs text-bg">
            <span className="font-semibold tracking-wider uppercase text-[10px] text-accent">
              ARIVRA Demo
            </span>
            <span className="text-bg/40">•</span>
            <span className="text-bg/85">
              A product by{" "}
              <a
                href="https://arivra.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-bg hover:text-accent underline underline-offset-4 transition-colors"
              >
                Arivra Design Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
