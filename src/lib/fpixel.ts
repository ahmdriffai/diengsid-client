// lib/fpixel.ts

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export interface FbPixelEventParams {
  content_ids?: string[];
  content_type?: string;
  content_name?: string;
  value?: number;
  currency?: string;
  num_items?: number;
  status?: string;
  [key: string]: string | number | string[] | undefined;
}

export const pageview = (): void => {
  if (typeof window.fbq !== "function") return;
  window.fbq("track", "PageView");
};

export const trackEvent = (
  name: string,
  options: FbPixelEventParams = {},
): void => {
  if (typeof window.fbq !== "function") return;
  window.fbq("track", name, options);
};

export const trackCustomEvent = (
  name: string,
  options: FbPixelEventParams = {},
): void => {
  if (typeof window.fbq !== "function") return;
  window.fbq("trackCustom", name, options);
};
