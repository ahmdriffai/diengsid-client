"use client";

import { useEffect, useRef } from "react";
import { trackPurchase } from "@/lib/fpixel";
import { useGetBooking } from "@/features/book/hooks/useGetBooking";

interface MetaPixelPurchaseTrackerProps {
  bookingId: string;
}

export default function MetaPixelPurchaseTracker({
  bookingId,
}: MetaPixelPurchaseTrackerProps) {
  const { data, isLoading } = useGetBooking(bookingId);
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current || isLoading || !data?.data) return;

    const booking = data.data;

    if (booking.payment_status !== "PAID") return;

    fired.current = true;

    trackPurchase({
      content_ids: [booking.property_id],
      content_type: "product",
      content_category: "penginapan",
      value: booking.total_price,
      currency: "IDR",
      num_items: booking.quantity,
    });
  }, [data, isLoading]);

  return null;
}
