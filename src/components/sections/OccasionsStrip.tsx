"use client";

import React from "react";
import { SITE_CONTENT, Occasion } from "@content/site";
import { useCart } from "../cart/CartContext";
import { Sparkles } from "lucide-react";

interface OccasionsStripProps {
  selectedOccasion: string;
  onSelectOccasion: (id: string) => void;
}

export const OccasionsStrip: React.FC<OccasionsStripProps> = ({
  selectedOccasion,
  onSelectOccasion,
}) => {
  const { language } = useCart();
  const isHi = language === "hi";

  return (
    <section className="py-8 sm:py-10 bg-surface/40 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>{isHi ? "त्योहार व आयोजन" : "Curated By Occasion"}</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl text-text font-normal tracking-tight">
              {isHi ? "हर शुभ अवसर के लिए पारंपरिक स्वाद" : "Authentic Flavors for Every Occasion"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text/70 max-w-md">
            {isHi
              ? "दीपावली, शादी के शगुन, रक्षाबंधन या दैनिक चाय नाश्ते के लिए विशेष चयन।"
              : "Select an occasion to filter Kanpur's freshest handcrafted sweets and tea-time namkeen."}
          </p>
        </div>

        {/* Horizontal Scrollable Large Selectable Chips */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-2 scrollbar-none select-none">
          {SITE_CONTENT.occasions.map((occasion: Occasion) => {
            const isSelected = selectedOccasion === occasion.id;
            return (
              <button
                key={occasion.id}
                onClick={() => onSelectOccasion(occasion.id)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2.5 sm:py-3 rounded-btn border text-xs sm:text-sm font-semibold transition-all touch-target flex items-center gap-2 ${
                  isSelected
                    ? "bg-primary text-bg border-primary shadow-subtle scale-[1.02]"
                    : "bg-bg text-text/80 border-primary/20 hover:border-primary/50 hover:bg-surface"
                }`}
                aria-pressed={isSelected}
              >
                <span>{isHi ? occasion.hindiLabel : occasion.label}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
