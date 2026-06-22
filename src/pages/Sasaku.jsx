import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBookOpen,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaMobile,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import SasakuLayout from "../components/sasaku/SasakuLayout";
import sasakuImg from "../assets/sasaku.jpg";
import sasakGents from "../assets/sasakugents.jpg";
import gentsImg from "../assets/sasakugents-2.jpg";
import communityImg from "../assets/gyd.jpg";
import poolImg from "../assets/pool.jpg";
import thierryImg from "../assets/executives/thierry.jpg";
import brightImg from "../assets/executives/bright.jpg";
import lillianImg from "../assets/executives/lillian.png";
import lunyoloImg from "../assets/executives/lunyolo.jpg";
import ajamboImg from "../assets/executives/ajambo.jpg";
import akulluImg from "../assets/executives/ruth.jpg";
import edegaImg from "../assets/executives/edega.jpg";
import alfredImg from "../assets/executives/alfred.jpg";
import miriamImg from "../assets/executives/miriam.jpg";
import abbeImg from "../assets/executives/abbe.jpg";
import kiptoImg from "../assets/executives/ivan.jpg";
import emmaImg from "../assets/executives/emma.jpg";
import linetImg from "../assets/executives/linet.jpg";
import mwesigwaImg from "../assets/executives/mwesigwa.jpg";
import graceImg from "../assets/executives/grace .jpg";
import deborahImg from "../assets/executives/deborah.jpg";
import shanonImg from "../assets/executives/shanon.jpg";
import gloriousImg from "../assets/executives/glorious.jpg";
import profImg from "../assets/executives/prof.jpg";

/* Reusable section header */
function SecHead({ label, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="text-sky-500 text-xs font-semibold uppercase tracking-[0.25em] mb-3">
        {label}
      </p>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : "text-slate-800"}`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-sky-600 mt-4 ${center ? "mx-auto" : ""}`}
      ></div>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── Data ── */
const executives = [
  { name: "Prof. Maurice Mukokoma", role: "Patron", img: profImg },
  { name: "Akandwanaho Bright", role: "President", img: brightImg },
  { name: "Nalunkuuma Lillian", role: "Vice President", img: lillianImg },
  {
    name: "Sis. Lunyolo Elizabeth",
    role: "General Secretary",
    img: lunyoloImg,
  },
  { name: "Ajambo Bright", role: "Treasurer", img: ajamboImg },
  { name: "Akullu Ruth", role: "In-reach Coordinator", img: akulluImg },
  { name: "Edega Marvin", role: "Out-reach Coordinator", img: edegaImg },
  {
    name: "Munderi Thierry",
    role: "Publicity Secretary",
    img: thierryImg,
  },
  { name: "Mwesigwa Daniel", role: "Music Director", img: mwesigwaImg },
  {
    name: "Nangira Linet",
    role: "Assistant Music Director",
    img: linetImg,
  },
  {
    name: "Ayiko Miriam",
    role: "Social and Welfare Director",
    img: miriamImg,
  },
  {
    name: "Nsamba Alfred",
    role: "Assistant Social and Welfare",
    img: alfredImg,
  },
  { name: "Katusime Deborah Abbe", role: "Librarian", img: abbeImg },
  {
    name: "Ampire Glorious",
    role: "Non-Resident Coordinator",
    img: gloriousImg,
  },
  {
    name: "Nyamungu Grace",
    role: "Resident Coordinator-West End",
    img: graceImg,
  },
  {
    name: "Nakabuye Deborah",
    role: "Resident Coordinator-East End",
    img: deborahImg,
  },
  {
    name: "Ogwang Emmanuel",
    role: "Kyambogo College Coordinator",
    img: emmaImg,
  },
  {
    name: "Kipto Ivan",
    role: "Kyambogo College Coordinator",
    img: kiptoImg,
  },
  {
    name: "MG. Ssenkuba Shanon",
    role: "Associate Coordinator",
    img: shanonImg,
  },
];

const programs = [
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Mid-Week fellowship",
    day: "Every Wednesday · 5:00 PM",
    desc: "A day within the week when students get to share and understand more of the Bible together.",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Friday Vespers Fellowship",
    day: "Every Friday · 5:00 PM",
    desc: "Welcoming the Sabbath, sharing and learning the Bible together",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Resident Fellowship",
    day: "Every Thursday · 4:30 PM",
    desc: "Students come together inside the Halls of Campus to fellowship and learn faithfull Christian living.",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Non Resident Fellowship",
    day: "Every Sunday · 4:30 PM",
    desc: "Students come together in hostels outside Campus to fellowship and learn",
  },
  {
    icon: <FaBookOpen className="text-2xl" />,
    title: "Sabbath Worship",
    day: "Every Saturday · 8:00 AM - 5:00 PM",
    desc: "Active participation in all Sabbath programs at church",
  },
  {
    icon: <FaMobile className="text-2xl" />,
    title: "Christian Movie Night",
    day: "Every Month",
    desc: "An event that takes place once every month when students watch fruitfull Christian movies to learn good life lessons.",
  },
];

