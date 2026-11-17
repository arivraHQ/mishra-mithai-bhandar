"use client";

import React from "react";
import { useCart } from "../cart/CartContext";
import { ShoppingBag } from "lucide-react";

export const StickyMobileBar: React.FC = () => {
  const { totalItemsCount, totalAmount, setIsCartOpen, language } = useCart();
  const isHi = language === "hi";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg/95 backdrop-blur-md border-t border-primary/15 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-elevated">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Cart Quick Summary (if items present) */}
        {totalItemsCount > 0 ? (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex-1 bg-surface border border-primary/20 text-text px-3 py-2.5 rounded-btn flex items-center justify-between touch-target shadow-sm"
            aria-label="View Cart"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-primary" />
                <span className="absolute -top-1.5 -right-2 bg-primary text-bg text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItemsCount}
                </span>
              </div>
              <span className="text-xs font-semibold text-text">
                {isHi ? "थाली देखें" : "View Box"}
              </span>
            </div>
            <span className="font-heading font-bold text-primary text-sm">
              ₹{totalAmount.toLocaleString("en-IN")}
            </span>
          </button>
        ) : (
          <div className="flex-1 text-left px-2">
            <span className="block text-[10px] text-text/70 leading-tight">
              {isHi ? "कानपुर होम डिलीवरी" : "Kanpur Express Delivery"}
            </span>
            <span className="font-heading font-bold text-xs text-primary leading-tight">
              {isHi ? "ताज़ा देसी घी मिठाई" : "Fresh Desi Ghee"}
            </span>
          </div>
        )}

        {/* Direct WhatsApp Action Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 bg-primary hover:bg-primary-hover active:scale-[0.98] text-bg font-semibold text-xs sm:text-sm py-2.5 px-3.5 rounded-btn shadow-subtle flex items-center justify-center gap-2 touch-target transition-all"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.551 1.764.88 2.793.88 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.586-5.766-5.767-5.766zm3.385 8.163c-.143.402-.832.748-1.157.797-.323.048-.737.072-2.138-.475-1.791-.699-2.937-2.529-3.027-2.648-.089-.12-1.282-1.705-1.282-3.251 0-1.547.81-2.308 1.096-2.624.287-.315.626-.394.834-.394.209 0 .418.002.6.012.193.011.452-.073.707.538.263.63.896 2.191.974 2.351.079.16.131.348.026.559-.104.21-.157.34-.312.523-.157.184-.33.41-.471.55-.157.157-.32.327-.138.641.183.313.812 1.342 1.745 2.173 1.201 1.07 2.213 1.401 2.527 1.558.314.157.498.131.681-.079.184-.21.785-.916.994-1.23.21-.314.419-.263.707-.157.288.105 1.831.864 2.145 1.021.314.157.523.236.6.367.078.131.078.761-.065 1.163z" />
          </svg>
          <span>{isHi ? "व्हाट्सएप आर्डर" : "Order on WhatsApp"}</span>
        </button>
      </div>
    </div>
  );
};
