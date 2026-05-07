import { Link } from 'react-router-dom'
import { FaUsers, FaBookOpen, FaHandHoldingHeart, FaRunning, FaBullhorn, FaCheckCircle, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import SasakuLayout from '../components/sasaku/SasakuLayout'
import youthImg from '../assets/youth_ministry.png'
import congregationImg from '../assets/worship_congregation.png'
import communityImg from '../assets/community_service.png'
import sermonImg from '../assets/sermon_image.png'

/* ── Reusable section header ── */
function SecHead({ label, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <p className="text-teal-500 text-xs font-semibold uppercase tracking-[0.25em] mb-3">{label}</p>
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-slate-800'}`}>{title}</h2>
      <div className={`w-16 h-1 bg-teal-600 mt-4 ${center ? 'mx-auto' : ''}`}></div>
      {subtitle && <p className={`mt-5 text-base leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>{subtitle}</p>}
    </div>
  )
}

/* ── Data ── */
const executives = [
  { name: 'Bro. Emmanuel Ssemakula',  role: 'President',              img: null },
  { name: 'Sis. Lydia Nakato',        role: 'Vice President',         img: null },
  { name: 'Bro. Andrew Musoke',       role: 'Secretary General',      img: null },
  { name: 'Sis. Brenda Namukasa',     role: 'Treasurer',              img: null },
  { name: 'Bro. Isaac Turyamureeba', role: 'Chaplain',               img: null },
  { name: 'Sis. Patricia Akello',     role: 'Women\'s Ministry Rep',  img: null },
  { name: 'Bro. Calvin Ochieng',      role: 'AY Leader',              img: null },
  { name: 'Sis. Ruth Birungi',        role: 'Public Relations',       img: null },
]

const programs = [
  { icon: <FaBookOpen className="text-2xl" />,        title: 'Weekly Bible Study',         day: 'Every Tuesday · 5:00 PM',       desc: 'A structured, in-depth study of the Scriptures guided by the SDA quarterly lesson. Open to all KyU students.' },
  { icon: <FaBullhorn className="text-2xl" />,        title: 'Campus Evangelism',          day: 'Monthly outreach',              desc: 'Sharing the gospel on campus through literature distribution, personal Bible studies, and open-air meetings.' },
  { icon: <FaHandHoldingHeart className="text-2xl" />, title: 'Community Service',          day: 'Last Saturday of each month',   desc: 'Students join the main church in community outreach — serving the underprivileged with food, clothes, and care.' },
  { icon: <FaUsers className="text-2xl" />,           title: 'Sabbath School & AY',        day: 'Every Sabbath',                 desc: 'Active participation in Sabbath School classes and the Adventist Youth society at Kyambogo SDA Church.' },
  { icon: <FaRunning className="text-2xl" />,         title: 'Student Sports & Wellness',  day: 'Bi-weekly on Fridays',          desc: 'Health and recreation in a faith-based environment — football, netball, nature walks, and wellness talks.' },
  { icon: <FaBookOpen className="text-2xl" />,        title: 'Academic Prayer & Study',    day: 'Every exam season',             desc: 'Dedicated prayer and fasting sessions before university exams, trusting God for wisdom and success.' },
]

const events = [
  { day: '17', month: 'May', title: 'SASAKU Sabbath Program', time: '3:00 PM', venue: 'Kyambogo SDA Church', tag: 'Worship' },
  { day: '20', month: 'May', title: 'Campus Bible Study',     time: '5:00 PM', venue: 'Block A — Student Centre, KyU', tag: 'Bible Study' },
  { day: '31', month: 'May', title: 'End of Semester Service & Thanksgiving', time: '10:00 AM', venue: 'Kyambogo SDA Church', tag: 'Special' },
  { day: '07', month: 'Jun', title: 'Evangelism Outreach Day', time: '9:00 AM', venue: 'Kyambogo Campus Grounds', tag: 'Outreach' },
]

const galleryImgs = [
  { src: youthImg,        alt: 'SASAKU youth fellowship' },
  { src: congregationImg, alt: 'SASAKU Sabbath worship' },
  { src: communityImg,    alt: 'SASAKU community outreach' },
  { src: sermonImg,       alt: 'SASAKU Bible study session' },
]

const joinSteps = [
  { step: '01', title: 'Attend a Meeting', desc: 'Come to our weekly Bible study on Tuesday at 5:00 PM (Block A, Student Centre) or join us on any Sabbath at Kyambogo SDA Church.' },
  { step: '02', title: 'Register Your Details', desc: 'Fill in our simple membership form to be officially added to the SASAKU family. Registration is free.' },
  { step: '03', title: 'Get Involved', desc: 'Join a ministry team, participate in programs, and grow alongside fellow Adventist students on campus.' },
]

/* ── Main Component ── */
export default function Sasaku() {
  return (
    <SasakuLayout>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-slate-900" id="hero">
        <img src={youthImg} alt="SASAKU students" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-3xl">
            <span className="inline-block bg-teal-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6">
              Kyambogo University · SDA Ministry
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-5">
              <span className="text-teal-400">SASAKU</span>
            </h1>
            <p className="font-heading text-xl text-gray-200 font-semibold mb-3 leading-snug">
              Seventh-day Adventist Students Association<br />of Kyambogo University
            </p>
            <div className="w-16 h-1 bg-teal-600 mb-7"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              A community of Adventist students at Kyambogo University — growing in faith, excelling in studies, and serving Christ on campus and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-700 text-white px-7 py-3 font-bold text-sm uppercase tracking-widest border-2 border-teal-700 hover:bg-transparent hover:text-teal-400 transition-all duration-300 inline-flex items-center gap-2">
                Join SASAKU <HiArrowRight />
              </button>
              <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-7 py-3 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* Bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-teal-700 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 text-white text-sm font-medium">
            <span className="flex items-center gap-2"><FaClock /> <strong>Bible Study:</strong> Tuesdays 5:00 PM</span>
            <span className="opacity-40 hidden sm:block">|</span>
            <span className="flex items-center gap-2"><FaClock /> <strong>Sabbath School:</strong> Saturdays 9:00 AM</span>
            <span className="opacity-40 hidden sm:block">|</span>
            <span className="flex items-center gap-2"><FaMapMarkerAlt /> Kyambogo University & SDA Church</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SecHead label="Who We Are" title="About SASAKU" center={false} />
            <p className="text-gray-600 leading-relaxed mb-5">
              SASAKU — the <strong>Seventh-day Adventist Students Association of Kyambogo University</strong> — is a Christ-centred student fellowship operating under the umbrella of <strong>Kyambogo Seventh-day Adventist Church</strong>. We exist to connect, nurture, and mobilise Adventist students at one of Uganda's premier universities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Whether you are a lifelong Adventist or just discovering the faith, SASAKU is a home for you. We believe that the university years are among the most formative in a person's life — and we are here to make sure that faith, purpose, and community are at the centre of that journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { val: '200+', label: 'Student Members' },
                { val: '6',    label: 'Active Programs' },
                { val: '8',    label: 'Executive Team' },
                { val: '10+',  label: 'Years Active' },
              ].map(s => (
                <div key={s.label} className="bg-slate-50 border-l-4 border-teal-600 px-4 py-3">
                  <div className="font-heading text-3xl font-bold text-teal-700">{s.val}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={congregationImg} alt="SASAKU students worshipping" className="w-full h-[420px] object-cover shadow-2xl" />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-teal-700 z-[-1] hidden lg:block"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 border-4 border-slate-800 z-[-1] hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 bg-slate-50" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="Our Foundation" title="Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { title: 'Our Mission', border: 'border-teal-600', text: 'To proclaim the everlasting gospel on the Kyambogo University campus, making disciples of Christ among students and equipping them for a lifetime of service and mission.' },
              { title: 'Our Vision',  border: 'border-slate-700', text: 'To be the leading spiritual community at Kyambogo University — a beacon of faith, integrity, academic excellence, and compassionate service to all.' },
              { title: 'Our Values', border: 'border-teal-400', text: null,
                values: ['Biblical faith and sound doctrine', 'Integrity in academic and personal life', 'Spirit-filled community and fellowship', 'Compassionate outreach and service', 'Healthy, wholesome student living'] },
            ].map(c => (
              <div key={c.title} className={`bg-white border-t-4 ${c.border} shadow-sm p-7 hover:shadow-lg transition-shadow duration-300`}>
                <h3 className="font-heading text-slate-800 text-xl font-bold mb-3">{c.title}</h3>
                {c.text ? <p className="text-gray-600 text-sm leading-relaxed">{c.text}</p> : (
                  <ul className="space-y-2">
                    {c.values.map(v => (
                      <li key={v} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-teal-600 mt-1.5 shrink-0 inline-block"></span>{v}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 bg-white" id="leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="Executive Committee" title="SASAKU Leadership" subtitle="Servant leaders elected to guide and serve the SASAKU family for the current academic year." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {executives.map(p => (
              <div key={p.name} className="bg-slate-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="h-36 bg-slate-800 flex items-center justify-center">
                  <span className="font-heading text-5xl text-teal-400">{p.name.charAt(p.name.indexOf(' ') + 1)}</span>
                </div>
                <div className="p-4 border-t-4 border-teal-600">
                  <h3 className="font-heading text-slate-800 font-bold text-sm leading-snug">{p.name}</h3>
                  <p className="text-teal-600 text-xs uppercase tracking-widest font-semibold mt-1">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-20 bg-slate-900" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="What We Do" title="Programs & Activities" subtitle="SASAKU offers a rich calendar of spiritual, academic, and social programs for every student." light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(p => (
              <div key={p.title} className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 hover:bg-opacity-10 hover:-translate-y-1 transition-all duration-300">
                <div className="text-teal-400 mb-4">{p.icon}</div>
                <h3 className="text-white font-heading font-bold text-lg mb-1">{p.title}</h3>
                <p className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-3">{p.day}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="py-20 bg-slate-50" id="events">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="On the Calendar" title="Upcoming Events" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((ev, i) => (
              <div key={i} className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex overflow-hidden">
                <div className="bg-teal-700 w-20 shrink-0 flex flex-col items-center justify-center text-white py-6 text-center">
                  <span className="font-heading text-3xl font-bold leading-none">{ev.day}</span>
                  <span className="text-teal-200 text-xs uppercase tracking-wider mt-1">{ev.month}</span>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold uppercase px-2 py-0.5 tracking-wider mb-2 w-fit">{ev.tag}</span>
                  <h3 className="font-heading text-slate-800 font-bold text-base mb-1">{ev.title}</h3>
                  <p className="text-gray-500 text-sm">{ev.time} · {ev.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="Our Moments" title="Photo Gallery" subtitle="Snapshots of faith, fellowship, and service from the SASAKU family." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImgs.map((img, i) => (
              <div key={i} className="overflow-hidden group aspect-square">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN ── */}
      <section className="py-20 bg-teal-700" id="join">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="Membership" title="Join SASAKU Today" subtitle="Becoming a member is simple. Here's how to get started:" light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {joinSteps.map(s => (
              <div key={s.step} className="bg-white bg-opacity-10 border border-white border-opacity-20 p-7 text-center hover:bg-opacity-20 transition-all duration-300">
                <div className="font-heading text-5xl font-bold text-white opacity-20 mb-3">{s.step}</div>
                <h3 className="font-heading text-white text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-teal-100 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 md:p-10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="font-heading text-slate-800 text-2xl font-bold mb-2">Membership Registration</h3>
            <div className="w-12 h-1 bg-teal-600 mb-6"></div>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert('Registration submitted! Welcome to SASAKU!') }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">Full Name *</label>
                  <input required type="text" placeholder="Your full name" className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">Student Number *</label>
                  <input required type="text" placeholder="e.g. 2024/HD01/xxxx" className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">Email *</label>
                  <input required type="email" placeholder="your@email.com" className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">Phone / WhatsApp *</label>
                  <input required type="tel" placeholder="+256 7xx xxx xxx" className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">Faculty / School</label>
                <input type="text" placeholder="e.g. School of Engineering" className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">Are you a Seventh-day Adventist?</label>
                <select className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-teal-600">
                  <option>Yes, I am an SDA member</option>
                  <option>I am interested in Adventism</option>
                  <option>I am still exploring</option>
                </select>
              </div>
              <button type="submit" id="sasaku-register-btn"
                className="w-full bg-teal-700 text-white font-bold text-sm uppercase tracking-widest py-3 border-2 border-teal-700 hover:bg-transparent hover:text-teal-700 transition-all duration-300">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="Get in Touch" title="Contact SASAKU" subtitle="Have questions? Reach out to the SASAKU executive team." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              { icon: <FaMapMarkerAlt className="text-teal-600 text-xl" />, label: 'Find Us', lines: ['Kyambogo University Campus', 'Block A — Student Centre', 'Also at: Kyambogo SDA Church (Saturdays)'] },
              { icon: <FaEnvelope className="text-teal-600 text-xl" />,     label: 'Email Us', lines: ['sasaku@kyambogosda.org', 'president.sasaku@gmail.com'] },
              { icon: <FaWhatsapp className="text-teal-600 text-xl" />,    label: 'WhatsApp / Call', lines: ['+256 700 000 000 (President)', '+256 711 000 000 (Secretary)'] },
            ].map(c => (
              <div key={c.label} className="bg-slate-50 border border-gray-100 shadow-sm p-7 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center mb-5">{c.icon}</div>
                <h3 className="font-heading text-slate-800 text-lg font-bold mb-3">{c.label}</h3>
                {c.lines.map(l => <p key={l} className="text-gray-600 text-sm mb-1">{l}</p>)}
              </div>
            ))}
          </div>

          {/* Link back to church */}
          <div className="mt-12 bg-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-teal-400 text-xs uppercase tracking-widest font-semibold mb-1">Parent Church</p>
              <h3 className="font-heading text-white text-xl font-bold">Kyambogo Seventh-day Adventist Church</h3>
              <p className="text-gray-400 text-sm mt-1">SASAKU operates under the oversight of Kyambogo SDA Church</p>
            </div>
            <Link to="/" className="bg-teal-700 text-white font-bold text-sm uppercase tracking-widest px-7 py-3 border-2 border-teal-700 hover:bg-transparent hover:text-teal-400 transition-all duration-300 shrink-0 inline-flex items-center gap-2">
              Visit Church Website <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </SasakuLayout>
  )
}
