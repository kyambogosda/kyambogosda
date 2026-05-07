import { Link } from 'react-router-dom'
import { FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock, FaBook } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'

const sasakuLinks = [
  { label: 'About SASAKU',  hash: '#about' },
  { label: 'Leadership',    hash: '#leadership' },
  { label: 'Programs',      hash: '#programs' },
  { label: 'Events',        hash: '#events' },
  { label: 'Join Us',       hash: '#join' },
  { label: 'Contact',       hash: '#contact' },
]

const beliefs = [
  'The Holy Scriptures',
  'The Biblical Sabbath (Saturday)',
  'The Second Coming of Christ',
  'Baptism by Immersion',
]

export default function SasakuFooter() {
  const scrollTo = (hash) => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-slate-900 text-white">
      {/* Quote banner */}
      <div className="bg-teal-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-heading text-white text-lg font-semibold italic">
            "Let no one despise your youth, but be an example to the believers..."
          </p>
          <span className="text-white text-sm font-medium shrink-0">— 1 Timothy 4:12</span>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — About SASAKU */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-teal-700 flex flex-col items-center justify-center shrink-0 text-white font-black text-[10px] leading-none">
              <span>SA</span><span>SA</span><span>KU</span>
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm leading-tight">SASAKU</div>
              <div className="text-teal-400 text-[10px] tracking-widest uppercase leading-tight">SDA Students Association</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            The Seventh-day Adventist Students Association of Kyambogo University — a vibrant community of Adventist students growing in faith, academics, and service.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 flex-wrap">
            <a href="https://www.youtube.com/@kyambogosdachurch" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-teal-700 transition-colors duration-300 text-white">
              <FaYoutube className="text-base" />
            </a>
            <a href="https://twitter.com/kyambogosdachurch" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-teal-700 transition-colors duration-300 text-white">
              <FaTwitter className="text-base" />
            </a>
            <a href="https://www.tiktok.com/@kyambogosdachurch" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-teal-700 transition-colors duration-300 text-white">
              <FaTiktok className="text-base" />
            </a>
            <a href="#" aria-label="WhatsApp"
              className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center hover:bg-teal-700 transition-colors duration-300 text-white">
              <FaWhatsapp className="text-base" />
            </a>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="font-heading text-white font-bold text-lg mb-2">Quick Links</h4>
          <div className="w-10 h-0.5 bg-teal-600 mb-5"></div>
          <ul className="space-y-2 mb-5">
            {sasakuLinks.map(l => (
              <li key={l.label}>
                <button
                  onClick={() => scrollTo(l.hash)}
                  className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 text-left"
                >
                  <span className="w-1.5 h-1.5 bg-teal-600 inline-block shrink-0"></span>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <Link
            to="/"
            className="text-teal-400 text-xs hover:text-white transition-colors duration-200 flex items-center gap-1 font-semibold"
          >
            <HiArrowRight /> Main Church Website
          </Link>
        </div>

        {/* Col 3 — Meeting Times */}
        <div>
          <h4 className="font-heading text-white font-bold text-lg mb-2">Meeting Schedule</h4>
          <div className="w-10 h-0.5 bg-teal-600 mb-5"></div>
          <ul className="space-y-4">
            <li>
              <div className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-1">Every Sabbath (Saturday)</div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaClock className="text-teal-600 shrink-0" /> Sabbath School — 9:00 AM
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <FaClock className="text-teal-600 shrink-0" /> Divine Service — 11:00 AM
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <FaClock className="text-teal-600 shrink-0" /> AY Program — 3:00 PM
              </div>
            </li>
            <li>
              <div className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-1">Tuesday (Campus)</div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaBook className="text-teal-600 shrink-0" /> Bible Study / Fellowship — 5:00 PM
              </div>
            </li>
            <li>
              <div className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-1">Location</div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-teal-600 shrink-0 mt-0.5" />
                Kyambogo University Campus, Block A — Student Centre
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 className="font-heading text-white font-bold text-lg mb-2">Contact SASAKU</h4>
          <div className="w-10 h-0.5 bg-teal-600 mb-5"></div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <FaMapMarkerAlt className="text-teal-400 mt-0.5 shrink-0" />
              <span>Kyambogo University, Kyambogo,<br />Kampala, Uganda</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaEnvelope className="text-teal-400 shrink-0" />
              <a href="mailto:sasaku@kyambogosda.org" className="hover:text-teal-400 transition-colors break-all">
                sasaku@kyambogosda.org
              </a>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <FaWhatsapp className="text-teal-400 shrink-0" />
              <span>+256 700 000 000 (WhatsApp)</span>
            </li>
          </ul>
          <div className="mt-6">
            <div className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-3">We Believe In</div>
            <ul className="space-y-1">
              {beliefs.map(b => (
                <li key={b} className="text-gray-500 text-xs flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-teal-600 inline-block shrink-0 rounded-full"></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} SASAKU — Seventh-day Adventist Students Association of Kyambogo University</p>
          <p>
            A ministry of{' '}
            <Link to="/" className="text-teal-400 hover:underline">
              Kyambogo SDA Church
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
