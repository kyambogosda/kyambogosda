import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import sdaChurchLogo from "../../assets/sdachurchlogo.png";
import sasakuLogo from "../../assets/sasakuHorizontal.png";

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Sermons", path: "/sermons" },
  { label: "Ministries", path: "/ministries" },
  { label: "Events", path: "/events" },
  { label: "Give", path: "/give" },
  { label: "Contact", path: "/contact" },
  { label: "SASAKU", path: "/sasaku", highlight: true },
];

const beliefs = [
  "The Holy Scriptures",
  "The Holy Trinity",
  "God the Father",
  "God the Son",
  "God the Holy Spirit",
  "The Great Controversy",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top banner */}
      <div className="bg-gold py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-heading text-white text-lg font-semibold italic">
            "Fear God and give him glory, for the hour of his judgment has
            come."
          </p>
          <span className="text-white text-sm font-medium shrink-0">
            - Revelation 14:7
          </span>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — About */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-gold flex items-center justify-center shrink-0">
              <img
                src={sdaChurchLogo}
                alt="SDA Church Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm leading-tight">
                Kyambogo SDA Church
              </div>
              <div className="text-gold text-xs tracking-widest uppercase">
                Seventh-day Adventist
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            A community of believers committed to proclaiming the everlasting
            gospel and preparing the world for the soon return of Jesus Christ.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@kyambogosdachurch"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-youtube"
              aria-label="YouTube"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-gold transition-colors duration-300 text-white"
            >
              <FaYoutube className="text-base" />
            </a>
            <a
              href="https://twitter.com/kyambogosdachurch"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-twitter"
              aria-label="Twitter / X"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-gold transition-colors duration-300 text-white"
            >
              <FaTwitter className="text-base" />
            </a>
            <a
              href="https://www.tiktok.com/@kyusda?_r=1&_t=ZS-97eGBMwjhCx"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-tiktok"
              aria-label="TikTok"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-gold transition-colors duration-300 text-white"
            >
              <FaTiktok className="text-base" />
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="font-heading text-white font-bold text-lg mb-2">
            Quick Links
          </h4>
          <div className="w-10 h-0.5 bg-gold mb-5"></div>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className={`text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 ${
                    l.highlight ? "text-teal-400 font-bold" : "text-gray-300"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 inline-block shrink-0 ${
                      l.highlight ? "bg-teal-500" : "bg-gold"
                    }`}
                  ></span>
                  {l.label}
                  {l.highlight && (
                    <span className="text-[9px] bg-teal-700 text-white px-1.5 py-0.5 uppercase tracking-wider font-bold">
                      Students
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Service Times */}
        <div>
          <h4 className="font-heading text-white font-bold text-lg mb-2">
            Service Times
          </h4>
          <div className="w-10 h-0.5 bg-gold mb-5"></div>
          <ul className="space-y-4">
            <li>
              <div className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                Every Saturday (Sabbath)
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FaClock className="text-gold shrink-0" />
                Sabbath School - 8:30 AM
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm mt-1">
                <FaClock className="text-gold shrink-0" />
                Divine Service - 11:00 AM
              </div>
            </li>
            <li>
              <div className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                Wednesday
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FaClock className="text-gold shrink-0" />
                MidWeek Fellowship - 5:30 PM
              </div>
            </li>
            <li>
              <div className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
                Friday Evening
              </div>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <FaClock className="text-gold shrink-0" />
                Vespers - 6:30 PM
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h4 className="font-heading text-white font-bold text-lg mb-2">
            Contact Us
          </h4>
          <div className="w-10 h-0.5 bg-gold mb-5"></div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-300 text-sm">
              <FaMapMarkerAlt className="text-gold text-base mt-0.5 shrink-0" />
              <span>
                Kyambogo, Nakawa Division,
                <br />
                Kampala, Uganda
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <FaPhone className="text-gold text-base shrink-0" />
              <a
                href="tel:+256774555259"
                className="hover:text-gold transition-colors duration-200"
              >
                +256 774555259
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-300 text-sm">
              <FaEnvelope className="text-gold text-base shrink-0" />
              <a
                href="mailto:kyambogosdachurch@gmail.com"
                className="hover:text-gold transition-colors duration-200 break-all"
              >
                kyambogosdachurch@gmail.com
              </a>
            </li>
          </ul>

          {/* Core beliefs teaser */}
          <div className="mt-6">
            <div className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">
              We Believe In
            </div>
            <ul className="space-y-1">
              {beliefs.map((b) => (
                <li
                  key={b}
                  className="text-gray-400 text-xs flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gold inline-block shrink-0 rounded-full"></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SASAKU promo strip */}
      <div className="border-t border-white border-opacity-10 bg-teal-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-32 flex items-center justify-center shrink-0">
                <img
                  src={sasakuLogo}
                  alt="SASAKU Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300 text-xs">
              Seventh-day Adventist Students Association of Kyambogo University
            </p>
          </div>
          <Link
            to="/sasaku"
            className="text-xs font-bold uppercase tracking-widest text-teal-400 border border-teal-600 px-4 py-1.5 hover:bg-teal-700 hover:text-white transition-all duration-300 shrink-0"
          >
            Visit SASAKU →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-400 text-xs">
          <p>
            © {new Date().getFullYear()} Kyambogo Seventh-day Adventist Church.
            All rights reserved.
          </p>
          <p className="text-center">
            Part of the{" "}
            <a
              href="https://adventist.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              Seventh-day Adventist Church
            </a>{" "}
            - Uganda Union Mission
          </p>
        </div>
      </div>
    </footer>
  );
}
