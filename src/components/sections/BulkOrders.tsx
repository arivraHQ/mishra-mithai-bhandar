"use client";

import React, { useState } from "react";
import { SITE_CONTENT } from "@content/site";
import { useCart } from "../cart/CartContext";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";

export const BulkOrders: React.FC = () => {
  const { language } = useCart();
  const isHi = language === "hi";

  const { bulkOrders } = SITE_CONTENT;

  const [eventType, setEventType] = useState(bulkOrders.eventTypes[0]);
  const [quantity, setQuantity] = useState("50-100 kg / boxes");
  const [eventDate, setEventDate] = useState("");
  const [organizerName, setOrganizerName] = useState("");
  const [venueLocality, setVenueLocality] = useState("Kanpur");

  const handleSendWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = SITE_CONTENT.store.whatsappNumber;

    const message = isHi
      ? `*नमस्ते मिश्रा मिठाई भंडार!* 🙏\n\nमैं शादी / थोक आर्डर के लिए जानकारी चाहता/चाहती हूँ:\n\n` +
        `🎉 *आयोजन (Event):* ${eventType}\n` +
        `📦 *अनुमानित मात्रा (Quantity):* ${quantity}\n` +
        `📅 *आयोजन की तारीख (Date):* ${eventDate || "शीघ्र ही"}\n` +
        `📍 *स्थान / हॉल (Venue/Area):* ${venueLocality}\n` +
        `👤 *आयोजक का नाम (Name):* ${organizerName || "अतिथी"}\n\n` +
        `कृपया थोक मूल्य सूची और टेस्टिंग बॉक्स के बारे में बताएं। धन्यवाद!`
      : `*Namaste Mishra Mithai Bhandar!* 🙏\n\nI would like to enquire about bulk / wedding sweets:\n\n` +
        `🎉 *Event Type:* ${eventType}\n` +
        `📦 *Estimated Quantity:* ${quantity}\n` +
        `📅 *Target Event Date:* ${eventDate || "Upcoming"}\n` +
        `📍 *Venue / Area in Kanpur:* ${venueLocality}\n` +
        `👤 *Contact Name:* ${organizerName || "Guest"}\n\n` +
        `Please share your wholesale catalog and custom box packaging details. Dhanyawad!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="bulk-orders" className="py-14 sm:py-20 bg-surface/40 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Context & Perks (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
              <Users className="w-4 h-4 text-accent" />
              <span>{isHi ? "शादी व बड़े आयोजन" : "Weddings & Bulk Gifting"}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-text font-normal tracking-tight">
              {isHi ? bulkOrders.hindiTitle : bulkOrders.title}
            </h2>

            <p className="text-sm sm:text-base text-text/85 leading-relaxed">
              {bulkOrders.description}
            </p>

            {/* Perks List */}
            <div className="space-y-3 pt-2">
              {bulkOrders.perks.map((perk, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-veg flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-text font-medium">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* Local Trust Note */}
            <div className="bg-bg border border-primary/15 rounded-xl p-4 flex items-center gap-3">
              <span className="font-heading text-2xl text-primary font-bold">5000+</span>
              <p className="text-xs text-text/85 leading-snug">
                {isHi
                  ? "कानपुर के प्रतिष्ठित परिवारों द्वारा पिछले ३९ वर्षों में चयनित।"
                  : "Kanpur wedding shagun boxes handcrafted fresh on event morning since 1985."}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSendWhatsAppEnquiry}
              className="bg-bg border-2 border-primary/20 rounded-2xl p-6 sm:p-8 shadow-elevated space-y-4"
              aria-label="Bulk Enquiry Form"
            >
              <div className="border-b border-primary/10 pb-3">
                <h3 className="font-heading text-xl text-primary font-bold">
                  {isHi ? "व्हाट्सएप थोक पूछताछ" : "Quick Bulk Enquiry"}
                </h3>
                <p className="text-xs text-text/80">
                  {isHi
                    ? "फॉर्म भरें, तुरंत व्हाट्सएप पर हमारे कोऑर्डिनेटर से जुड़ें।"
                    : "Fill details below to generate an instant prefilled WhatsApp enquiry."}
                </p>
              </div>

              {/* Event Type Select */}
              <div>
                <label htmlFor="bulk-event-type" className="block text-xs font-semibold text-text mb-1">
                  {isHi ? "आयोजन का प्रकार (Event Type)" : "Event Type"}
                </label>
                <select
                  id="bulk-event-type"
                  name="eventType"
                  aria-label="Select Event Type"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-surface/50 border border-primary/20 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-text focus:outline-none focus:border-primary"
                >
                  {bulkOrders.eventTypes.map((t, idx) => (
                    <option key={idx} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bulk-quantity" className="block text-xs font-semibold text-text mb-1">
                    {isHi ? "अनुमानित मात्रा (Quantity)" : "Estimated Quantity"}
                  </label>
                  <select
                    id="bulk-quantity"
                    name="quantity"
                    aria-label="Select Estimated Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full bg-surface/50 border border-primary/20 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-text focus:outline-none focus:border-primary"
                  >
                    <option value="25-50 kg / boxes">25 – 50 kg (Small Gathering)</option>
                    <option value="50-100 kg / boxes">50 – 100 kg (Wedding Shagun)</option>
                    <option value="100-250 kg / boxes">100 – 250 kg (Grand Wedding)</option>
                    <option value="250+ kg / Corporate">250+ kg (Corporate Festive)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bulk-event-date" className="block text-xs font-semibold text-text mb-1">
                    {isHi ? "तारीख (Event Date)" : "Event Date"}
                  </label>
                  <input
                    id="bulk-event-date"
                    name="eventDate"
                    aria-label="Target Event Date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-surface/50 border border-primary/20 rounded-lg px-3 py-2 text-xs sm:text-sm text-text focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Organizer Name & Venue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bulk-organizer-name" className="block text-xs font-semibold text-text mb-1">
                    {isHi ? "आपका नाम (Your Name) *" : "Your Name *"}
                  </label>
                  <input
                    id="bulk-organizer-name"
                    name="organizerName"
                    type="text"
                    required
                    placeholder="e.g. Ramesh Verma"
                    value={organizerName}
                    onChange={(e) => setOrganizerName(e.target.value)}
                    className="w-full bg-surface/50 border border-primary/20 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="bulk-venue-locality" className="block text-xs font-semibold text-text mb-1">
                    {isHi ? "कानपुर क्षेत्र / वेन्यू (Kanpur Area)" : "Kanpur Area / Venue"}
                  </label>
                  <input
                    id="bulk-venue-locality"
                    name="venueLocality"
                    type="text"
                    placeholder="e.g. Landmark Hotel / Swaroop Nagar"
                    value={venueLocality}
                    onChange={(e) => setVenueLocality(e.target.value)}
                    className="w-full bg-surface/50 border border-primary/20 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-text placeholder:text-text/50 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover active:scale-[0.98] text-bg font-semibold text-sm py-3.5 px-6 rounded-btn shadow-elevated flex items-center justify-center gap-2.5 touch-target transition-all mt-2 group"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.667-.699c.974.551 1.764.88 2.793.88 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.586-5.766-5.767-5.766zm3.385 8.163c-.143.402-.832.748-1.157.797-.323.048-.737.072-2.138-.475-1.791-.699-2.937-2.529-3.027-2.648-.089-.12-1.282-1.705-1.282-3.251 0-1.547.81-2.308 1.096-2.624.287-.315.626-.394.834-.394.209 0 .418.002.6.012.193.011.452-.073.707.538.263.63.896 2.191.974 2.351.079.16.131.348.026.559-.104.21-.157.34-.312.523-.157.184-.33.41-.471.55-.157.157-.32.327-.138.641.183.313.812 1.342 1.745 2.173 1.201 1.07 2.213 1.401 2.527 1.558.314.157.498.131.681-.079.184-.21.785-.916.994-1.23.21-.314.419-.263.707-.157.288.105 1.831.864 2.145 1.021.314.157.523.236.6.367.078.131.078.761-.065 1.163z" />
                </svg>
                <span>{isHi ? "व्हाट्सएप पर कोटेशन मांगें" : "Send Bulk Enquiry on WhatsApp"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
