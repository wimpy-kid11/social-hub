export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: number;
  isVerified: boolean;
}

export interface Story {
  id: string;
  user: User;
  hasUnseen: boolean;
  timestamp: string;
}

export interface Post {
  id: string;
  user: User;
  images: string[];
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  timestamp: string;
  isLiked: boolean;
  isSaved: boolean;
  type: "image" | "reel" | "carousel";
  location?: string;
  tags?: string[];
}

export interface Reel {
  id: string;
  user: User;
  videoThumbnail: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  isLiked: boolean;
  isSaved: boolean;
  music: string;
  duration: number;
  tags?: string[];
}

export interface Message {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isOnline: boolean;
}

export interface Notification {
  id: string;
  type: "like" | "comment" | "follow" | "mention" | "repost";
  user: User;
  content?: string;
  timestamp: string;
  postThumbnail?: string;
  isRead: boolean;
}

export const currentUser: User = {
  id: "me",
  username: "alex.design",
  displayName: "Alex Morgan",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&backgroundColor=65a30d",
  bio: "Digital creator & designer. Building the future of social media.",
  followers: 24500,
  following: 892,
  posts: 347,
  isVerified: true,
};

const users: User[] = [
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
    id: "2",
    username: "marcus.fit",
    displayName: "Marcus Johnson",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus&backgroundColor=3b82f6",
    bio: "Fitness coach & nutritionist",
    followers: 89400,
    following: 567,
    posts: 1203,
    isVerified: false,
  },
  {
    id: "3",
    username: "luna.art",
    displayName: "Luna Kim",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Luna&backgroundColor=a855f7",
    bio: "Digital artist & NFT creator",
    followers: 234000,
    following: 189,
    posts: 567,
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
    id: "5",
    username: "mia.cooks",
    displayName: "Mia Thompson",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mia&backgroundColor=ef4444",
    bio: "Chef & food stylist",
    followers: 67800,
    following: 234,
    posts: 445,
    isVerified: false,
  },
  {
    id: "6",
    username: "dev.ryan",
    displayName: "Ryan Park",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ryan&backgroundColor=14b8a6",
    bio: "Full-stack developer. Open source contributor.",
    followers: 45200,
    following: 678,
    posts: 234,
    isVerified: false,
  },
  {
    id: "7",
    username: "nina.style",
    displayName: "Nina Patel",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nina&backgroundColor=eab308",
    bio: "Fashion designer & stylist",
    followers: 198000,
    following: 312,
    posts: 1567,
    isVerified: true,
  },
  {
    id: "8",
    username: "omar.music",
    displayName: "Omar Hassan",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Omar&backgroundColor=06b6d4",
    bio: "Producer & DJ | New album out now",
    followers: 421000,
    following: 234,
    posts: 890,
    isVerified: true,
  },
];

const sampleImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=800&fit=crop",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&h=800&fit=crop",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=800&fit=crop",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=1000&fit=crop",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
];

export const stories: Story[] = users.map((user, i) => ({
  id: `story-${i}`,
  user,
  hasUnseen: i % 3 !== 0,
  timestamp: `${Math.floor(Math.random() * 12) + 1}h`,
}));

