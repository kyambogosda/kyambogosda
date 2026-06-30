import { FaTimes } from "react-icons/fa";

export default function VideoModal({ isOpen, videoId, onClose }) {
  if (!isOpen || !videoId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white text-primary hover:bg-gold hover:text-white transition-colors"
        >
          <FaTimes className="mx-auto" />
        </button>

        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Sermon"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
