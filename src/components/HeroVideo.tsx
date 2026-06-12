import { useEffect, useRef, useState } from "react";
import heroMp4 from "@/assets/hero-opt.mp4.asset.json";

// Lovable-hosted video CDN base, so the video also resolves when the app is
// deployed off-platform (e.g. Vercel) where the relative /__l5e path won't exist.
const ASSET_BASE = "https://project--838b7c83-8760-49fb-966a-b5133a6aedc6.lovable.app";

type HeroVideoProps = {
  poster: string;
  fallback: string;
  fallbackAlt: string;
  className?: string;
};

/**
 * Hero video with poster + image fallback.
 * The video sources are only mounted after the page is idle and the element
 * is in view, keeping the LCP/Lighthouse score high on mobile. Honors the
 * user's reduced-motion and data-saver preferences by skipping the video.
 */
export function HeroVideo({ poster, fallback, fallbackAlt, className }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // @ts-expect-error - Network Information API is not in all TS libs
    const conn = navigator.connection;
    const saveData = conn?.saveData === true;
    const slow = conn && /2g/.test(conn.effectiveType ?? "");
    if (prefersReducedMotion || saveData || slow) return;

    // The hero is above the fold, so mount the video right away.
    const start = () => setLoad(true);
    if ("requestIdleCallback" in window) {
      (window as unknown as {
        requestIdleCallback: (cb: () => void) => void;
      }).requestIdleCallback(start);
    } else {
      setTimeout(start, 100);
    }
  }, []);

  useEffect(() => {
    if (load && videoRef.current) {
      videoRef.current.load();
    }
  }, [load]);

  return (
    <div ref={containerRef} className={className}>
      {/* Poster/fallback image: always painted, becomes the LCP element */}
      <img
        src={fallback}
        alt={fallbackAlt}
        width={1600}
        height={900}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />
      {load && (
        <video
          ref={videoRef}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover object-right transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={`${ASSET_BASE}${heroMp4.url}`} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