export const posts: Post[] = [
  {
    id: "p1",
    user: users[0],
    images: [sampleImages[0], sampleImages[1]],
    caption: "Golden hour at its finest. Nature never disappoints.",
    likes: 12453,
    comments: 342,
    shares: 89,
    saves: 1203,
    timestamp: "2h",
    isLiked: false,
    isSaved: false,
    type: "carousel",
    location: "Big Sur, California",
    tags: ["nature", "goldenhour", "photography"],
  },
  {
    id: "p2",
    user: users[2],
    images: [sampleImages[4]],
    caption: "New piece dropping tomorrow. Stay tuned.",
    likes: 23412,
    comments: 891,
    shares: 234,
    saves: 4523,
    timestamp: "4h",
    isLiked: true,
    isSaved: true,
    type: "image",
    tags: ["art", "digitalart", "nft"],
  },
  {
    id: "p3",
    user: users[3],
    images: [sampleImages[5]],
    caption: "Found paradise. Sometimes you just have to get lost to find yourself.",
    likes: 45231,
    comments: 1234,
    shares: 567,
    saves: 8901,
    timestamp: "6h",
    isLiked: false,
    isSaved: false,
    type: "image",
    location: "Bali, Indonesia",
    tags: ["travel", "wanderlust", "bali"],
  },
  {
    id: "p4",
    user: users[4],
    images: [sampleImages[9]],
    caption: "Beach vibes and salty hair. Weekend mood.",
    likes: 8923,
    comments: 234,
    shares: 67,
    saves: 543,
    timestamp: "8h",
    isLiked: false,
    isSaved: false,
    type: "image",
    location: "Maldives",
    tags: ["beach", "ocean", "weekend"],
  },
  {
    id: "p5",
    user: users[6],
    images: [sampleImages[12], sampleImages[13], sampleImages[14]],
    caption: "Fall collection preview. What do you think?",
    likes: 34521,
    comments: 1567,
    shares: 890,
    saves: 6789,
    timestamp: "12h",
    isLiked: true,
    isSaved: false,
    type: "carousel",
    tags: ["fashion", "fallfashion", "style"],
  },
  {
    id: "p6",
    user: users[1],
    images: [sampleImages[2]],
    caption: "Early morning grind. No excuses.",
    likes: 5678,
    comments: 89,
    shares: 34,
    saves: 234,
    timestamp: "1d",
    isLiked: false,
    isSaved: false,
    type: "image",
    tags: ["fitness", "motivation", "gym"],
  },
];

export const reels: Reel[] = [
  {
    id: "r1",
    user: users[0],
    videoThumbnail: sampleImages[0],
    caption: "Wait for the sunset. It's worth it.",
    likes: 234521,
    comments: 4532,
    shares: 12343,
    saves: 23421,
    isLiked: false,
    isSaved: false,
    music: "Original Audio - sarah.creates",
    duration: 30,
    tags: ["nature", "sunset", "viral"],
  },
  {
    id: "r2",
    user: users[2],
    videoThumbnail: sampleImages[4],
    caption: "Painting process. 48 hours in 30 seconds.",
    likes: 567432,
    comments: 8923,
    shares: 23456,
    saves: 45321,
    isLiked: true,
    isSaved: true,
    music: "Ambient Waves - luna.art",
    duration: 45,
    tags: ["art", "process", "satisfying"],
  },
  {
    id: "r3",
    user: users[3],
    videoThumbnail: sampleImages[5],
    caption: "POV: You're on top of the world.",
    likes: 891234,
    comments: 12345,
    shares: 45678,
    saves: 67890,
    isLiked: false,
    isSaved: false,
    music: "Adventure Awaits - jake.travel",
    duration: 15,
    tags: ["travel", "adventure", "mountains"],
  },
  {
    id: "r4",
    user: users[4],
    videoThumbnail: sampleImages[9],
    caption: "Making the perfect pasta. Secret ingredient: love.",
    likes: 123456,
    comments: 2345,
    shares: 5678,
    saves: 12345,
    isLiked: false,
    isSaved: false,
    music: "Italian Kitchen - mia.cooks",
    duration: 60,
    tags: ["cooking", "recipe", "food"],
  },
  {
    id: "r5",
    user: users[7],
    videoThumbnail: sampleImages[16],
    caption: "New beat just dropped. What do you think?",
    likes: 345678,
    comments: 6789,
    shares: 12345,
    saves: 23456,
    isLiked: true,
    isSaved: false,
    music: "Original Sound - omar.music",
    duration: 30,
    tags: ["music", "producer", "beat"],
  },
  {
    id: "r6",
    user: users[5],
    videoThumbnail: sampleImages[10],
    caption: "Built this app in 24 hours. Here's the demo.",
    likes: 67890,
    comments: 1234,
    shares: 3456,
    saves: 8901,
    isLiked: false,
    isSaved: false,
    music: "Coding Mode - dev.ryan",
    duration: 45,
    tags: ["coding", "tech", "webdev"],
  },
];

