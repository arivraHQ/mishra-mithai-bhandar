"use client";

import React, { useState } from "react";
import { OccasionsStrip } from "./OccasionsStrip";
import { Catalog } from "./Catalog";

export const CatalogSection: React.FC = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");

  return (
    <>
      {/* 3. Occasions Filter Strip */}
      <OccasionsStrip
        selectedOccasion={selectedOccasion}
        onSelectOccasion={setSelectedOccasion}
      />

      {/* 4. Complete 16-Product Asymmetric Catalog */}
      <Catalog selectedOccasion={selectedOccasion} />
    </>
  );
};
