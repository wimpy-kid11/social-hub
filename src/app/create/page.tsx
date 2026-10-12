"use client";

import { useState, useRef } from "react";

const tabs = ["Post", "Reel", "Story", "Live"];

export default function CreatePage() {
  const [activeTab, setActiveTab] = useState("Post");
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileSelect = () => {
    setSelectedFile("https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=800&fit=crop");
  };

  return (
    <div className="max-w-[600px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3 border-b border-border flex items-center justify-between">
        <h2 className="text-xl font-bold">Create</h2>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-semibold transition-colors border-b-2 ${
              activeTab === tab
                ? "border-foreground text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "Post" && (
          <div className="flex flex-col items-center">
            {selectedFile ? (
              <div className="w-full">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={selectedFile}
                    alt="Selected"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <textarea
                  placeholder="Write a caption..."
                  className="w-full bg-surface-hover rounded-xl px-4 py-3 text-sm outline-none resize-none h-24 placeholder:text-muted"
                />
                <div className="flex items-center justify-between py-3">
                  <button className="text-sm text-muted hover:text-foreground flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Add location
                  </button>
                  <button className="text-sm text-muted hover:text-foreground flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                    Tag people
                  </button>
                </div>
                <button className="w-full py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-colors">
                  Share
                </button>
              </div>
            ) : (
              <>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={handleFileSelect}
                  className={`w-full aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-muted"
                  }`}
                >
                  <div className="w-20 h-20 rounded-full bg-surface-hover flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 text-muted">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold">Drag photos and videos here</p>
                    <p className="text-sm text-muted mt-1">or tap to select from your device</p>
                  </div>
                  <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                    Select from device
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "Reel" && (
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[9/16] max-h-[600px] rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-muted transition-all">
              <div className="w-20 h-20 rounded-full bg-surface-hover flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 text-muted">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Create a Reel</p>
                <p className="text-sm text-muted mt-1">Record or upload a short video</p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                  Record
                </button>
                <button className="px-6 py-2.5 bg-surface-hover text-foreground text-sm font-semibold rounded-lg hover:bg-border transition-colors">
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Story" && (
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[9/16] max-h-[600px] rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-muted transition-all">
              <div className="w-20 h-20 rounded-full bg-surface-hover flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10 text-muted">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">Create a Story</p>
                <p className="text-sm text-muted mt-1">Share a moment that disappears in 24 hours</p>
              </div>
              <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
                Open Camera
              </button>
            </div>
          </div>
        )}

        {activeTab === "Live" && (
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[9/16] max-h-[600px] rounded-2xl bg-gradient-to-b from-indigo-900/30 via-purple-900/30 to-pink-900/30 border-2 border-border flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-white">Go Live</p>
                <p className="text-sm text-white/60 mt-1">Broadcast to your followers in real time</p>
              </div>
              <button className="px-8 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors">
                Start Live Video
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
