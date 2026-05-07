import { useState } from 'react'
import { FaPlay, FaYoutube, FaCalendarAlt, FaUser, FaBookOpen } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeader from '../components/ui/SectionHeader'
import sermonImg from '../assets/sermon_image.png'
import congregationImg from '../assets/worship_congregation.png'

function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-primary pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">{breadcrumb}</p>
        <h1 className="font-heading text-4xl md:text-5xl text-white font-bold mb-4">{title}</h1>
        <div className="w-16 h-1 bg-gold mb-4"></div>
        {subtitle && <p className="text-gray-300 max-w-xl text-base">{subtitle}</p>}
      </div>
    </section>
  )
}

const categories = ['All', 'Sabbath Service', 'Prayer Meeting', 'Camp Meeting', 'Youth Sabbath', 'Special Programs']

const sermons = [
  { id: 1, title: 'Walking by Faith, Not by Sight',       speaker: 'Pastor James Ssekiboobo', date: 'May 10, 2026',     scripture: '2 Corinthians 5:7',   category: 'Sabbath Service',   img: sermonImg },
  { id: 2, title: 'The Everlasting Gospel',               speaker: 'Elder Samuel Kizito',      date: 'May 3, 2026',      scripture: 'Revelation 14:6-7',   category: 'Sabbath Service',   img: congregationImg },
  { id: 3, title: 'Power in Prayer',                      speaker: 'Pastor James Ssekiboobo', date: 'Apr 29, 2026',     scripture: 'Matthew 6:9-13',      category: 'Prayer Meeting',    img: sermonImg },
  { id: 4, title: 'The Sabbath: A Sign and a Seal',       speaker: 'Pastor James Ssekiboobo', date: 'Apr 26, 2026',     scripture: 'Exodus 20:8-11',      category: 'Sabbath Service',   img: congregationImg },
  { id: 5, title: 'Grace That Is Greater',                speaker: 'Guest Speaker',            date: 'Apr 19, 2026',     scripture: 'Romans 5:20',         category: 'Special Programs',  img: sermonImg },
  { id: 6, title: 'Youth — Dare to Be a Daniel',         speaker: 'Bro. Robert Wasswa',       date: 'Apr 12, 2026',     scripture: 'Daniel 1:8',          category: 'Youth Sabbath',     img: congregationImg },
  { id: 7, title: 'The Cross and the Crown',              speaker: 'Pastor James Ssekiboobo', date: 'Apr 5, 2026',      scripture: 'Galatians 6:14',      category: 'Sabbath Service',   img: sermonImg },
  { id: 8, title: 'Signs of the Times',                   speaker: 'Elder Samuel Kizito',      date: 'Mar 29, 2026',     scripture: 'Matthew 24:3-14',     category: 'Sabbath Service',   img: congregationImg },
  { id: 9, title: 'Stewardship of Life',                  speaker: 'Pastor James Ssekiboobo', date: 'Mar 22, 2026',     scripture: '1 Corinthians 6:19',  category: 'Camp Meeting',      img: sermonImg },
]

export default function Sermons() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? sermons
    : sermons.filter(s => s.category === activeCategory)

  return (
    <>
      <PageHero
        breadcrumb="Home / Sermons"
        title="Sermons & Messages"
        subtitle="Be encouraged, equipped, and transformed by the Word of God. Watch or listen to our latest messages."
      />

      {/* YouTube CTA */}
      <section className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg flex items-center gap-3">
            <FaYoutube className="text-2xl" />
            Subscribe to our YouTube channel for new sermons every week
          </p>
          <a
            href="https://www.youtube.com/@kyambogosdachurch"
            target="_blank" rel="noopener noreferrer"
            id="subscribe-youtube-btn"
            className="bg-white text-gold font-bold text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-primary hover:text-white transition-all duration-300 border-2 border-white shrink-0"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* Sermon Library */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Sermon Library" title="Recent Messages" />

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-widest border-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary border-primary text-white'
                    : 'border-gray-300 text-gray-500 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(sermon => (
              <div
                key={sermon.id}
                className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sermon.img}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="https://www.youtube.com/@kyambogosdachurch"
                      target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-gold flex items-center justify-center"
                    >
                      <FaPlay className="text-white text-base ml-0.5" />
                    </a>
                  </div>
                  <span className="absolute top-3 right-3 bg-gold text-white text-xs font-bold uppercase px-2 py-0.5 tracking-wide">
                    {sermon.category}
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading text-primary font-bold text-lg leading-snug mb-3">
                    {sermon.title}
                  </h3>
                  <div className="space-y-1 text-xs text-gray-500">
                    <p className="flex items-center gap-2"><FaUser className="text-gold" /> {sermon.speaker}</p>
                    <p className="flex items-center gap-2"><FaCalendarAlt className="text-gold" /> {sermon.date}</p>
                    <p className="flex items-center gap-2"><FaBookOpen className="text-gold" /> {sermon.scripture}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href="https://www.youtube.com/@kyambogosdachurch"
                      target="_blank" rel="noopener noreferrer"
                      className="text-gold text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors duration-200 flex items-center gap-1"
                    >
                      Watch Message <HiArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Block */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaYoutube className="text-gold text-5xl mx-auto mb-5" />
          <h2 className="font-heading text-3xl text-white font-bold mb-3">Never Miss a Message</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-5"></div>
          <p className="text-gray-300 mb-7 max-w-lg mx-auto">
            Subscribe to our YouTube channel <strong className="text-gold">@kyambogosdachurch</strong> to get notified when new sermons, devotions and special programs are uploaded.
          </p>
          <a
            href="https://www.youtube.com/@kyambogosdachurch"
            target="_blank" rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            <FaYoutube /> Subscribe on YouTube
          </a>
        </div>
      </section>
    </>
  )
}