export const messages: Message[] = [
  {
    id: "m1",
    user: users[0],
    lastMessage: "Love the new design! Let's collab.",
    timestamp: "2m",
    unread: 2,
    isOnline: true,
  },
  {
    id: "m2",
    user: users[2],
    lastMessage: "Thanks for the feature! 🎨",
    timestamp: "15m",
    unread: 0,
    isOnline: true,
  },
  {
    id: "m3",
    user: users[3],
    lastMessage: "Check out this photo from Bali!",
    timestamp: "1h",
    unread: 1,
    isOnline: false,
  },
  {
    id: "m4",
    user: users[6],
    lastMessage: "The collection looks amazing.",
    timestamp: "3h",
    unread: 0,
    isOnline: false,
  },
  {
    id: "m5",
    user: users[7],
    lastMessage: "New track is fire 🔥",
    timestamp: "5h",
    unread: 0,
    isOnline: true,
  },
  {
    id: "m6",
    user: users[4],
    lastMessage: "Recipe incoming!",
    timestamp: "1d",
    unread: 0,
    isOnline: false,
  },
  {
    id: "m7",
    user: users[5],
    lastMessage: "Pull request approved!",
    timestamp: "2d",
    unread: 0,
    isOnline: false,
  },
  {
    id: "m8",
    user: users[1],
    lastMessage: "Gym session tomorrow?",
    timestamp: "3d",
    unread: 0,
    isOnline: false,
  },
];

export const notifications: Notification[] = [
  {
    id: "n1",
    type: "like",
    user: users[0],
    content: "liked your photo",
    timestamp: "2m",
    postThumbnail: sampleImages[0],
    isRead: false,
  },
  {
    id: "n2",
    type: "comment",
    user: users[2],
    content: "commented: This is incredible!",
    timestamp: "10m",
    postThumbnail: sampleImages[4],
    isRead: false,
  },
  {
    id: "n3",
    type: "follow",
    user: users[3],
    timestamp: "30m",
    isRead: false,
  },
  {
    id: "n4",
    type: "like",
    user: users[4],
    content: "liked your reel",
    timestamp: "1h",
    postThumbnail: sampleImages[9],
    isRead: true,
  },
  {
    id: "n5",
    type: "mention",
    user: users[6],
    content: "mentioned you in a comment",
    timestamp: "2h",
    postThumbnail: sampleImages[12],
    isRead: true,
  },
  {
    id: "n6",
    type: "follow",
    user: users[7],
    timestamp: "4h",
    isRead: true,
  },
  {
    id: "n7",
    type: "repost",
    user: users[1],
    content: "reposted your reel",
    timestamp: "6h",
    postThumbnail: sampleImages[2],
    isRead: true,
  },
  {
    id: "n8",
    type: "like",
    user: users[5],
    content: "and 23 others liked your post",
    timestamp: "8h",
    postThumbnail: sampleImages[5],
    isRead: true,
  },
  {
    id: "n9",
    type: "comment",
    user: users[0],
    content: "commented: Where was this taken?",
    timestamp: "1d",
    postThumbnail: sampleImages[6],
    isRead: true,
  },
  {
    id: "n10",
    type: "follow",
    user: users[1],
    timestamp: "2d",
    isRead: true,
  },
];

export const exploreImages = [
  sampleImages[0], sampleImages[5], sampleImages[1], sampleImages[9],
  sampleImages[2], sampleImages[10], sampleImages[3], sampleImages[11],
  sampleImages[4], sampleImages[12], sampleImages[6], sampleImages[13],
  sampleImages[7], sampleImages[14], sampleImages[8], sampleImages[15],
  sampleImages[16], sampleImages[17],
];

export function formatCount(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
}
