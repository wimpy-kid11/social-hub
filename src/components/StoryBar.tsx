"use client";

import Avatar from "./Avatar";
import { stories, currentUser } from "@/lib/data";

export default function StoryBar() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-3 hide-scrollbar">
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="relative">
          <Avatar src={currentUser.avatar} alt={currentUser.displayName} size="lg" />
          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center border-2 border-background">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        </div>
        <span className="text-[11px] text-muted w-14 text-center truncate">Your story</span>
      </div>

      {stories.map((story) => (
        <button
          key={story.id}
          className="flex flex-col items-center gap-1 flex-shrink-0 group"
        >
          <Avatar
            src={story.user.avatar}
            alt={story.user.displayName}
            size="lg"
            hasStory
            hasUnseenStory={story.hasUnseen}
          />
          <span className="text-[11px] text-muted group-hover:text-foreground transition-colors w-14 text-center truncate">
            {story.user.username.split(".")[0]}
          </span>
        </button>
      ))}
    </div>
  );
}
