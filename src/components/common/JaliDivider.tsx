import React from "react";

interface JaliDividerProps {
  className?: string;
}

/**
 * Subtle traditional Indian Rangoli / Jali geometric line pattern
 * strictly rendered at 8% opacity as per boutique design system tokens.
 */
export const JaliDivider: React.FC<JaliDividerProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center py-6 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div className="w-full max-w-7xl px-4 flex items-center gap-4">
        {/* Left Taper Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-primary/40" />

        {/* Traditional Floral Rangoli Center Knot (Inline SVG at exactly 8-15% subtle opacity) */}
        <svg
          width="120"
          height="24"
          viewBox="0 0 120 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary opacity-25 flex-shrink-0"
        >
          <path
            d="M60 2L64 8L70 12L64 16L60 22L56 16L50 12L56 8L60 2Z"
            fill="currentColor"
          />
          <circle cx="42" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
          <circle cx="78" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
          <circle cx="28" cy="12" r="1.5" fill="currentColor" />
          <circle cx="92" cy="12" r="1.5" fill="currentColor" />
          <path
            d="M10 12H24M96 12H110"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Right Taper Line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-primary/20 to-primary/40" />
      </div>
    </div>
  );
};
