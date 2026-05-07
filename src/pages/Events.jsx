import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeader from '../components/ui/SectionHeader'

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

const events = [
  {
    id: 1,
    day: '10', month: 'May', year: '2026',
    title: 'Sabbath Divine Service',
    time: '11:00 AM – 1:00 PM',
    venue: 'Main Sanctuary, Kyambogo SDA Church',
    tag: 'Worship',
    tagColor: 'bg-primary',
    desc: 'Join us for our weekly Sabbath morning Divine Service. Worship begins with music, followed by Scripture reading, a message from the Word of God, and fellowship.',
  },
  {
    id: 2,
    day: '14', month: 'May', year: '2026',
    title: 'Mid-Week Prayer Meeting',
    time: '6:00 PM – 7:30 PM',
    venue: 'Prayer Hall, Kyambogo SDA Church',
    tag: 'Prayer',
    tagColor: 'bg-gold',
    desc: 'A dedicated time of corporate prayer, Bible study and seeking God together. All members and visitors are warmly invited.',
  },
  {
    id: 3,
    day: '17', month: 'May', year: '2026',
    title: 'Youth AY Sabbath Program',
    time: '3:00 PM – 5:00 PM',
    venue: 'Main Sanctuary',
    tag: 'Youth',
    tagColor: 'bg-charcoal',
    desc: 'The Adventist Youth Society leads worship every second Sabbath afternoon. Featuring praise, drama, testimonies and a relevant message for young people.',
  },
  {
    id: 4,
    day: '23', month: 'May', year: '2026',
    title: 'Vespers & Outreach Day',
    time: '6:30 PM – 8:00 PM',
    venue: 'Church Grounds & Surroundings',
    tag: 'Outreach',
    tagColor: 'bg-gold',
    desc: 'Friday evening Vespers ushers in the Sabbath with songs and prayer, followed by a neighbourhood outreach walk sharing literature and invitations.',
  },
  {
    id: 5,
    day: '31', month: 'May', year: '2026',
    title: 'Community Health Fair',
    time: '10:00 AM – 4:00 PM',
    venue: 'Church Grounds, Kyambogo',
    tag: 'Community',
    tagColor: 'bg-primary',
    desc: 'Free health screenings, blood pressure checks, nutritional counselling, and health education for the Kyambogo community. Open to all.',
  },
  {
    id: 6,
    day: '06', month: 'Jun', year: '2026',
    title: 'Annual Family Camp Meeting',
    time: 'All Day (6–8 June)',
    venue: 'Uganda Adventist Conference Grounds',
    tag: 'Camp Meeting',
    tagColor: 'bg-charcoal',
    desc: 'Three days of spiritual renewal, powerful preaching, music and fellowship as our church family gathers for the annual camp meeting. Register early!',
  },
  {
    id: 7,
    day: '14', month: 'Jun', year: '2026',
    title: 'Pathfinder Induction Ceremony',
    time: '3:00 PM – 5:00 PM',
    venue: 'Main Sanctuary',
    tag: 'Youth',
    tagColor: 'bg-charcoal',
    desc: 'We officially welcome new Pathfinders and Adventurers into the club with ceremony, pledge, and dedication. Parents and families are encouraged to attend.',
  },
  {
    id: 8,
    day: '28', month: 'Jun', year: '2026',
    title: 'Baptism Service',
    time: '11:30 AM',
    venue: 'Main Sanctuary',
    tag: 'Worship',
    tagColor: 'bg-primary',
    desc: 'A celebration of new life in Christ! Several candidates will make their public commitment to Jesus through the beautiful ordinance of baptism by immersion.',
  },
]

const weeklySchedule = [
  { day: 'Saturday (Sabbath)', items: [
    { time: '9:00 AM',  name: 'Sabbath School (All Classes)' },
    { time: '11:00 AM', name: 'Divine Service / Worship' },
    { time: '3:00 PM',  name: 'AY Programme (select Sabbaths)' },
  ]},
  { day: 'Wednesday', items: [
    { time: '6:00 PM', name: 'Mid-Week Prayer Meeting' },
  ]},
  { day: 'Friday', items: [
    { time: '6:30 PM', name: 'Friday Evening Vespers' },
  ]},
]

export default function Events() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Events"
        title="Events & Calendar"
        subtitle="Stay connected with what God is doing in our church family. All are welcome!"
      />

      {/* Weekly Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Every Week" title="Regular Service Schedule" center={false} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {weeklySchedule.map(day => (
              <div key={day.day} className="bg-offwhite border-t-4 border-gold shadow-sm p-6">
                <h3 className="font-heading text-primary text-xl font-bold mb-4">{day.day}</h3>
                <ul className="space-y-3">
                  {day.items.map(item => (
                    <li key={item.name} className="flex items-start gap-3">
                      <div className="bg-gold text-white text-xs font-bold px-2 py-1 shrink-0">{item.time}</div>
                      <span className="text-gray-600 text-sm pt-0.5">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="On the Calendar" title="Upcoming Events" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map(ev => (
              <div
                key={ev.id}
                className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex overflow-hidden"
              >
                {/* Date sidebar */}
                <div className="bg-primary w-20 shrink-0 flex flex-col items-center justify-center text-white py-6 text-center">
                  <span className="font-heading text-3xl font-bold leading-none">{ev.day}</span>
                  <span className="text-gold text-xs uppercase tracking-wider mt-1">{ev.month}</span>
                  <span className="text-gray-400 text-xs mt-1">{ev.year}</span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`${ev.tagColor} text-white text-xs font-bold uppercase px-2 py-0.5 tracking-wider`}>{ev.tag}</span>
                  </div>
                  <h3 className="font-heading text-primary font-bold text-lg leading-snug mb-2">{ev.title}</h3>
                  <div className="space-y-1 text-xs text-gray-500 mb-3">
                    <p className="flex items-center gap-2"><FaClock className="text-gold shrink-0" /> {ev.time}</p>
                    <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-gold shrink-0" /> {ev.venue}</p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="bg-primary py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaCalendarAlt className="text-gold text-4xl mx-auto mb-4" />
          <h2 className="font-heading text-3xl text-white font-bold mb-3">Stay Updated</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-5"></div>
          <p className="text-gray-300 mb-2">
            Follow us on social media for the latest news, event announcements and live streams.
          </p>
          <p className="text-gold font-bold text-sm tracking-widest">@kyambogosdachurch</p>
        </div>
      </section>
    </>
  )
}
