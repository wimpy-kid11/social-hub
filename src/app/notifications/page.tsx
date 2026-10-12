"use client";

import Avatar from "@/components/Avatar";
import { notifications } from "@/lib/data";

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.isRead);
  const read = notifications.filter((n) => n.isRead);

  return (
    <div className="max-w-[600px] mx-auto">
      {/* Header */}
      <div className="sticky top-0 z-40 glass px-4 py-3 border-b border-border">
        <h2 className="text-xl font-bold">Notifications</h2>
      </div>

      {/* Unread */}
      {unread.length > 0 && (
        <div>
          <h3 className="px-4 py-3 text-sm font-semibold">New</h3>
          {unread.map((n) => (
            <NotificationItem key={n.id} notification={n} />
          ))}
        </div>
      )}

      {/* Read */}
      {read.length > 0 && (
        <div>
          <h3 className="px-4 py-3 text-sm font-semibold text-muted">Earlier</h3>
          {read.map((n) => (
            <NotificationItem key={n.id} notification={n} />
          ))}
        </div>
      )}
    </div>
  );
}

function NotificationItem({ notification: n }: { notification: typeof notifications[0] }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 transition-colors hover:bg-surface-hover cursor-pointer ${!n.isRead ? "bg-surface-hover/50" : ""}`}>
      <Avatar
        src={n.user.avatar}
        alt={n.user.displayName}
        size="md"
        showRing={!n.isRead}
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-semibold">{n.user.username}</span>{" "}
          <span className="text-muted">{n.content || n.type}</span>
        </p>
        <p className="text-xs text-muted mt-0.5">{n.timestamp}</p>
      </div>
      {n.postThumbnail ? (
        <div className="w-11 h-11 rounded-md overflow-hidden flex-shrink-0 relative">
          <img
            src={n.postThumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ) : n.type === "follow" ? (
        <button className="px-5 py-1.5 bg-primary text-white text-xs font-semibold rounded-lg hover:bg-primary-hover transition-colors flex-shrink-0">
          Follow
        </button>
      ) : null}
    </div>
  );
}
