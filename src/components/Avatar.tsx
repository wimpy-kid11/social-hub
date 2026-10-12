"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  hasStory?: boolean;
  hasUnseenStory?: boolean;
  isOnline?: boolean;
  showRing?: boolean;
}

export default function Avatar({
  src,
  alt,
  size = "md",
  hasStory = false,
  hasUnseenStory = false,
  isOnline = false,
  showRing = false,
}: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const ringSize = {
    xs: "w-8 h-8",
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-[88px] h-[88px]",
  };

  const imgSize = sizeClasses[size];

  if (hasStory) {
    return (
      <div className="relative flex items-center justify-center">
        <div
          className={`${
            ringSize[size]
          } flex items-center justify-center ${
            hasUnseenStory
              ? "bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500"
              : "bg-neutral-300 dark:bg-neutral-600"
          } rounded-full p-[2px]`}
        >
          <div className="bg-background rounded-full p-[2px]">
            <div className={`${imgSize} rounded-full overflow-hidden relative`}>
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                onError={() => setHasError(true)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className={`${imgSize} rounded-full overflow-hidden relative ${
          showRing
            ? "ring-2 ring-primary"
            : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
        />
      </div>
      {isOnline && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
      )}
    </div>
  );
}
