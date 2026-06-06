"use client";

import { useState } from "react";
import Contacts from "./Contacts";

const videos = [
  "/videos/site1.mp4",
  "/videos/site2.mp4",
  "/videos/site3.mp4",
];

export default function VideoGallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      {/* GRID — НИКАКОГО PRELOAD ВИДЕО */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((src) => (
          <button
            key={src}
            onClick={() => setActive(src)}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/40 transition"
          >
            {/* thumbnail from first frame */}
            <video
              src={src}
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition"
              muted
              playsInline
              preload="metadata"
              poster={`${src}#t=0.1`}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 px-4 py-2 rounded-full text-sm backdrop-blur">
                ▶ Смотреть
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {active && <VideoModal src={active} onClose={() => setActive(null)} />}
	<Contacts />
    </>
  );
}

function VideoModal({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="none"
          className="w-full rounded-xl border border-white/10"
        />
      </div>
    </div>
  );
}