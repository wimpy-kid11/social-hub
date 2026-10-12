"use client";

import { useState } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import { formatCount, type Post } from "@/lib/data";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likes, setLikes] = useState(post.likes);
  const [showDoubleTap, setShowDoubleTap] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <article className="border-b border-border">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar
            src={post.user.avatar}
            alt={post.user.displayName}
            size="sm"
            hasStory
            hasUnseenStory
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold">{post.user.username}</span>
              {post.user.isVerified && (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-primary">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            {post.location && (
              <p className="text-xs text-muted">{post.location}</p>
            )}
          </div>
        </div>
        <button className="text-muted hover:text-foreground transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 6.75a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative bg-surface aspect-square" onDoubleClick={handleDoubleTap}>
        <Image
          src={post.images[currentImageIndex]}
          alt={post.caption}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 480px"
        />

        {/* Double tap heart */}
        {showDoubleTap && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24 drop-shadow-lg animate-like">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
        )}

        {/* Carousel indicators */}
        {post.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {post.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === currentImageIndex
                    ? "bg-primary w-4"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-4 pt-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="transition-transform active:scale-75">
              {isLiked ? (
                <svg viewBox="0 0 24 24" fill="#ef4444" className="w-7 h-7 animate-like">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              )}
            </button>
            <button className="text-foreground hover:text-muted transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
            </button>
            <button className="text-foreground hover:text-muted transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="transition-transform active:scale-75"
          >
            {isSaved ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            )}
          </button>
        </div>

        <p className="text-sm font-semibold">{formatCount(likes)} likes</p>

        <div className="mt-1">
          <p className="text-sm">
            <span className="font-semibold mr-1">{post.user.username}</span>
            {post.caption}
          </p>
          {post.tags && (
            <div className="flex flex-wrap gap-1 mt-1">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm text-primary hover:underline cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.comments > 0 && (
          <button className="text-sm text-muted mt-1 block">
            View all {formatCount(post.comments)} comments
          </button>
        )}

        <p className="text-[11px] text-muted mt-1 uppercase tracking-wide">{post.timestamp}</p>
      </div>

      {/* Comment input */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-indigo-400 to-pink-400" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted"
        />
        <button className="text-primary text-sm font-semibold opacity-50 hover:opacity-100 transition-opacity">
          Post
        </button>
      </div>
    </article>
  );
}
