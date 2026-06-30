import { Link } from "react-router-dom";
import SectionHeader from "../components/ui/SectionHeader";
import pastorImg from "../assets/pastor_portrait.png";
import { HiArrowRight } from "react-icons/hi";

const beliefs = [
  {
    num: "01",
    title: "The Holy Scriptures",
    desc: "The Bible is the inspired Word of God - the rule of faith and practice for every believer.",
  },
  {
    num: "02",
    title: "The Holy Trinity",
    desc: "One God: Father, Son, and Holy Spirit - three co-eternal persons in perfect unity.",
  },
  {
    num: "03",
    title: "God the Father",
    desc: "God the eternal Father is the Creator, Source, Sustainer, and Sovereign of all creation.",
  },
  {
    num: "04",
    title: "God the Son",
    desc: "God the eternal Son became incarnate in Jesus Christ.",
  },
  {
    num: "05",
    title: "God the Holy Spirit",
    desc: "God the eternal Spirit was active with the Father and the Son in Creation, incarnation, and redemption.",
  },
  {
    num: "06",
    title: "Creation",
    desc: "God has revealed in Scripture the authentic and historical account of His creative activity.",
  },
  {
    num: "07",
    title: "Nature of Humanity",
    desc: "Man and woman were made in the image of God with individuality, the power and freedom to think and to do.",
  },
  {
    num: "08",
    title: "The Great Controversy",
    desc: "All humanity is now involved in a great controversy between Christ and Satan regarding the character of God, His law, and His sovereignty over the universe.",
  },
];

const leadership = [
  { name: "Pastor Ndiwalana Manisul", role: "Church Pastor", img: null },
  { name: "Elder Mubiru Roland", role: "First Elder", img: null },
  { name: "Nagadya Elizabeth", role: "Church Clerk", img: null },
  { name: "Vuningoma Barnabas", role: "Treasurer", img: null },
];

const timeline = [
  { year: "1985", event: "Church officially established in Kyambogo." },
  { year: "1992", event: "First permanent church building dedicated to God." },
  {
    year: "2005",
    event: "Sabbath School classes expanded to serve all age groups.",
  },
  {
    year: "2012",
    event: "Community health clinic launched to serve the neighbourhood.",
  },
  {
    year: "2019",
    event: "New sanctuary wing completed, seating over 500 members.",
  },
  {
    year: "2024",
    event: "Online streaming ministry launched on YouTube and social media.",
  },
];

function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-primary pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">
          {breadcrumb}
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-white font-bold mb-4">
          {title}
        </h1>
        <div className="w-16 h-1 bg-gold mb-4"></div>
        {subtitle && (
          <p className="text-gray-300 max-w-xl text-base">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="Home / About"
        title="About Our Church"
        subtitle="Discover who we are, what we believe, and the story of God's faithfulness in Kyambogo."
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-3 mb-4">
            <SectionHeader
              label="Our Foundation"
              title="Mission, Vision & Values"
              center={false}
            />
          </div>
          <div className="border-t-4 border-gold bg-offwhite p-8 shadow-sm">
            <h3 className="font-heading text-primary text-xl font-bold mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To make disciples of all nations by proclaiming the everlasting
              gospel in the context of the three angels' messages of Revelation
              14, leading people to accept Jesus as personal Saviour, uniting
              with His remnant church, and preparing the world for Christ's soon
              return.
            </p>
          </div>
          <div className="border-t-4 border-primary bg-offwhite p-8 shadow-sm">
            <h3 className="font-heading text-primary text-xl font-bold mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a vibrant, Spirit-filled congregation that transforms lives,
              strengthens families, and impacts the Kyambogo community with the
              love and truth of Jesus Christ, until He comes.
            </p>
          </div>
          <div className="border-t-4 border-charcoal bg-offwhite p-8 shadow-sm">
            <h3 className="font-heading text-primary text-xl font-bold mb-3">
              Our Values
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "Biblical truth above all",
                "Wholehearted worship every Sabbath",
                "Authentic Christian fellowship",
                "Compassionate community outreach",
                "Spirit-led evangelism and mission",
                "Healthy living as a witness to God's glory",
              ].map((v) => (
                <li key={v} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-gold mt-1.5 shrink-0 inline-block"></span>
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Story"
            title="Church History"
            subtitle="God has been faithful to our congregation through every season."
          />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`flex gap-6 md:gap-0 items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}
                >
                  <div className="bg-white border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-200">
                    <span className="text-gold font-bold text-lg font-heading">
                      {item.year}
                    </span>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex w-10 shrink-0 justify-center">
                  <div className="w-4 h-4 bg-gold mt-5 z-10 relative shadow-md"></div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 28 Fundamental Beliefs */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What We Believe"
            title="Our Core Beliefs"
            subtitle="The Seventh-day Adventist Church is built on the Word of God. Here are some of our foundational beliefs."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beliefs.map((b) => (
              <div
                key={b.num}
                className="bg-white bg-opacity-5 border border-white border-opacity-10 p-6 hover:bg-opacity-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-gold font-heading text-3xl font-bold mb-3">
                  {b.num}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.adventist.org/beliefs/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2"
            >
              All 28 Fundamental Beliefs <HiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Meet the Team"
            title="Our Leadership"
            subtitle="Servant leaders committed to shepherding this congregation with humility and integrity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-offwhite border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="h-52 bg-gray-200 overflow-hidden">
                  {person.img ? (
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary flex items-center justify-center">
                      <span className="font-heading text-4xl text-gold">
                        {person.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 border-t-4 border-gold">
                  <h3 className="font-heading text-primary font-bold text-lg">
                    {person.name}
                  </h3>
                  <p className="text-gold text-xs uppercase tracking-widest font-semibold mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
