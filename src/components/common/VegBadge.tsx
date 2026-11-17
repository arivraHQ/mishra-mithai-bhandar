import React from "react";

interface VegBadgeProps {
  size?: "sm" | "md";
  showLabel?: boolean;
}

/**
 * Authentic Indian 100% Vegetarian Green Square + Dot mark
 * Certified pure vegetarian sweets & snacks cue.
 */
export const VegBadge: React.FC<VegBadgeProps> = ({ size = "sm", showLabel = false }) => {
  const boxDim = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const dotDim = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";

  return (
    <div className="inline-flex items-center gap-1.5" title="100% Pure Vegetarian (शुद्ध शाकाहारी)">
      <span
        className={`inline-flex items-center justify-center border-[1.5px] border-green-veg rounded-[3px] p-[1.5px] ${boxDim}`}
        aria-hidden="true"
      >
        <span className={`bg-green-veg rounded-full ${dotDim}`} />
      </span>
      {showLabel && (
        <span className="text-xs font-semibold text-green-veg uppercase tracking-wider">
          100% Veg
        </span>
      )}
    </div>
  );
};
