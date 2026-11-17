"use client";

import React, { useState } from "react";
import { SITE_CONTENT, Product } from "@content/site";
import { useCart } from "../cart/CartContext";
import { VegBadge } from "../common/VegBadge";
import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";

interface CatalogProps {
  selectedOccasion: string;
}

export const Catalog: React.FC<CatalogProps> = ({ selectedOccasion }) => {
  const { addToCart, language } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>({});
  const [addedItemEffect, setAddedItemEffect] = useState<string | null>(null);

  const isHi = language === "hi";

  const categories = [
    { id: "all", label: "All Items", hindiLabel: "संपूर्ण मेनू" },
    { id: "mithai", label: "Desi Ghee Mithai", hindiLabel: "देसी घी मिठाई" },
    { id: "namkeen", label: "Kanpuri Namkeen", hindiLabel: "कानपुरी नमकीन" },
    { id: "dry-fruits", label: "Dry Fruits & Nuts", hindiLabel: "शाही मेवे" },
  ];

  // Filter products by Category and Occasion
  const filteredProducts = SITE_CONTENT.products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesOccasion =
      selectedOccasion === "all" || product.occasions.includes(selectedOccasion);
    return matchesCategory && matchesOccasion;
  });

  const getSelectedWeight = (product: Product) => {
    return selectedWeights[product.id] || product.variants[1]?.weight || "500g";
  };

  const setWeight = (productId: string, weight: string) => {
    setSelectedWeights((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleAdd = (product: Product) => {
    const weight = getSelectedWeight(product);
    addToCart(product, weight);

    setAddedItemEffect(product.id);
    setTimeout(() => {
      setAddedItemEffect(null);
    }, 900);
  };

  return (
    <section id="catalog" className="py-12 sm:py-16 md:py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Bilingual Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {isHi ? "दैनिक ताज़ा कैटलॉग" : "Fresh Daily Catalog"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight">
              {isHi ? "कड़ाही से सीधे आपकी थाली तक" : "Direct From Kadai to Your Home"}
            </h2>
            <p className="font-heading text-lg sm:text-xl text-primary font-medium">
              {isHi
                ? "१००% शुद्ध देसी घी • बिना किसी मिलावट के"
                : "100% Pure Desi Ghee • Zero Preservatives"}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-btn text-xs sm:text-sm font-semibold transition-all touch-target whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-primary text-bg shadow-sm"
                    : "bg-surface text-text/80 hover:bg-surface-saffron"
                }`}
              >
                {isHi ? cat.hindiLabel : cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Featured Product Grid (NEVER 3 equal cards) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-surface/30 rounded-2xl border border-primary/10">
            <p className="font-heading text-xl text-text">
              {isHi ? "इस श्रेणी में कोई मिठाई उपलब्ध नहीं है।" : "No sweets match this filter."}
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
              }}
              className="mt-4 px-6 py-2.5 bg-primary text-bg rounded-btn text-xs font-bold"
            >
              {isHi ? "सभी मिठाई देखें" : "View All Sweets"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            {filteredProducts.map((product, index) => {
              const currentWeight = getSelectedWeight(product);
              const activeVariant =
                product.variants.find((v) => v.weight === currentWeight) ||
                product.variants[0];
              const isAdded = addedItemEffect === product.id;

              // Asymmetric Grid Sizing:
              // Index 0: Large Spotlight Card (Spans 12 on mobile, 8 cols on desktop)
              // Index 1: Tall Vertical Card (Spans 12 on mobile, 4 cols on desktop)
              // Index 2, 3, 4: Asymmetric Triplet (Spans 4, 4, 4)
              // Index 5: Wide Landscape Hero Card (Spans 12 cols)
              // Remaining: Rhythm of 6 cols & 6 cols or 4 cols
              let colSpan = "md:col-span-4";
              if (index === 0) colSpan = "md:col-span-8";
              else if (index === 1) colSpan = "md:col-span-4";
              else if (index === 5) colSpan = "md:col-span-12";
              else if (index % 5 === 2) colSpan = "md:col-span-6";
              else if (index % 5 === 3) colSpan = "md:col-span-6";

              const isWideFeature = index === 0 || index === 5;

              return (
                <article
                  key={product.id}
                  className={`bg-surface/50 border border-primary/15 rounded-card p-5 sm:p-6 flex flex-col justify-between hover:shadow-subtle hover:border-primary/30 transition-all ${colSpan} ${
                    isWideFeature ? "bg-gradient-to-br from-surface to-[#FCE6BE]" : ""
                  }`}
                  data-testid="product-card"
                >
                  <div className={isWideFeature ? "grid grid-cols-1 sm:grid-cols-12 gap-6 items-center" : "space-y-4"}>
                    {/* Visual Craft Placeholder Image Container */}
                    {/* ART DIRECTION:
                        ${product.artDirection}
                    */}
                    <div
                      className={`relative rounded-xl overflow-hidden flex items-center justify-center p-4 border border-primary/10 shadow-sm group ${
                        isWideFeature
                          ? "sm:col-span-5 aspect-[4/3] sm:h-full min-h-[180px]"
                          : "aspect-[4/3] w-full"
                      }`}
                      style={{ backgroundColor: product.imagePlaceholderColor }}
                    >
                      {/* Real Copyright-Free Mithai Photo or Fallback */}
                      {product.imageUrl ? (
                        <>
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        </>
                      ) : (
                        <div className="text-center space-y-2 select-none">
                          <div className="w-14 h-14 mx-auto rounded-full bg-bg/70 border border-primary/20 flex items-center justify-center shadow-inner">
                            <span className="font-heading text-2xl text-primary font-bold">
                              {product.hindiName.charAt(0)}
                            </span>
                          </div>
                          <span className="text-[10px] font-semibold text-text/75 uppercase tracking-wider block">
                            {product.prepHighlight}
                          </span>
                        </div>
                      )}

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
                        <VegBadge size="sm" />
                        {product.badge && (
                          <span className="bg-primary text-bg text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Shelf Life Chip */}
                      <div className="absolute bottom-2.5 right-2.5 bg-bg/90 backdrop-blur-sm text-text/80 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-primary/10 z-10">
                        {product.shelfLife}
                      </div>
                    </div>

                    {/* Content & Descriptions */}
                    <div className={isWideFeature ? "sm:col-span-7 space-y-3" : "space-y-2.5"}>
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-heading text-lg sm:text-xl text-text font-bold leading-tight">
                            {isHi ? product.hindiName : product.name}
                          </h3>
                        </div>
                        <p className="font-heading text-sm text-primary font-medium mt-0.5">
                          {isHi ? product.name : product.hindiName}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-text/75 leading-relaxed line-clamp-2">
                        {isHi ? product.hindiShortNote : product.shortNote}
                      </p>

                      {/* Base Price Line */}
                      <div className="pt-1 flex items-baseline gap-2">
                        <span className="font-heading text-xl sm:text-2xl text-primary font-bold">
                          ₹{activeVariant.price}
                        </span>
                        <span className="text-xs text-text/60">
                          for {activeVariant.label} (₹{product.basePrice}/{product.unitType})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Weight Selector & Add to Order Bar */}
                  <div className="pt-5 mt-4 border-t border-primary/10 space-y-3">
                    {/* Weight Options Pills */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-text/70">
                        {isHi ? "वजन चुनें:" : "Select Pack:"}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {product.variants.map((variant) => {
                          const isSelected = currentWeight === variant.weight;
                          return (
                            <button
                              key={variant.weight}
                              onClick={() => setWeight(product.id, variant.weight)}
                              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                                isSelected
                                  ? "bg-primary text-bg shadow-sm"
                                  : "bg-bg text-text/80 border border-primary/20 hover:border-primary"
                              }`}
                            >
                              {variant.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Add to Order Button with Micro-Bounce */}
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAdd(product)}
                      className={`w-full py-3 px-4 rounded-btn font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all touch-target ${
                        isAdded
                          ? "bg-green-veg text-bg"
                          : "bg-primary hover:bg-primary-hover active:bg-primary-hover text-bg hover:shadow-elevated"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{isHi ? "थाली में जोड़ा गया!" : "Added to Box!"}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>
                            {isHi
                              ? `आर्डर में जोड़ें (₹${activeVariant.price})`
                              : `Add to Order (₹${activeVariant.price})`}
                          </span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
