import { FaTimes } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import sasakuImg from "../../assets/sasaku.jpg";
import gentsImg from "../../assets/sasakugents-2.jpg";
import communityImg from "../../assets/gyd.jpg";
import poolImg from "../../assets/pool.jpg";

const galleryImgs = [
  { src: sasakuImg, alt: "SASAKU Choir", category: "all" },
  { src: gentsImg, alt: "SASAKU Gents", category: "socialday" },
  { src: communityImg, alt: "SASAKU community outreach", category: "outreach" },
  { src: poolImg, alt: "SASAKU Social Day out", category: "socialday" },
];

function GallerySection({
  galleryFilter,
  setGalleryFilter,
  showGalleryModal,
  setShowGalleryModal,
  selectedImage,
  setSelectedImage,
}) {
  const filteredGalleryImgs = galleryImgs.filter(
    (img) => galleryFilter === "all" || img.category === galleryFilter,
  );

  return (
    <>
      <section className="py-20 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Moments"
            title="Photo Gallery"
            subtitle="Snapshots from the SASAKU family."
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["all", "outreach", "socialday"].map((tab) => (
              <button
                key={tab}
                onClick={() => setGalleryFilter(tab)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest border-2 transition-all duration-200 ${
                  galleryFilter === tab
                    ? "bg-sky-600 border-sky-600 text-white"
                    : "border-gray-300 text-gray-500 hover:border-sky-600 hover:text-sky-600"
                }`}
              >
                {tab === "socialday"
                  ? "Social Day"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {filteredGalleryImgs.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden group aspect-square cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowGalleryModal(true)}
              className="bg-sky-600 text-white font-bold text-sm uppercase tracking-widest px-7 py-3 border-2 border-sky-600 hover:bg-transparent hover:text-sky-600 transition-all duration-300"
            >
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Modal - All Images */}
      {showGalleryModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowGalleryModal(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGalleryModal(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors flex items-center justify-center"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="p-6">
              <h2 className="font-heading text-slate-800 text-2xl font-bold mb-4">
                All Gallery Images
              </h2>

              {/* Filter Tabs in Modal */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["all", "outreach", "socialday"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setGalleryFilter(tab)}
                    className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-widest border-2 transition-all duration-200 ${
                      galleryFilter === tab
                        ? "bg-sky-600 border-sky-600 text-white"
                        : "border-gray-300 text-gray-500 hover:border-sky-600 hover:text-sky-600"
                    }`}
                  >
                    {tab === "socialday"
                      ? "Social Day"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="columns-2 sm:columns-3 md:columns-4 gap-4 max-h-96 overflow-y-auto">
                {filteredGalleryImgs.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden group cursor-pointer rounded mb-4 break-inside-avoid"
                    onClick={() => {
                      setSelectedImage(img);
                      setShowGalleryModal(false);
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[110] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-sky-600 text-white hover:bg-sky-700 transition-colors flex items-center justify-center"
            >
              <FaTimes className="text-lg" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <p className="text-white text-center mt-4 text-sm">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default GallerySection;
