import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CatalogSection } from "@/components/sections/CatalogSection";
import { StickyMobileBar } from "@/components/common/StickyMobileBar";
import { JaliDivider } from "@/components/common/JaliDivider";

// Code-split below-the-fold components to reduce initial JS payload for optimal CWV
const GiftBoxes = dynamic(
  () => import("@/components/sections/GiftBoxes").then((m) => m.GiftBoxes),
  { ssr: true }
);
const OurStory = dynamic(
  () => import("@/components/sections/OurStory").then((m) => m.OurStory),
  { ssr: true }
);
const BulkOrders = dynamic(
  () => import("@/components/sections/BulkOrders").then((m) => m.BulkOrders),
  { ssr: true }
);
const Reviews = dynamic(
  () => import("@/components/sections/Reviews").then((m) => m.Reviews),
  { ssr: true }
);
const VisitDelivery = dynamic(
  () => import("@/components/sections/VisitDelivery").then((m) => m.VisitDelivery),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => m.Footer),
  { ssr: true }
);
const CartDrawer = dynamic(
  () => import("@/components/cart/CartDrawer").then((m) => m.CartDrawer),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-bg flex flex-col selection:bg-surface selection:text-primary">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* Subtle Rangoli / Jali Section Divider */}
      <JaliDivider />

      {/* 3 & 4. Occasions Filter Strip & Interactive 16-Product Catalog */}
      <CatalogSection />

      <JaliDivider />

      {/* 6. Curated Festival Gift Boxes Showcase */}
      <div className="section-deferred">
        <GiftBoxes />
      </div>

      <JaliDivider />

      {/* 7. Our Story: Three Generations Since 1985 */}
      <div className="section-deferred">
        <OurStory />
      </div>

      <JaliDivider />

      {/* 8. Bulk, Wedding & Corporate Enquiries */}
      <div className="section-deferred">
        <BulkOrders />
      </div>

      <JaliDivider />

      {/* 9. Authentic Kanpur Local Customer Reviews */}
      <div className="section-deferred">
        <Reviews />
      </div>

      <JaliDivider />

      {/* 10. Visit Shop & Kanpur Delivery Areas */}
      <div className="section-deferred">
        <VisitDelivery />
      </div>

      {/* 11. Grand Editorial Footer */}
      <div className="section-deferred">
        <Footer />
      </div>

      {/* Slide-Up WhatsApp Cart Drawer */}
      <CartDrawer />

      {/* Thumb-friendly Sticky Bottom Bar for Mobile */}
      <StickyMobileBar />
    </main>
  );
}
