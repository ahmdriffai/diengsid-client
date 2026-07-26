export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export interface FbPixelEventParams {
  content_ids?: string[];
  content_type?: string;
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  num_items?: number;
  status?: string;
  search_string?: string;
  [key: string]: string | number | string[] | undefined;
}

const isFbqReady = (): boolean =>
  typeof window !== "undefined" && typeof window.fbq === "function";

// ── PageView ──
// Dipanggil oleh MetaPixelPageTracker tiap ganti halaman
export const pageview = (): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "PageView");
};

// ── Search ──
// Panggil saat user submit pencarian (misal cari penginapan/destinasi)
export const trackSearch = (
  searchString: string,
  extra: FbPixelEventParams = {},
): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "Search", {
    search_string: searchString,
    ...extra,
  });
};

// ── ViewContent ──
// Panggil saat user membuka halaman detail properti/produk
export const trackViewContent = (params: FbPixelEventParams): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "ViewContent", params);
};

// ── InitiateCheckout ──
// Panggil saat user klik tombol "Pesan Sekarang" / mulai checkout
export const trackInitiateCheckout = (params: FbPixelEventParams): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "InitiateCheckout", params);
};

// ── Purchase ──
// Panggil HANYA setelah pembayaran benar-benar berhasil (bukan saat submit)
export const trackPurchase = (params: FbPixelEventParams): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "Purchase", params);
};

// ── Contact ──
// Panggil saat user klik tombol kontak (WhatsApp, telepon, dll)
export const trackContact = (extra: FbPixelEventParams = {}): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "Contact", extra);
};

// ── CompleteRegistration ──
// Panggil setelah user berhasil membuat akun
export const trackCompleteRegistration = (
  extra: FbPixelEventParams = {},
): void => {
  if (!isFbqReady()) return;
  window.fbq("track", "CompleteRegistration", extra);
};

// ── Generic (jaga-jaga untuk event lain di masa depan) ──
export const trackEvent = (
  name: string,
  options: FbPixelEventParams = {},
): void => {
  if (!isFbqReady()) return;
  window.fbq("track", name, options);
};

export const trackCustomEvent = (
  name: string,
  options: FbPixelEventParams = {},
): void => {
  if (!isFbqReady()) return;
  window.fbq("trackCustom", name, options);
};
