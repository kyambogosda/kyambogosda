import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import sasakuImg from "../../assets/sasaku.jpg";

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-slate-900"
      id="hero"
    >
      <img
        src={sasakuImg}
        alt="SASAKU students"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <span className="inline-block bg-sky-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6">
            Kyambogo University · Public Campus Ministry
          </span>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-5">
            <span className="text-sky-400">SASAKU</span>
          </h1>
          <p className="font-heading text-xl text-gray-200 font-semibold mb-3 leading-snug">
            Seventh-day Adventist Students Association
            <br />
            of Kyambogo University
          </p>
          <div className="w-16 h-1 bg-sky-500 mb-7"></div>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            A community of Adventist students at Kyambogo University, growing in
            faith, excelling in studies, and serving Christ on campus and
            beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                document
                  .querySelector("#join")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-sky-500 text-white px-7 py-3 font-bold text-sm uppercase tracking-widest border-2 border-sky-700 hover:bg-transparent hover:text-sky-400 transition-all duration-300 inline-flex items-center gap-2"
            >
              Join SASAKU <HiArrowRight />
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-white text-white px-7 py-3 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-sky-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-white text-sm font-medium">
          <span className="flex items-center gap-2">
            <FaClock /> <strong>MidWeek Fellowship</strong> Wednesday 5:00 PM
          </span>
          <span className="opacity-40 hidden sm:block">|</span>
          <span className="flex items-center gap-2">
            <FaClock /> <strong>Friday Fellowship</strong> Friday 5:00 PM
          </span>
          <span className="opacity-40 hidden sm:block">|</span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt /> Kyambogo University SDA Church
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
