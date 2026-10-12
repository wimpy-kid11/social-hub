"use client";

import StoryBar from "@/components/StoryBar";
import PostCard from "@/components/PostCard";
import SuggestedUser from "@/components/SuggestedUser";
import { posts } from "@/lib/data";

const users = [
  {
    id: "1",
    username: "sarah.creates",
    displayName: "Sarah Chen",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&backgroundColor=f472b6",
    bio: "Photographer & filmmaker",
    followers: 156000,
    following: 342,
    posts: 891,
    isVerified: true,
  },
  {
    id: "4",
    username: "jake.travel",
    displayName: "Jake Rivera",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jake&backgroundColor=f97316",
    bio: "Travel blogger | 47 countries",
    followers: 312000,
    following: 445,
    posts: 2341,
    isVerified: true,
  },
  {
    id: "6",
    username: "dev.ryan",
    displayName: "Ryan Park",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ryan&backgroundColor=14b8a6",
    bio: "Full-stack developer",
    followers: 45200,
    following: 678,
    posts: 234,
    isVerified: false,
  },
  {
    id: "8",
    username: "omar.music",
    displayName: "Omar Hassan",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Omar&backgroundColor=06b6d4",
    bio: "Producer & DJ",
    followers: 421000,
    following: 234,
    posts: 890,
    isVerified: true,
  },
];

export default function HomePage() {
  return (
    <div className="flex max-w-[935px] mx-auto">
      {/* Main Feed */}
      <div className="flex-1 max-w-[470px] mx-auto md:mx-0">
        {/* Header */}
        <div className="sticky top-0 z-40 glass px-4 py-3 flex items-center justify-between border-b border-border">
          <h1 className="text-xl font-bold gradient-text">SocialHub</h1>
          <div className="flex items-center gap-4">
            <button className="relative text-muted hover:text-foreground transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="text-muted hover:text-foreground transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stories */}
        <div className="border-b border-border">
          <StoryBar />
        </div>

        {/* Posts */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right Sidebar - Desktop only */}
      <aside className="hidden lg:block w-[320px] pl-8 pt-6 flex-shrink-0">
        <div className="sticky top-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-muted">Suggested for you</h3>
            <button className="text-xs font-semibold text-primary hover:text-primary-hover">
              See All
            </button>
          </div>
          <div className="space-y-1">
            {users.map((user) => (
              <SuggestedUser key={user.id} user={user} />
            ))}
          </div>

          <div className="mt-8 text-xs text-muted/50 space-y-3">
            <div className="flex flex-wrap gap-x-2">
              <span className="hover:underline cursor-pointer">About</span>
              <span className="hover:underline cursor-pointer">Help</span>
              <span className="hover:underline cursor-pointer">Press</span>
              <span className="hover:underline cursor-pointer">API</span>
              <span className="hover:underline cursor-pointer">Jobs</span>
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span className="hover:underline cursor-pointer">Terms</span>
            </div>
            <p>© 2026 SocialHub</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
