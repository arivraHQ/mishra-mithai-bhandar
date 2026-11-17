"use client";

import React from "react";
import { SITE_CONTENT, Review } from "@content/site";
import { useCart } from "../cart/CartContext";
import { Star, MapPin, CheckCircle } from "lucide-react";

export const Reviews: React.FC = () => {
  const { language } = useCart();
  const isHi = language === "hi";

  const { reviews, store } = SITE_CONTENT;

  return (
    <section className="py-16 sm:py-24 bg-bg border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {isHi ? "कानपुर का भरोसा" : "Local Kanpur Voices"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight">
              {isHi ? "ग्राहकों का सच्चा अनुभव" : "Trusted by Kanpur Since 1985"}
            </h2>
            <p className="font-heading text-base sm:text-xl text-primary font-medium">
              {isHi ? "चार दशक का स्वाद और विश्वास" : "Four decades of uncompromised taste and purity"}
            </p>
          </div>

          {/* Google Reviews Trust Line */}
          <div className="bg-surface/80 border border-primary/15 rounded-xl px-5 py-3 flex items-center gap-4 shadow-sm">
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent" />
              ))}
            </div>
            <div>
              <span className="font-heading text-lg font-bold text-text block leading-tight">
                {store.rating.score} / 5.0
              </span>
              <span className="text-[11px] text-text/70 block">
                {store.rating.reviewsCount} Google Reviews (Kanpur)
              </span>
            </div>
          </div>
        </div>

        {/* 4 Authentic Local Customer Reviews (Asymmetric Card Layout, not 3 equal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev: Review, idx: number) => (
            <div
              key={rev.id}
              className={`bg-surface/50 border border-primary/15 rounded-card p-6 sm:p-7 flex flex-col justify-between hover:shadow-subtle hover:border-primary/30 transition-all ${
                idx === 0 ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="space-y-4">
                {/* Rating Stars & Relative Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-accent">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent" />
                    ))}
                  </div>
                  <span className="text-xs text-text/50 font-mono">
                    {rev.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-text/85 leading-relaxed font-normal italic">
                  “{rev.comment}”
                </p>

                {/* Hindi Quote Tagline */}
                <div className="pt-2 text-xs font-semibold text-primary">
                  {rev.hindiComment}
                </div>
              </div>

              {/* Reviewer Details & Locality */}
              <div className="pt-5 mt-4 border-t border-primary/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading text-base text-text font-bold">
                      {rev.author}
                    </span>
                    <span title="Verified Kanpur Customer" className="inline-flex">
                      <CheckCircle className="w-3.5 h-3.5 text-green-veg" />
                    </span>
                  </div>
                  <span className="text-xs text-text/60 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-primary/70" />
                    {rev.locality}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-text/50 block font-semibold">
                    {isHi ? "पसंदीदा मिठाई" : "Favorite"}
                  </span>
                  <span className="text-xs font-bold text-primary">
                    {rev.favoriteItem}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