const events = [
  {
    day: "9-14",
    month: "August",
    title: "Fresh Student's Orientation",
    time: "5:00 PM",
    venue: "Kyambogo University SDA Church",
    tag: "Special",
  },
  {
    day: "20",
    month: "May",
    title: "Campus Bible Study",
    time: "5:00 PM",
    venue: "Block A Student Centre, KyU",
    tag: "Bible Study",
  },
  {
    day: "31",
    month: "May",
    title: "End of Semester Service & Thanksgiving",
    time: "10:00 AM",
    venue: "Kyambogo SDA Church",
    tag: "Special",
  },
  {
    day: "07",
    month: "Jun",
    title: "Evangelism Outreach Day",
    time: "9:00 AM",
    venue: "Kyambogo Campus Grounds",
    tag: "Outreach",
  },
];

const galleryImgs = [
  { src: sasakuImg, alt: "SASAKU Choir" },
  { src: gentsImg, alt: "SASAKU Gents" },
  { src: communityImg, alt: "SASAKU community outreach" },
  { src: poolImg, alt: "SASAKU Social Day out" },
];

const joinSteps = [
  {
    step: "01",
    title: "Attend fellowships",
    desc: "Come to our weekly fellowships on Sunday, Wednesday, Thursday and Friday at 5:00 PM or join us on any Sabbath at Kyambogo SDA Church.",
  },
  {
    step: "02",
    title: "Register Your Details",
    desc: "Fill in our simple membership form to be officially added to the SASAKU family. Registration is free.",
  },
  {
    step: "03",
    title: "Get Involved",
    desc: "Join a ministry team, participate in programs, and grow alongside fellow Adventist students on campus.",
  },
];

