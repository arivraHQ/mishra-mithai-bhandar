"use client";

import React from "react";
import { SITE_CONTENT } from "@content/site";
import { useCart } from "../cart/CartContext";
import { History, Flame, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

export const OurStory: React.FC = () => {
  const { language } = useCart();
  const isHi = language === "hi";

  const { ourStory } = SITE_CONTENT;

  return (
    <section id="our-story" className="py-16 sm:py-24 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
            <History className="w-4 h-4 text-accent" />
            <span>{isHi ? "हमारी विरासत" : "Heritage & Craft"}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight">
            {isHi ? ourStory.hindiTitle : ourStory.title}
          </h2>
          <p className="font-heading text-lg sm:text-xl text-primary font-medium">
            {isHi ? "तीन पीढ़ियों का स्वाद, वही शुद्धता" : "Est. 1985 • Phool Bagh, Kanpur"}
          </p>
        </div>

        {/* Editorial Layout: Large Text + Pull Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Narrative Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-text/80 text-base sm:text-lg leading-relaxed font-normal">
            {ourStory.paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "first-letter:text-5xl first-letter:font-heading first-letter:text-primary first-letter:mr-2 first-letter:float-left" : ""}>
                {para}
              </p>
            ))}

            {/* Milestones Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-primary/10">
              {ourStory.milestones.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-heading text-xl sm:text-2xl text-primary font-bold block">
                    {m.year}
                  </span>
                  <span className="font-semibold text-xs text-text block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-text/60 block leading-tight">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Pull Quote Block in Saffron Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface/70 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-subtle relative">
              <span className="font-heading text-6xl text-primary/20 absolute top-2 left-4 select-none pointer-events-none">
                “
              </span>
              <blockquote className="relative z-10 font-heading text-lg sm:text-xl text-text leading-relaxed italic mb-4">
                {ourStory.pullQuote}
              </blockquote>
              <div className="flex items-center gap-3 pt-3 border-t border-primary/15">
                <div className="w-10 h-10 rounded-full bg-primary text-bg font-heading text-base font-bold flex items-center justify-center flex-shrink-0">
                  र
                </div>
                <div>
                  <cite className="font-semibold text-xs sm:text-sm text-primary not-italic block">
                    {ourStory.pullQuoteAuthor}
                  </cite>
                  <span className="text-[11px] text-text/60">
                    Phool Bagh, Kanpur (1985)
                  </span>
                </div>
              </div>
            </div>

            {/* Daily Routine Purity Guarantee */}
            <div className="bg-bg border border-primary/15 rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-accent" />
              </div>
              <p className="text-xs text-text/80 leading-snug">
                <strong className="text-primary font-bold">4:30 AM Daily Simmer:</strong> Fresh cow milk reduced in seasoned iron karahis without industrial condensed powders.
              </p>
            </div>
          </div>
        </div>

        {/* Small Process Photo Row */}
        <div className="mt-14 pt-10 border-t border-primary/10">
          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-accent" />
            <span>{isHi ? "दैनिक कारीगरी के दृश्य" : "Our Daily Morning Craft Process"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ourStory.photos.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface/50 border border-primary/15 rounded-xl overflow-hidden shadow-sm flex flex-col hover:border-primary/30 transition-colors"
              >
                {/* Visual Craft Container with Authentic Photo */}
                <div className="aspect-[16/10] bg-[#EAD8B5] relative overflow-hidden border-b border-primary/10">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-bg/80 border border-primary/20 flex items-center justify-center text-primary font-heading text-lg font-bold">
                        {idx + 1}
                      </div>
                    </div>
                  )}
                  <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-bg/90 border border-primary/20 flex items-center justify-center text-primary font-heading text-xs font-bold shadow-sm">
                    {idx + 1}
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] bg-bg/90 backdrop-blur-sm px-2 py-0.5 rounded font-mono text-text/80 shadow-sm">
                    4:30 AM - 7:00 AM
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <p className="text-xs sm:text-sm font-medium text-text">
                    {isHi && (item as any).hindiCaption ? (item as any).hindiCaption : item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
