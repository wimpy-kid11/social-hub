"use client";

import { useState } from "react";
import ExploreGrid from "@/components/ExploreGrid";

const categories = ["All", "Travel", "Art", "Food", "Music", "Fashion", "Tech", "Nature"];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="max-w-[935px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3 border-b border-border">
        {/* Search */}
        <div className="relative mb-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-surface-hover rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none placeholder:text-muted"
          />
        </div>
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-surface-hover text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <ExploreGrid />
    </div>
  );
}
