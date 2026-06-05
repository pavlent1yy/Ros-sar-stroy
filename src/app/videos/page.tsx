import VideoGallery from "@/components/VideoGallery";

export default function VideosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">

      {/* BACKGROUND (облегчён) */}
      <div className="blueprint-grid opacity-40 pointer-events-none" />

      <div className="absolute inset-0 bg-white/80" />

      {/* убрал radial-gradient — он дорогой на мобилках */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        <h1 className="text-3xl sm:text-5xl font-bold gradient-text">
          Видео с объектов
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
          Реальные работы с наших строительных площадок: процесс, этапы и результат.
        </p>

        <div className="mt-8 sm:mt-10">
          <VideoGallery />
        </div>

      </div>
    </main>
  );
}