import VideoGallery from "@/components/VideoGallery";

export default function VideosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">

      {/* BACKGROUND */}
      <div className="blueprint-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">

        <h1 className="text-3xl sm:text-5xl font-bold gradient-text">
          Видео с объектов
        </h1>

        <p className="mt-4 text-slate-600 max-w-2xl text-base sm:text-lg leading-relaxed">
          Реальные работы с наших строительных площадок: процесс, этапы и результат.
        </p>

        <div className="mt-10">
          <VideoGallery />
        </div>

      </div>
    </main>
  );
}