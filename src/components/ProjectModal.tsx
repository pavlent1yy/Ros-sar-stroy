"use client";

import { useEffect } from "react";

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: any;
}) {
  // preload image (сильно снижает лаг при открытии)
  useEffect(() => {
    if (!open || !project?.image) return;
    const img = new Image();
    img.src = project.image;
  }, [open, project]);

  if (!open || !project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-xl w-full rounded-2xl overflow-hidden shadow-xl"
      >
        {/* image */}
        <img
          src={project.image}
          alt={project.title}
          loading="eager"
          decoding="async"
          className="w-full h-64 object-cover"
        />

        {/* content */}
        <div className="p-6 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-blue-700">
            {project.title}
          </h2>

          <p className="text-gray-600">{project.location}</p>

          {project.description && (
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.description}
            </p>
          )}

          <button
            onClick={onClose}
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}