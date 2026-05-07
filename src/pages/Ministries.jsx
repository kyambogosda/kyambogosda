import { FaUsers, FaHeart, FaChild, FaBookOpen, FaHandHoldingHeart, FaCross, FaMusic, FaMale } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeader from '../components/ui/SectionHeader'
import youthImg from '../assets/youth_ministry.png'
import communityImg from '../assets/community_service.png'
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

const ministries = [
  {
    icon: <FaUsers className="text-3xl" />,
    title: "Adventist Youth (AY) Society",
    leader: "Leader: Bro. David Mukasa",
    meets: "Sabbath Afternoons — 3:00 PM",
    desc: "The AY Society equips young people aged 15–35 to grow in faith, develop leadership skills, and be active witnesses for Christ. Our programs include Bible study, community outreach, nature activities, and Pathfinder/Adventurer clubs.",
    colour: "border-gold",
    img: youthImg,
  },
  {
    icon: <FaHeart className="text-3xl" />,
    title: "Women's Ministry (Dorcas Society)",
    leader: "Leader: Sis. Grace Nalule",
    meets: "First Sabbath of every month",
    desc: "The Dorcas Society ministers to women in all seasons of life — offering spiritual encouragement, practical support for the vulnerable, and a safe space for fellowship and growth in God's Word.",
    colour: "border-primary",
    img: congregationImg,
  },
  {
    icon: <FaMale className="text-3xl" />,
    title: "Men's Ministry",
    leader: "Leader: Elder Samuel Kizito",
    meets: "Second Saturday of every month",
    desc: "Calling men to be faithful spiritual leaders in their homes and community. We study Biblical manhood, accountability, and service — equipping men to stand strong for Christ in every area of life.",
    colour: "border-charcoal",
    img: null,
  },
  {
    icon: <FaChild className="text-3xl" />,
    title: "Children's Sabbath School",
    leader: "Leader: Sis. Esther Achieng",
    meets: "Every Sabbath — 9:00 AM",
    desc: "A vibrant, engaging Sabbath School experience for children aged 0–14. Through Bible stories, songs, crafts, and memory verses, we plant seeds of faith that last a lifetime.",
    colour: "border-gold",
    img: null,
  },
  {
    icon: <FaBookOpen className="text-3xl" />,
    title: "Sabbath School & Personal Ministries",
    leader: "Leader: Bro. Philip Okuonzi",
    meets: "Every Sabbath — 9:00 AM",
    desc: "Sabbath School is the heartbeat of our church's education and outreach ministry. Classes are available for all ages, with quarterly lesson guides, Bible discussion, and mission reports from around the world.",
    colour: "border-primary",
    img: congregationImg,
  },
  {
    icon: <FaHandHoldingHeart className="text-3xl" />,
    title: "Community Services",
    leader: "Leader: Deacon John Ssebyala",
    meets: "Monthly outreach Saturdays",
    desc: "Living out the gospel in action. Our Community Services team organises food distribution, health screenings, clothing drives, and prisoner ministry — reflecting Christ's love to all in need.",
    colour: "border-charcoal",
    img: communityImg,
  },
  {
    icon: <FaMusic className="text-3xl" />,
    title: "Music Ministry / Choir",
    leader: "Director: Sis. Harriet Nambooze",
    meets: "Thursdays — 6:00 PM rehearsals",
    desc: "Worship God with excellence! Our church choir leads the congregation in Spirit-filled praise every Sabbath. New voices are always welcome — come and let your gift glorify God.",
    colour: "border-gold",
    img: null,
  },
  {
    icon: <FaCross className="text-3xl" />,
    title: "Evangelism & Discipleship",
    leader: "Leader: Elder Patrick Mulindwa",
    meets: "Monthly planning meetings",
    desc: "We are called to go and make disciples. This ministry organises evangelistic series, Bible studies in homes, and training for every member to share their faith confidently and effectively.",
    colour: "border-primary",
    img: congregationImg,
  },
]

export default function Ministries() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Ministries"
        title="Our Ministries"
        subtitle="Every ministry is a door of service. Find your place and make a difference for God's kingdom."
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Get Involved"
            title="A Ministry for Everyone"
            subtitle="At Kyambogo SDA Church, we believe every member is gifted by God and called to serve. Whether you are young or old, new or seasoned in faith — there is a place for you."
          />
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ministries.map(m => (
            <div
              key={m.title}
              className={`border-l-4 ${m.colour} bg-offwhite shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row overflow-hidden`}
            >
              {m.img && (
                <div className="sm:w-36 h-36 sm:h-auto shrink-0">
                  <img src={m.img} alt={m.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6 flex flex-col justify-center">
                <div className="text-gold mb-3">{m.icon}</div>
                <h3 className="font-heading text-primary font-bold text-xl mb-1">{m.title}</h3>
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">{m.meets}</p>
                <p className="text-gray-400 text-xs mb-3">{m.leader}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gold py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl text-white font-bold mb-4">Ready to Find Your Ministry?</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-5"></div>
          <p className="text-white text-opacity-90 mb-8 max-w-xl mx-auto">
            Contact the church office and we will help connect you to the ministry where your gifts and passion can shine for God's glory.
          </p>
          <a
            href="/contact"
            className="bg-white text-gold font-bold text-sm uppercase tracking-widest px-7 py-3 hover:bg-primary hover:text-white transition-all duration-300 border-2 border-white inline-flex items-center gap-2"
          >
            Contact Us <HiArrowRight />
          </a>
        </div>
      </section>
    </>
  )
}