/* Main Component */
export default function Sasaku() {
  return (
    <SasakuLayout>
      {/* HERO */}
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
              A community of Adventist students at Kyambogo University, growing
              in faith, excelling in studies, and serving Christ on campus and
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
              <FaMapMarkerAlt /> Kyambogo University & SDA Church
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SecHead label="Who We Are" title="About SASAKU" center={false} />
            <p className="text-gray-600 leading-relaxed mb-5">
              SASAKU- The{" "}
              <strong>
                Seventh-day Adventist Students Association of Kyambogo
                University
              </strong>{" "}
              is a Christ-centred student association operating under the
              umbrella of <strong>Public Campus Ministries</strong>. We exist to
              connect, nurture, and mobilise Adventist students at one of
              Uganda's premier universities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              Whether you are a lifelong Adventist or just discovering the
              faith, SASAKU is a home for you. We believe that the university
              years are among the most formative in a person's life and we are
              here to make sure that faith, purpose, and community are at the
              centre of that journey.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { val: "200+", label: "Student Members" },
                { val: "6", label: "Active Programs" },
                { val: "19", label: "Executive Team" },
                { val: "10+", label: "Years Active" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-slate-50 border-l-4 border-sky-500 px-4 py-3"
                >
                  <div className="font-heading text-3xl font-bold text-sky-500">
                    {s.val}
                  </div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={sasakGents}
              alt="SASAKU students worshipping"
              className="w-full h-[420px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-sky-700 z-[-1] hidden lg:block"></div>
            <div className="absolute -top-5 -right-5 w-24 h-24 border-4 border-slate-800 z-[-1] hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20 bg-slate-50" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead label="Our Foundation" title="Mission, Motto & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: "Our Mission",
                border: "border-sky-600",
                text: "To proclaim the everlasting gospel on the Kyambogo University campus, making disciples of Christ among students and equipping them for a lifetime of service and mission.",
              },
              {
                title: "Our Motto",
                border: "border-slate-700",
                text: "Live To Witness For Christ",
              },
              {
                title: "Our Values",
                border: "border-sky-400",
                text: null,
                values: [
                  "Biblical faith and sound doctrine",
                  "Integrity in academic and personal life",
                  "Spirit-filled community and fellowship",
                  "Compassionate outreach and service",
                  "Healthy, wholesome student living",
                ],
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`bg-white border-t-4 ${c.border} shadow-sm p-7 hover:shadow-lg transition-shadow duration-300`}
              >
                <h3 className="font-heading text-slate-800 text-xl font-bold mb-3">
                  {c.title}
                </h3>
                {c.text ? (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {c.text}
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {c.values.map((v) => (
                      <li
                        key={v}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-sky-600 mt-1.5 shrink-0 inline-block"></span>
                        {v}
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
          <SecHead
            label="Executive Committee"
            title="SASAKU Leadership"
            subtitle="Servant leaders elected to guide and serve the SASAKU family for the term 2026/2027."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {executives.map((p) => (
              <div
                key={p.name}
                className="bg-slate-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="h-40 bg-slate-800 flex items-center justify-center">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.role}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-heading text-5xl text-sky-400">
                      {p.name.charAt(p.name.indexOf(" ") + 1)}
                    </span>
                  )}
                </div>
                <div className="p-4 border-t-4 border-sky-600">
                  <h3 className="font-heading text-slate-800 font-bold text-sm leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-sky-600 text-xs uppercase tracking-widest font-semibold mt-1">
                    {p.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-20 bg-slate-900" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            label="What We Do"
            title="Programs & Activities"
            subtitle="SASAKU offers a rich calendar of spiritual, academic, and social programs for every student."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.title}
                className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 hover:bg-opacity-10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-sky-400 mb-4">{p.icon}</div>
                <h3 className="text-white font-heading font-bold text-lg mb-1">
                  {p.title}
                </h3>
                <p className="text-sky-400 text-xs uppercase tracking-widest font-semibold mb-3">
                  {p.day}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
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
              <div
                key={i}
                className="bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex overflow-hidden"
              >
                <div className="bg-sky-700 w-20 shrink-0 flex flex-col items-center justify-center text-white py-6 text-center">
                  <span className="font-heading text-3xl font-bold leading-none">
                    {ev.day}
                  </span>
                  <span className="text-sky-200 text-xs uppercase tracking-wider mt-1">
                    {ev.month}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold uppercase px-2 py-0.5 tracking-wider mb-2 w-fit">
                    {ev.tag}
                  </span>
                  <h3 className="font-heading text-slate-800 font-bold text-base mb-1">
                    {ev.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {ev.time} · {ev.venue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            label="Our Moments"
            title="Photo Gallery"
            subtitle="Snapshots from the SASAKU family."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImgs.map((img, i) => (
              <div key={i} className="overflow-hidden group aspect-square">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN ── */}
      <section className="py-20 bg-slate-800" id="join">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            label="Membership"
            title="Join SASAKU Today"
            subtitle="Becoming a member is simple. Here's how to get started:"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
            {joinSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white bg-opacity-10 border border-white border-opacity-20 p-7 text-center hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="font-heading text-5xl font-bold text-white opacity-30 mb-3">
                  {s.step}
                </div>
                <h3 className="font-heading text-white text-xl font-bold mb-3">
                  {s.title}
                </h3>
                <p className="text-sky-100 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 md:p-10 max-w-2xl mx-auto shadow-2xl">
            <h3 className="font-heading text-slate-800 text-2xl font-bold mb-2">
              Membership Registration
            </h3>
            <div className="w-12 h-1 bg-sky-600 mb-6"></div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Registration submitted! Welcome to SASAKU!");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Student Number *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. 26/U/HD01/xxxx/xx"
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+256 7xx xxx xxx"
                    className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                  Faculty / School
                </label>
                <input
                  type="text"
                  placeholder="e.g. School of Engineering"
                  className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                  Are you a Seventh-day Adventist?
                </label>
                <select className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600">
                  <option>Yes, I am an SDA member</option>
                  <option>I am interested in Adventism</option>
                  <option>I am still exploring</option>
                </select>
              </div>
              <button
                type="submit"
                id="sasaku-register-btn"
                className="w-full bg-sky-700 text-white font-bold text-sm uppercase tracking-widest py-3 border-2 border-sky-700 hover:bg-transparent hover:text-sky-700 transition-all duration-300"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead
            label="Get in Touch"
            title="Contact SASAKU"
            subtitle="Have questions? Reach out to the SASAKU executive team."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                icon: <FaMapMarkerAlt className="text-sky-600 text-xl" />,
                label: "Find Us",
                lines: [
                  "Kyambogo University Campus",
                  "Kyambogo SDA Church (Saturdays)",
                ],
              },
              {
                icon: <FaEnvelope className="text-sky-600 text-xl" />,
                label: "Email Us",
                lines: ["sasakukyambogouniversity@gmail.com", ""],
              },
              {
                icon: <FaWhatsapp className="text-sky-600 text-xl" />,
                label: "WhatsApp / Call",
                lines: [
                  "+256 779 394 229 (President)",
                  "+256 744 313 630 (Secretary)",
                ],
              },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-slate-50 border border-gray-100 shadow-sm p-7 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-teal-50 flex items-center justify-center mb-5">
                  {c.icon}
                </div>
                <h3 className="font-heading text-slate-800 text-lg font-bold mb-3">
                  {c.label}
                </h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-gray-600 text-sm mb-1">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Link back to church */}
          <div className="mt-12 bg-slate-800 p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-sky-400 text-xs uppercase tracking-widest font-semibold mb-1">
                Parent Church
              </p>
              <h3 className="font-heading text-white text-xl font-bold">
                Kyambogo Seventh-day Adventist Church
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                SASAKU operates under the oversight of Kyambogo SDA Church
              </p>
            </div>
            <Link
              to="/"
              className="bg-sky-700 text-white font-bold text-sm uppercase tracking-widest px-7 py-3 border-2 border-sky-700 hover:bg-transparent hover:text-sky-400 transition-all duration-300 shrink-0 inline-flex items-center gap-2"
            >
              Visit Church Website <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </SasakuLayout>
  );
}
