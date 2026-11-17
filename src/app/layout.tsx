import type { Metadata, Viewport } from "next";
import { Rozha_One, Mukta } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartContext";

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rozha",
  display: "optional",
});

const mukta = Mukta({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mukta",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Mishra Mithai Bhandar | Kanpur's Heritage Pure Desi Ghee Sweets",
  description:
    "Handcrafted pure desi ghee sweets and namkeen since 1985 in Kanpur. Order Kaju Katli, Besan Laddu, Motichoor & Dalmoth directly on WhatsApp. Fresh daily batch.",
  keywords: [
    "Mishra Mithai Bhandar",
    "Kanpur sweets",
    "pure desi ghee mithai",
    "Kaju Katli Kanpur",
    "Besan Laddu",
    "Kanpur Dalmoth",
    "wedding sweets Kanpur",
    "WhatsApp sweet order Kanpur",
  ],
  authors: [{ name: "Mishra Mithai Bhandar" }],
  openGraph: {
    title: "Mishra Mithai Bhandar — Kanpur Since 1985",
    description: "Pure Desi Ghee Mithai, Handcrafted Daily. Direct WhatsApp Orders.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#8C1C13",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rozhaOne.variable} ${mukta.variable}`}>
      <body className="bg-bg text-text min-h-screen selection:bg-surface selection:text-primary">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
