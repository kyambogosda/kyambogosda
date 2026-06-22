import { Link } from "react-router-dom";
import {
  FaPlay,
  FaCalendarAlt,
  FaBookOpen,
  FaUsers,
  FaHeart,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import SectionHeader from "../components/ui/SectionHeader";
import churchHero from "../assets/kyambogosdachurch.jpeg";
import sermonImg from "../assets/sermon_image.png";
import congregationImg from "../assets/kyambogocongregation.jpg";
import communityImg from "../assets/community_service.png";

const upcomingEvents = [
  {
    id: 1,
    date: { day: "17", month: "May" },
    title: "Sabbath Divine Service",
    time: "11:00 AM",
    venue: "Main Sanctuary",
    tag: "Worship",
  },
  {
    id: 2,
    date: { day: "21", month: "May" },
    title: "Mid-Week Prayer Meeting",
    time: "6:00 PM",
    venue: "Prayer Hall",
    tag: "Prayer",
  },
  {
    id: 3,
    date: { day: "24", month: "May" },
    title: "Youth (AY) Sabbath Program",
    time: "3:00 PM",
    venue: "Main Sanctuary",
    tag: "Youth",
  },
];

const ministries = [
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Youth Ministry (AY)",
    desc: "Empowering the next generation through faith, fellowship and service.",
  },
  {
    icon: <FaHeart className="text-2xl" />,
    title: "Women's Ministry (Dorcas)",
    desc: "Serving, uplifting and nurturing women in faith and community life.",
  },
  {
    icon: <FaBookOpen className="text-2xl" />,
    title: "Sabbath School",
    desc: "In-depth Bible study every Sabbath morning for all ages and classes.",
  },
  {
    icon: <FaHandHoldingHeart className="text-2xl" />,
    title: "Community Services",
    desc: "Reaching out to the vulnerable with compassion and practical support.",
  },
];

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Ministries" },
  { value: "40+", label: "Years of Service" },
  { value: "3", label: "Weekly Services" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center" id="hero">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={churchHero}
            alt="Kyambogo SDA Church exterior"
            className="w-full h-full object-cover"
          />
          {/* Solid dark overlay — no gradient */}
          <div className="absolute inset-0 bg-primary opacity-70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-4 animate-fade-in">
              Welcome to
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
              Kyambogo University
              <br />
              <span className="text-gold">Seventh-day</span>
              <br />
              Adventist Church
            </h1>
            <div className="w-20 h-1 bg-gold mb-7"></div>
            <p className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl">
              A community of faith, hope, and love, proclaiming the everlasting
              gospel and preparing the world for the soon return of Jesus
              Christ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="btn-accent inline-flex items-center gap-2"
              >
                Plan a Visit <HiArrowRight />
              </Link>
              <Link
                to="/sermons"
                className="btn-outline inline-flex items-center gap-2"
              >
                <FaPlay className="text-xs" /> Watch Sermons
              </Link>
            </div>
          </div>
        </div>

        {/* Service times strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-white text-sm font-medium">
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> <strong>Sabbath School:</strong> Saturday 9:00
              AM
            </span>
            <span className="hidden sm:block text-white opacity-40">|</span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> <strong>Divine Service:</strong> Saturday 11:00
              AM
            </span>
            <span className="hidden sm:block text-white opacity-40">|</span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> <strong>Prayer Meeting:</strong> Wednesday 6:00
              PM
            </span>
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="py-20 bg-white" id="welcome">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">Welcome Message</p>
              <h2 className="font-heading text-4xl md:text-5xl text-primary font-bold leading-tight mb-5">
                A Place to Belong,
                <br />A Family in Christ
              </h2>
              <div className="w-16 h-1 bg-gold mb-7"></div>
              <p className="text-gray-600 leading-relaxed mb-5 text-base">
                We are so glad you found us. Whether you are seeking God for the
                first time, returning to faith, or looking for a church home,
                you are welcome here. At Kyambogo University SDA Church, we
                believe that every soul matters to God and to us.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                Our congregation is rooted in the Word of God and the
                distinctive teachings of the Seventh-day Adventist Church. We
                worship every Saturday, the biblical Sabbath, and we invite you
                to join us as we study the Bible together, serve our community,
                and wait for the soon return of our Lord.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Learn More <HiArrowRight />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary text-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Get Directions
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={congregationImg}
                alt="Kyambogo SDA congregation worshipping"
                className="w-full h-[420px] object-cover shadow-2xl"
              />
              {/* Gold accent block */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gold z-[-1] hidden lg:block"></div>
              <div className="absolute -top-6 -right-6 w-28 h-28 border-4 border-primary z-[-1] hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-primary py-16" id="stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-5xl font-bold text-gold mb-2">
                {s.value}
              </div>
              <div className="text-gray-300 text-sm uppercase tracking-widest font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="py-20 bg-offwhite" id="events-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What's Happening"
            title="Upcoming Events"
            subtitle="Join us for these special gatherings as we grow together in faith, fellowship, and service."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex overflow-hidden"
              >
                {/* Date block */}
                <div className="bg-primary w-20 shrink-0 flex flex-col items-center justify-center text-white py-6">
                  <span className="font-heading text-3xl font-bold leading-none">
                    {ev.date.day}
                  </span>
                  <span className="text-gold text-xs uppercase tracking-wider mt-1">
                    {ev.date.month}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5 flex flex-col justify-center">
                  <span className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                    {ev.tag}
                  </span>
                  <h3 className="font-heading text-primary font-bold text-base mb-1">
                    {ev.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {ev.time} · {ev.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/events"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Events <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LATEST SERMON ── */}
      <section className="py-20 bg-white" id="latest-sermon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image / video thumbnail */}
            <div className="relative group cursor-pointer">
              <img
                src={sermonImg}
                alt="Latest sermon"
                className="w-full h-[380px] object-cover shadow-xl"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://www.youtube.com/@kyambogosdachurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="sermon-play-btn"
                  className="w-16 h-16 bg-gold flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <FaPlay className="text-white text-xl ml-1" />
                </a>
              </div>
              <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold uppercase px-3 py-1 tracking-widest">
                Latest Sermon
              </div>
            </div>
            {/* Details */}
            <div>
              <p className="section-label mb-3">From the Pulpit</p>
              <h2 className="font-heading text-4xl text-primary font-bold leading-tight mb-4">
                "Walking by Faith, Not by Sight"
              </h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-500 text-sm mb-1">
                <span className="text-gold font-semibold">Speaker:</span> Pastor
                James Ssekiboobo
              </p>
              <p className="text-gray-500 text-sm mb-1">
                <span className="text-gold font-semibold">Scripture:</span> 2
                Corinthians 5:7
              </p>
              <p className="text-gray-500 text-sm mb-6">
                <span className="text-gold font-semibold">Date:</span> Sabbath,
                May 10, 2026
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                In this powerful message, Pastor Ssekiboobo walks us through
                what it truly means to trust God in seasons of uncertainty.
                Drawing from the life of Abraham, we are challenged to step
                forward even when the way is not clear.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/@kyambogosdachurch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaPlay className="text-xs" /> Watch on YouTube
                </a>
                <Link
                  to="/sermons"
                  className="border-2 border-primary text-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
                >
                  All Sermons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MINISTRIES ── */}
      <section className="py-20 bg-offwhite" id="ministries-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get Involved"
            title="Our Ministries"
            subtitle="We have a place for every member of your family to serve, grow, and connect."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministries.map((m) => (
              <div
                key={m.title}
                className="bg-white p-7 border-t-4 border-gold shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-200">
                  {m.icon}
                </div>
                <h3 className="font-heading text-primary font-bold text-lg mb-3">
                  {m.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/ministries"
              className="btn-primary inline-flex items-center gap-2"
            >
              All Ministries <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SERVICE BANNER ── */}
      <section
        className="relative py-24 bg-charcoal overflow-hidden"
        id="community-banner"
      >
        <img
          src={communityImg}
          alt="Community service"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-gold mb-3">Our Mission</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white font-bold leading-tight mb-5">
            Serving Our Community
            <br />
            in Love
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-7"></div>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            We believe that serving others is at the heart of the gospel. Our
            church is actively involved in health outreach, feeding programs,
            and community development right here in Kyambogo.
          </p>
          <Link
            to="/ministries"
            className="btn-accent inline-flex items-center gap-2"
          >
            Learn How to Serve <HiArrowRight />
          </Link>
        </div>
      </section>

      {/* ── SCRIPTURE QUOTE ── */}
      <section className="bg-white py-16" id="scripture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-10 border-4 border-gold mx-auto mb-6 flex items-center justify-center">
            <FaBookOpen className="text-gold" />
          </div>
          <blockquote className="font-heading text-2xl md:text-3xl text-primary font-semibold italic leading-relaxed mb-4">
            "And this gospel of the kingdom will be preached in all the world as
            a witness to all the nations, and then the end will come."
          </blockquote>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4"></div>
          <cite className="text-gold text-sm font-semibold uppercase tracking-widest not-italic">
            Matthew 24:14
          </cite>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gold py-16" id="cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl text-white font-bold">
              Ready to Join Our Family?
            </h2>
            <p className="text-white text-opacity-90 mt-1">
              We would love to have you worship with us this Sabbath.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-white text-gold font-bold text-sm uppercase tracking-widest px-7 py-3 hover:bg-primary hover:text-white transition-all duration-300 border-2 border-white"
            >
              Plan a Visit
            </Link>
            <Link
              to="/give"
              className="border-2 border-white text-white font-bold text-sm uppercase tracking-widest px-7 py-3 hover:bg-white hover:text-gold transition-all duration-300"
            >
              Give Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
