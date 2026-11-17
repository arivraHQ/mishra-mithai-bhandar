"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Language, CustomerOrderDetails } from "@/types";
import { Product, SITE_CONTENT } from "@content/site";

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, weight: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalAmount: number;
  totalItemsCount: number;
  cartBump: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  buildWhatsAppUrl: (customer: CustomerOrderDetails) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mmb_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("mmb_cart", JSON.stringify(items));
    } catch {
      // Ignore localStorage errors
    }
  }, [items]);

  const addToCart = (product: Product, selectedWeight: string) => {
    const variant = product.variants.find((v) => v.weight === selectedWeight) || product.variants[0];
    const itemId = `${product.id}-${variant.weight}`;

    setItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      if (existing) {
        return prev.map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.unitPrice,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          id: itemId,
          productId: product.id,
          name: product.name,
          hindiName: product.hindiName,
          weight: variant.label,
          unitPrice: variant.price,
          quantity: 1,
          totalPrice: variant.price,
          unitType: product.unitType,
          imagePlaceholderColor: product.imagePlaceholderColor,
        },
      ];
    });

    // Trigger micro-bounce for header icon
    setCartBump(true);
    setTimeout(() => setCartBump(false), 450);
  };

  const updateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: qty, totalPrice: qty * item.unitPrice }
          : item
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const buildWhatsAppUrl = (customer: CustomerOrderDetails) => {
    const isHi = language === "hi";
    const shopWhatsApp = SITE_CONTENT.store.whatsappNumber;

    let msg = isHi
      ? `*नमस्ते मिश्रा मिठाई भंडार!* 🙏\n\nमैं ऑनलाइन मेनू से निम्नलिखित ताज़ा मिठाई का आर्डर देना चाहता/चाहती हूँ:\n\n`
      : `*Namaste Mishra Mithai Bhandar!* 🙏\n\nI would like to place an order from your online store:\n\n`;

    items.forEach((item, index) => {
      const itemTitle = isHi ? item.hindiName : item.name;
      msg += `${index + 1}. *${itemTitle}* (${item.weight})\n`;
      msg += `   मात्रा (Qty): ${item.quantity} × ₹${item.unitPrice} = *₹${item.totalPrice}*\n\n`;
    });

    msg += `-------------------------------\n`;
    msg += isHi
      ? `*कुल राशि (Total Amount): ₹${totalAmount.toLocaleString("en-IN")}*\n`
      : `*Total Order Value: ₹${totalAmount.toLocaleString("en-IN")}*\n`;
    msg += `-------------------------------\n\n`;

    msg += isHi ? `*ग्राहक का विवरण (Customer Info):*\n` : `*Delivery & Customer Details:*\n`;
    msg += isHi ? `👤 नाम: ${customer.name || "अतिथी"}\n` : `👤 Name: ${customer.name || "Guest"}\n`;
    msg += isHi
      ? `📍 डिलीवरी क्षेत्र (Kanpur Area): ${customer.locality || "कानपुर"}\n`
      : `📍 Delivery Area (Kanpur): ${customer.locality || "Kanpur"}\n`;
    if (customer.phone) {
      msg += `📞 फ़ोन: ${customer.phone}\n`;
    }
    if (customer.notes) {
      msg += `📝 विशेष निर्देश: ${customer.notes}\n`;
    }

    msg += `\n` + (isHi
      ? `कृपया आर्डर कन्फर्म करें और अनुमानित डिलीवरी का समय बताएं। धन्यवाद!`
      : `Please confirm this order and let me know the estimated delivery time. Dhanyawad!`);

    return `https://wa.me/${shopWhatsApp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalAmount,
        totalItemsCount,
        cartBump,
        language,
        setLanguage,
        toggleLanguage,
        buildWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
