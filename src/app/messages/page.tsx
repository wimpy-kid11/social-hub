"use client";

import { useState } from "react";
import Avatar from "@/components/Avatar";
import { messages } from "@/lib/data";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<string | null>(null);

  return (
    <div className="flex h-[calc(100vh-4rem)] md:h-screen max-w-[935px] mx-auto">
      {/* Conversations List */}
      <div className={`w-full md:w-[350px] border-r border-border flex flex-col ${activeChat ? "hidden md:flex" : "flex"}`}>
        <div className="px-4 py-4 border-b border-border flex items-center justify-between">
          <h2 className="text-xl font-bold">Messages</h2>
          <button className="text-muted hover:text-foreground transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {messages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => setActiveChat(msg.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface-hover ${
                activeChat === msg.id ? "bg-surface-hover" : ""
              }`}
            >
              <Avatar
                src={msg.user.avatar}
                alt={msg.user.displayName}
                size="lg"
                isOnline={msg.isOnline}
              />
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">{msg.user.username}</span>
                  <span className="text-xs text-muted flex-shrink-0">{msg.timestamp}</span>
                </div>
                <p className={`text-sm truncate ${msg.unread > 0 ? "text-foreground font-medium" : "text-muted"}`}>
                  {msg.lastMessage}
                </p>
              </div>
              {msg.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0">
                  {msg.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat View */}
      <div className={`flex-1 flex flex-col ${activeChat ? "flex" : "hidden md:flex"}`}>
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-border flex items-center gap-3">
              <button
                onClick={() => setActiveChat(null)}
                className="md:hidden text-muted hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              {(() => {
                const msg = messages.find((m) => m.id === activeChat);
                if (!msg) return null;
                return (
                  <>
                    <Avatar src={msg.user.avatar} alt={msg.user.displayName} size="md" isOnline={msg.isOnline} />
                    <div>
                      <p className="font-semibold text-sm">{msg.user.displayName}</p>
                      <p className="text-xs text-muted">Active now</p>
                    </div>
                  </>
                );
              })()}
              <div className="ml-auto flex items-center gap-3 text-muted">
                <button className="hover:text-foreground transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </button>
                <button className="hover:text-foreground transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="text-center">
                <p className="text-xs text-muted">Today</p>
              </div>
              <div className="flex gap-3 max-w-[70%]">
                <Avatar src={messages.find((m) => m.id === activeChat)?.user.avatar || ""} alt="" size="sm" />
                <div className="bg-surface-hover rounded-2xl rounded-tl-none px-4 py-2.5">
                  <p className="text-sm">{messages.find((m) => m.id === activeChat)?.lastMessage}</p>
                  <p className="text-[10px] text-muted mt-1">2:30 PM</p>
                </div>
              </div>
              <div className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse">
                <div className="bg-primary rounded-2xl rounded-tr-none px-4 py-2.5">
                  <p className="text-sm text-white">That sounds great!</p>
                  <p className="text-[10px] text-white/60 mt-1">2:32 PM</p>
                </div>
              </div>
              <div className="flex gap-3 max-w-[70%]">
                <Avatar src={messages.find((m) => m.id === activeChat)?.user.avatar || ""} alt="" size="sm" />
                <div className="bg-surface-hover rounded-2xl rounded-tl-none px-4 py-2.5">
                  <p className="text-sm">Let me know when you&apos;re free!</p>
                  <p className="text-[10px] text-muted mt-1">2:35 PM</p>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border">
              <div className="flex items-center gap-3 bg-surface-hover rounded-2xl px-4 py-2">
                <button className="text-muted hover:text-foreground transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Message..."
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
                />
                <button className="text-muted hover:text-foreground transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </button>
                <button className="text-primary hover:text-primary-hover transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-24 h-24 rounded-full border-2 border-muted flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-12 h-12 text-muted">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-1">Your messages</h3>
            <p className="text-sm text-muted mb-4">Send private photos and messages to a friend or group.</p>
            <button className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-hover transition-colors">
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
