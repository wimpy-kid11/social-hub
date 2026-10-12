"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import { formatCount, type Reel } from "@/lib/data";

interface ReelCardProps {
  reel: Reel;
  isActive: boolean;
}

export default function ReelCard({ reel, isActive }: ReelCardProps) {
  const [isLiked, setIsLiked] = useState(reel.isLiked);
  const [isSaved, setIsSaved] = useState(reel.isSaved);
  const [likes, setLikes] = useState(reel.likes);
  const [showDoubleTap, setShowDoubleTap] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleDoubleTap = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikes((l) => l + 1);
    }
    setShowDoubleTap(true);
    setTimeout(() => setShowDoubleTap(false), 800);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((l) => (isLiked ? l - 1 : l + 1));
  };

  return (
    <div className="relative w-full h-full snap-start bg-black">
      {/* Background image simulating video */}
      <div className="absolute inset-0" onDoubleClick={handleDoubleTap}>
        <Image
          src={reel.videoThumbnail}
          alt={reel.caption}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* Double tap heart */}
      {showDoubleTap && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <svg viewBox="0 0 24 24" fill="white" className="w-28 h-28 drop-shadow-2xl animate-like">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
      )}

      {/* Right side actions */}
      <div className="absolute right-3 bottom-28 flex flex-col items-center gap-5 z-10">
        <button onClick={handleLike} className="flex flex-col items-center gap-1 transition-transform active:scale-75">
          {isLiked ? (
            <svg viewBox="0 0 24 24" fill="#ef4444" className="w-8 h-8">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          )}
          <span className="text-white text-xs font-semibold drop-shadow-lg">{formatCount(likes)}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-8 h-8 drop-shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>
          <span className="text-white text-xs font-semibold drop-shadow-lg">{formatCount(reel.comments)}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-8 h-8 drop-shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
          <span className="text-white text-xs font-semibold drop-shadow-lg">{formatCount(reel.shares)}</span>
        </button>

        <button onClick={() => setIsSaved(!isSaved)} className="transition-transform active:scale-75">
          {isSaved ? (
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 drop-shadow-lg">
              <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-8 h-8 drop-shadow-lg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          )}
        </button>

        {/* Audio disc */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 mt-2">
          <div className={`w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ${isActive ? "animate-spin" : ""}`} style={{ animationDuration: "3s" }} />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-16 p-4 z-10">
        <div className="flex items-center gap-2 mb-2">
          <Avatar src={reel.user.avatar} alt={reel.user.displayName} size="sm" />
          <span className="text-white font-semibold text-sm drop-shadow-lg">{reel.user.username}</span>
          {reel.user.isVerified && (
            <svg viewBox="0 0 24 24" fill="#818cf8" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          )}
          {!isFollowing && (
            <button
              onClick={() => setIsFollowing(true)}
              className="ml-2 px-4 py-1 text-xs font-semibold text-white border border-white/40 rounded-lg hover:bg-white/10 transition-colors"
            >
              Follow
            </button>
          )}
        </div>
        <p className="text-white text-sm drop-shadow-lg line-clamp-2 mb-2">{reel.caption}</p>

        {/* Music */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
          <div className="overflow-hidden">
            <p className="text-white text-xs drop-shadow-lg whitespace-nowrap animate-marquee">{reel.music}</p>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-20">
          <div className="h-full bg-white animate-progress" />
        </div>
      )}
    </div>
  );
}
