"use client";

import { useEffect } from "react";
import { trackViewContent } from "@/lib/fpixel";

interface MetaPixelViewContentTrackerProps {
  propertyId: string;
  propertyName: string;
  price?: number;
}

export default function MetaPixelViewContentTracker({
  propertyId,
  propertyName,
  price,
}: MetaPixelViewContentTrackerProps) {
  useEffect(() => {
    trackViewContent({
      content_ids: [propertyId],
      content_name: propertyName,
      content_type: "product",
      content_category: "penginapan",
      ...(price !== undefined ? { value: price, currency: "IDR" } : {}),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyId]);

  return null;
}
