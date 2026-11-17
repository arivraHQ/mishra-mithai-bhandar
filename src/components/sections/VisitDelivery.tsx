"use client";

import React from "react";
import { SITE_CONTENT } from "@content/site";
import { useCart } from "../cart/CartContext";
import { MapPin, Clock, Phone, Navigation, Bike } from "lucide-react";

export const VisitDelivery: React.FC = () => {
  const { language, setIsCartOpen } = useCart();
  const isHi = language === "hi";

  const { store } = SITE_CONTENT;

  return (
    <section id="visit" className="py-16 sm:py-24 bg-surface/30 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Address, Hours, Delivery Hotspots (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {isHi ? "दुकान व डिलीवरी" : "Visit & Citywide Delivery"}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight">
                {isHi ? "दुकान आएं या घर मंगवाएं" : "Visit Our Phool Bagh Shop or Order Home"}
              </h2>
              <p className="font-heading text-base sm:text-xl text-primary font-medium">
                {isHi ? "कानपुर के हर कोने में ताज़ा डिलीवरी" : "Express door delivery across Kanpur City"}
              </p>
            </div>

            {/* Address & Hours Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="bg-bg border border-primary/15 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-text">
                    {isHi ? "दुकान का पता" : "Shop Address"}
                  </h3>
                  <p className="text-xs sm:text-sm text-text/80 mt-1 leading-relaxed">
                    {store.address.line1}<br />
                    {store.address.line2}<br />
                    {store.address.city}, {store.address.state} - {store.address.pincode}
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-bg border border-primary/15 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-text">
                    {isHi ? "दुकान का समय" : "Store Hours"}
                  </h3>
                  <p className="text-xs sm:text-sm text-text/80 mt-1 leading-relaxed">
                    <strong>{isHi ? store.hours.hindiDisplay : store.hours.display}</strong><br />
                    <span className="text-primary font-medium text-xs">
                      {store.hours.note}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Kanpur Delivery Zones Matrix */}
            <div className="bg-bg border border-primary/15 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bike className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-bold text-text">
                    {isHi ? "कानपुर डिलीवरी क्षेत्र व समय" : "Kanpur Delivery Areas & ETA"}
                  </h3>
                </div>
                <span className="text-[11px] text-green-veg font-semibold">
                  ● {isHi ? "लाइव डिलीवरी चालू" : "Live Dispatching"}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {store.deliveryAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="bg-surface/50 border border-primary/10 rounded-lg p-2.5 text-center"
                  >
                    <span className="font-semibold text-xs text-text block truncate">
                      {area.name}
                    </span>
                    <span className="text-[10px] text-primary font-medium block">
                      ~{area.eta}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-text/60 italic text-center sm:text-left">
                {isHi
                  ? "* न्यूनतम आर्डर ₹200। डिलीवरी सीधे दुकान के डिलीवरी बॉय द्वारा की जाती है।"
                  : "* Minimum order ₹200. Prepared and packed immediately upon WhatsApp confirmation."}
              </p>
            </div>

            {/* Direct Action Buttons: Call & WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${store.phoneTel}`}
                className="bg-surface hover:bg-surface-saffron border border-primary/30 text-primary font-semibold text-sm py-3.5 px-6 rounded-btn flex items-center justify-center gap-2.5 transition-colors touch-target shadow-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{isHi ? "सीधे कॉल करें" : `Call ${store.phoneDisplay}`}</span>
              </a>

              <button
                onClick={() => setIsCartOpen(true)}
                className="bg-primary hover:bg-primary-hover active:scale-[0.98] text-bg font-semibold text-sm py-3.5 px-6 rounded-btn shadow-elevated flex items-center justify-center gap-2.5 transition-all touch-target"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.551 1.764.88 2.793.88 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.586-5.766-5.767-5.766zm3.385 8.163c-.143.402-.832.748-1.157.797-.323.048-.737.072-2.138-.475-1.791-.699-2.937-2.529-3.027-2.648-.089-.12-1.282-1.705-1.282-3.251 0-1.547.81-2.308 1.096-2.624.287-.315.626-.394.834-.394.209 0 .418.002.6.012.193.011.452-.073.707.538.263.63.896 2.191.974 2.351.079.16.131.348.026.559-.104.21-.157.34-.312.523-.157.184-.33.41-.471.55-.157.157-.32.327-.138.641.183.313.812 1.342 1.745 2.173 1.201 1.07 2.213 1.401 2.527 1.558.314.157.498.131.681-.079.184-.21.785-.916.994-1.23.21-.314.419-.263.707-.157.288.105 1.831.864 2.145 1.021.314.157.523.236.6.367.078.131.078.761-.065 1.163z" />
                </svg>
                <span>{isHi ? "व्हाट्सएप पर आर्डर दें" : "Order on WhatsApp"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Handcrafted Architectural Map Placeholder (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-bg border-2 border-primary/20 rounded-2xl p-4 shadow-elevated relative overflow-hidden">
              <div className="aspect-[4/3] rounded-xl bg-[#F6EBD5] border border-primary/15 relative overflow-hidden flex flex-col justify-between p-5">
                {/* Styled Geometric Vector Map Representation of Kanpur Old City */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  viewBox="0 0 400 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ganga River Curve */}
                  <path
                    d="M-20 60 C80 90, 180 40, 320 80 C360 90, 420 70, 440 60"
                    stroke="#2F5D3A"
                    strokeWidth="18"
                    opacity="0.2"
                  />
                  {/* Main Arterial Roads */}
                  <line x1="20" y1="20" x2="380" y2="280" stroke="#8C1C13" strokeWidth="3" opacity="0.4" />
                  <line x1="120" y1="20" x2="160" y2="280" stroke="#E8A317" strokeWidth="2.5" opacity="0.5" />
                  <line x1="20" y1="180" x2="380" y2="120" stroke="#8C1C13" strokeWidth="2" opacity="0.3" />
                  <circle cx="200" cy="150" r="45" stroke="#8C1C13" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                  {/* City Land Blocks */}
                  <rect x="50" y="90" width="40" height="50" fill="#E8A317" opacity="0.1" />
                  <rect x="240" y="160" width="60" height="40" fill="#8C1C13" opacity="0.08" />
                  <rect x="180" y="60" width="50" height="30" fill="#2F5D3A" opacity="0.08" />
                </svg>

                {/* Map Pin Landmark Callout */}
                <div className="relative z-10 self-center my-auto flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-bg shadow-elevated border-2 border-accent flex items-center justify-center animate-bounce">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="mt-2 bg-bg/95 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-2 shadow-sm">
                    <span className="font-heading text-sm text-primary font-bold block">
                      Mishra Mithai Bhandar
                    </span>
                    <span className="text-[10px] text-text/70 block">
                      Ghanta Ghar Chauraha, Near Phool Bagh
                    </span>
                  </div>
                </div>

                {/* Map Footer Link */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-text/75 bg-bg/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-primary/10">
                  <span className="flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-primary" />
                    <span>Kanpur Central: 1.8 km</span>
                  </span>
                  <a
                    href="https://maps.google.com/?q=Ghanta+Ghar+Kanpur"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-primary hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
