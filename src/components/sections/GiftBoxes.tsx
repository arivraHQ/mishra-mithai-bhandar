"use client";

import React from "react";
import { SITE_CONTENT, GiftBox } from "@content/site";
import { useCart } from "../cart/CartContext";
import { Gift, CheckCircle2, ShoppingBag, ArrowRight } from "lucide-react";

export const GiftBoxes: React.FC = () => {
  const { addToCart, language, setIsCartOpen } = useCart();
  const isHi = language === "hi";

  const handleAddBox = (box: GiftBox) => {
    // Treat gift box as a product item in the cart
    const boxProduct = {
      id: `box-${box.id}`,
      name: box.name,
      hindiName: box.hindiName,
      category: "mithai" as const,
      shortNote: box.tagline,
      hindiShortNote: box.tagline,
      basePrice: box.price,
      unitType: "box" as const,
      variants: [
        {
          weight: "1box" as const,
          label: "1 Box",
          price: box.price,
          multiplier: 1.0,
        },
      ],
      artDirection: box.artDirection,
      imagePlaceholderColor: box.imagePlaceholderColor,
      isVegetarian: true,
      shelfLife: "20 days",
      prepHighlight: box.accentBadge,
      occasions: ["all", "diwali", "weddings", "corporate"],
    };

    addToCart(boxProduct, "1box");
    setIsCartOpen(true);
  };

  return (
    <section id="gift-boxes" className="py-14 sm:py-20 bg-surface/50 border-y border-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-accent" />
              <span>{isHi ? "उत्सव एवं शगुन उपहार" : "Curated Festival Gift Boxes"}</span>
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight">
              {isHi ? "अपनों के लिए शाही उपहार" : "Royal Hampers For Loved Ones"}
            </h2>
            <p className="font-heading text-base sm:text-xl text-primary font-medium">
              {isHi
                ? "विशेष डिब्बों में पैक, हर अवसर की शान"
                : "Hand-finished packaging, velvet dividers & brass accents"}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-text/75 max-w-sm">
            {isHi
              ? "दीपावली, शादी के निमंत्रण या कॉर्पोरेट आर्डर के लिए सीधे व्हाट्सएप पर कस्टमाइज करवाएं।"
              : "Swipe horizontally to explore our signature luxury gift hampers, ready for immediate festival delivery in Kanpur."}
          </p>
        </div>

        {/* Horizontal Scroll Showcase */}
        <div className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory">
          {SITE_CONTENT.giftBoxes.map((box) => (
            <div
              key={box.id}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] snap-center bg-bg border border-primary/20 rounded-card p-6 flex flex-col justify-between shadow-subtle hover:shadow-elevated transition-all"
            >
              <div className="space-y-4">
                {/* Visual Craft Box Container */}
                {/* ART DIRECTION:
                    ${box.artDirection}
                */}
                <div
                  className="aspect-[16/10] rounded-xl overflow-hidden relative flex flex-col justify-between p-4 border border-primary/10 shadow-inner group"
                  style={{ backgroundColor: box.imagePlaceholderColor }}
                >
                  {box.imageUrl ? (
                    <>
                      <img
                        src={box.imageUrl}
                        alt={box.name}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35 pointer-events-none" />
                    </>
                  ) : null}

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="bg-bg text-primary text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {box.accentBadge}
                    </span>
                    <span className="font-heading text-white text-xl font-bold drop-shadow">
                      ₹{box.price}
                    </span>
                  </div>

                  <div className="relative z-10 text-center text-white drop-shadow py-3 select-none">
                    <Gift className="w-8 h-8 mx-auto opacity-90 drop-shadow" />
                    <span className="font-heading text-base font-bold block mt-1 drop-shadow-md">
                      {isHi ? box.hindiName : box.name}
                    </span>
                  </div>

                  <div className="relative z-10 bg-bg/95 backdrop-blur-sm text-text text-[10px] font-semibold px-2.5 py-1 rounded-md text-center border border-primary/10 shadow-sm">
                    {box.bestFor}
                  </div>
                </div>

                {/* Box Details & Contents */}
                <div>
                  <h3 className="font-heading text-xl text-text font-bold leading-tight">
                    {isHi ? box.hindiName : box.name}
                  </h3>
                  <p className="text-xs text-text/75 mt-1 leading-relaxed">
                    {box.tagline}
                  </p>
                </div>

                {/* What's Inside Checklist */}
                <div className="space-y-2 pt-1 bg-surface/40 p-3.5 rounded-xl border border-primary/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                    {isHi ? "डिब्बे में क्या शामिल है:" : "What's Inside This Hamper:"}
                  </span>
                  <ul className="space-y-1.5">
                    {box.contents.map((item, i) => (
                      <li key={i} className="text-xs text-text/85 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-veg flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-primary/10">
                <button
                  onClick={() => handleAddBox(box)}
                  className="w-full bg-primary hover:bg-primary-hover active:scale-[0.98] text-bg font-semibold text-xs sm:text-sm py-3 px-4 rounded-btn shadow-sm flex items-center justify-center gap-2 transition-all touch-target group"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {isHi ? `यह डिब्बा आर्डर करें (₹${box.price})` : `Order This Hamper (₹${box.price})`}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
