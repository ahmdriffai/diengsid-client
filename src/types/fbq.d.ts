import type { FbPixelEventParams } from "@/lib/fpixel";

export {};

declare global {
  interface Window {
    fbq: {
      (command: "init", pixelId: string): void;
      (command: "track", eventName: string, params?: FbPixelEventParams): void;
      (
        command: "trackCustom",
        eventName: string,
        params?: FbPixelEventParams,
      ): void;
    };
  }
}
