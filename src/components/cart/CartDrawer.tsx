"use client";

import React, { useState } from "react";
import { useCart } from "./CartContext";
import { SITE_CONTENT } from "@content/site";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalAmount,
    totalItemsCount,
    language,
    buildWhatsAppUrl,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedLocality, setSelectedLocality] = useState(
    SITE_CONTENT.store.deliveryAreas[0].name
  );
  const [customLocality, setCustomLocality] = useState("");
  const [notes, setNotes] = useState("");

  const isHi = language === "hi";

  const effectiveLocality =
    selectedLocality === "Other" ? customLocality : selectedLocality;

  const handleWhatsAppCheckout = () => {
    const waUrl = buildWhatsAppUrl({
      name: customerName,
      phone: customerPhone,
      locality: effectiveLocality,
      notes,
      orderType: "delivery",
    });
    window.open(waUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-text/50 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Slide-Up Drawer */}
          <motion.aside
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 280,
              mass: 0.8,
            }}
            className="fixed bottom-0 left-0 right-0 max-h-[90vh] md:max-h-[85vh] md:max-w-xl md:left-auto md:right-0 md:top-0 md:bottom-0 md:h-full bg-bg border-t md:border-l md:border-t-0 border-primary/15 rounded-t-[24px] md:rounded-t-none md:rounded-l-[24px] shadow-2xl z-50 flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Your Sweet Box"
          >
            {/* Drawer Header */}
            <div className="px-6 py-5 border-b border-primary/10 flex items-center justify-between bg-surface/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-heading text-xl text-primary font-bold tracking-tight">
                    {isHi ? "आपकी मिठाई की थाली" : "Your Sweet Box"}
                  </h2>
                  <p className="text-xs text-text/80 font-medium">
                    {totalItemsCount} {totalItemsCount === 1 ? "item" : "items"} •{" "}
                    {isHi ? "ताज़ा कानपुर डिलीवरी" : "Fresh Kanpur Delivery"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full hover:bg-primary/10 flex items-center justify-center text-text hover:text-primary transition-colors touch-target"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body: Item List & Details */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-surface mx-auto flex items-center justify-center text-accent">
                    <ShoppingBag className="w-8 h-8 opacity-60" />
                  </div>
                  <h3 className="font-heading text-xl text-text">
                    {isHi ? "थाली अभी खाली है" : "Your box is empty"}
                  </h3>
                  <p className="text-sm text-text/80 max-w-xs mx-auto">
                    {isHi
                      ? "आज की ताज़ा काजू कतली, बेसन के लड्डू या दालमोठ चुनें।"
                      : "Add fresh Kaju Katli, Besan Laddus, or crisp Dalmoth from our daily batch."}
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center gap-2 bg-primary text-bg font-semibold text-sm px-6 py-3 rounded-btn shadow hover:bg-primary-hover transition-colors touch-target"
                  >
                    {isHi ? "मिठाई देखें" : "Explore Sweets"}
                  </button>
                </div>
              ) : (
                <>
                  {/* Items List */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-text/80">
                      {isHi ? "चुने हुए व्यंजन" : "Selected Items"}
                    </div>
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-surface/50 border border-primary/10 rounded-card p-3.5 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-text truncate">
                            {isHi ? item.hindiName : item.name}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-text/80 mt-0.5">
                            <span className="bg-bg px-2 py-0.5 rounded-md border border-primary/10 font-medium">
                              {item.weight}
                            </span>
                            <span>₹{item.unitPrice} each</span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 bg-bg border border-primary/15 rounded-btn px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-primary hover:bg-surface transition-colors"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-text">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-primary hover:bg-surface transition-colors"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price & Delete */}
                        <div className="text-right flex items-center gap-2.5 flex-shrink-0">
                          <span className="font-heading font-bold text-base text-primary whitespace-nowrap">
                            ₹{item.totalPrice}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-text/60 hover:text-primary transition-colors p-1"
                            title={`Remove ${item.name}`}
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer & Kanpur Delivery Details */}
                  <div className="bg-surface/40 border border-primary/15 rounded-card p-4 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {isHi ? "डिलीवरी विवरण (कानपुर)" : "Kanpur Delivery Details"}
                      </span>
                      <span className="text-[11px] text-green-veg font-semibold flex items-center gap-1">
                        ● {isHi ? "सीधे दुकान से प्रेषित" : "Direct From Shop"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="drawer-customer-name" className="block text-xs font-medium text-text mb-1">
                          {isHi ? "आपका नाम *" : "Your Name *"}
                        </label>
                        <input
                          id="drawer-customer-name"
                          name="customerName"
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-bg border border-primary/20 rounded-lg px-3 py-2 text-sm text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="drawer-customer-phone" className="block text-xs font-medium text-text mb-1">
                          {isHi ? "फ़ोन नंबर (वैकल्पिक)" : "Phone Number (Optional)"}
                        </label>
                        <input
                          id="drawer-customer-phone"
                          name="customerPhone"
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="e.g. +91 98390..."
                          className="w-full bg-bg border border-primary/20 rounded-lg px-3 py-2 text-sm text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="drawer-customer-locality" className="block text-xs font-medium text-text mb-1">
                        {isHi ? "कानपुर क्षेत्र चुनें" : "Select Kanpur Area"}
                      </label>
                      <select
                        id="drawer-customer-locality"
                        name="customerLocality"
                        aria-label="Select Kanpur Delivery Area"
                        value={selectedLocality}
                        onChange={(e) => setSelectedLocality(e.target.value)}
                        className="w-full bg-bg border border-primary/20 rounded-lg px-3 py-2 text-sm text-text focus:outline-none focus:border-primary"
                      >
                        {SITE_CONTENT.store.deliveryAreas.map((area) => (
                          <option key={area.name} value={area.name}>
                            {area.name} (ETA ~{area.eta})
                          </option>
                        ))}
                        <option value="Other">
                          {isHi ? "अन्य कानपुर पता लिखें..." : "Other Kanpur Location..."}
                        </option>
                      </select>
                    </div>

                    {selectedLocality === "Other" && (
                      <div>
                        <label htmlFor="drawer-custom-locality" className="block text-xs font-medium text-text mb-1">
                          {isHi ? "विस्तृत पता" : "Detailed Address"}
                        </label>
                        <input
                          id="drawer-custom-locality"
                          name="customLocality"
                          type="text"
                          value={customLocality}
                          onChange={(e) => setCustomLocality(e.target.value)}
                          placeholder="Enter your landmark or street in Kanpur"
                          className="w-full bg-bg border border-primary/20 rounded-lg px-3 py-2 text-sm text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="drawer-customer-notes" className="block text-xs font-medium text-text mb-1">
                        {isHi ? "कोई विशेष निर्देश? (वैकल्पिक)" : "Special Note (Optional)"}
                      </label>
                      <input
                        id="drawer-customer-notes"
                        name="customerNotes"
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Please send freshly cut piece, gift wrap..."
                        className="w-full bg-bg border border-primary/20 rounded-lg px-3 py-2 text-xs text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer with Subtotal & WhatsApp CTA */}
            {items.length > 0 && (
              <div className="p-6 bg-surface/80 border-t border-primary/15 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-text/80 block">
                      {isHi ? "कुल राशि (टैक्स सहित)" : "Total Bill (Incl. taxes)"}
                    </span>
                    <span className="font-heading text-2xl text-primary font-bold">
                      ₹{totalAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-green-veg font-medium block">
                      ✓ {isHi ? "दुकान से ताज़ा पैकिंग" : "Packed Fresh Daily"}
                    </span>
                    <span className="text-[11px] text-text/75">
                      {isHi ? "भुगतान डिलीवरी पर या UPI" : "Pay via UPI / Cash on delivery"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-primary hover:bg-primary-hover text-bg font-semibold text-base py-3.5 px-6 rounded-btn shadow-elevated flex items-center justify-center gap-3 transition-colors touch-target group"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg
                    className="w-5 h-5 fill-current flex-shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.551 1.764.88 2.793.88 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.586-5.766-5.767-5.766zm3.385 8.163c-.143.402-.832.748-1.157.797-.323.048-.737.072-2.138-.475-1.791-.699-2.937-2.529-3.027-2.648-.089-.12-1.282-1.705-1.282-3.251 0-1.547.81-2.308 1.096-2.624.287-.315.626-.394.834-.394.209 0 .418.002.6.012.193.011.452-.073.707.538.263.63.896 2.191.974 2.351.079.16.131.348.026.559-.104.21-.157.34-.312.523-.157.184-.33.41-.471.55-.157.157-.32.327-.138.641.183.313.812 1.342 1.745 2.173 1.201 1.07 2.213 1.401 2.527 1.558.314.157.498.131.681-.079.184-.21.785-.916.994-1.23.21-.314.419-.263.707-.157.288.105 1.831.864 2.145 1.021.314.157.523.236.6.367.078.131.078.761-.065 1.163z" />
                  </svg>
                  <span>
                    {isHi ? "व्हाट्सएप पर आर्डर भेजें" : "Send Order on WhatsApp"}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
