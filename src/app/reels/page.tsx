"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import ReelCard from "@/components/ReelCard";
import { reels } from "@/lib/data";

export default function ReelsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const height = containerRef.current.clientHeight;
    const index = Math.round(scrollTop / height);
    setActiveIndex(index);
  }, []);

  return (
    <div className="h-[calc(100vh-4rem)] md:h-screen max-w-[480px] mx-auto">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-3 pointer-events-none">
        <h1 className="text-xl font-bold text-white drop-shadow-lg">Reels</h1>
        <button className="pointer-events-auto text-white drop-shadow-lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
          </svg>
        </button>
      </div>

      {/* Reels feed */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full overflow-y-scroll snap-y-mandatory hide-scrollbar"
      >
        {reels.map((reel, i) => (
          <div key={reel.id} className="h-full">
            <ReelCard reel={reel} isActive={i === activeIndex} />
          </div>
        ))}
      </div>
    </div>
  );
}
