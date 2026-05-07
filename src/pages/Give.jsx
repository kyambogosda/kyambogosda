import { FaHandHoldingHeart, FaMobileAlt, FaUniversity, FaCheckCircle } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
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

const givingTypes = [
  {
    title: 'Tithe',
    desc: 'Tithe is one tenth (10%) of your income returned to God. It is used to support the ministry of the gospel worldwide through the SDA Church organisation.',
    verse: '"Bring the whole tithe into the storehouse..." — Malachi 3:10',
  },
  {
    title: 'Local Church Budget',
    desc: 'These offerings support the day-to-day operations of our local church — utilities, maintenance, programs, and outreach activities.',
    verse: '"Each of you should give what you have decided in your heart to give..." — 2 Corinthians 9:7',
  },
  {
    title: 'World Budget',
    desc: 'Contributions toward the global mission of the Seventh-day Adventist Church — supporting evangelism, schools, hospitals and churches worldwide.',
    verse: '"Go into all the world and preach the gospel..." — Mark 16:15',
  },
  {
    title: 'Special Offerings',
    desc: 'Throughout the year, we collect special offerings for causes such as Ingathering, 13th Sabbath, camp meetings, and disaster relief funds.',
    verse: '"Whoever sows generously will also reap generously." — 2 Corinthians 9:6',
  },
]

export default function Give() {
  return (
    <>
      <PageHero
        breadcrumb="Home / Give"
        title="Tithes & Offerings"
        subtitle="Giving is an act of worship and trust in God. Thank you for your faithful generosity."
      />

      {/* Why Give */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-label mb-3">Biblical Stewardship</p>
            <h2 className="font-heading text-4xl text-primary font-bold leading-tight mb-5">
              Why We Give
            </h2>
            <div className="w-16 h-1 bg-gold mb-7"></div>
            <p className="text-gray-600 leading-relaxed mb-5">
              We give because God first gave to us. The Bible teaches that everything we have belongs to God — and returning a portion to Him is an expression of gratitude, trust, and worship.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              In the Seventh-day Adventist Church, we practise systematic benevolence — a faithful, regular plan of giving that supports the local church, the wider denomination, and world mission.
            </p>
            <ul className="space-y-3">
              {[
                'Tithe supports gospel ministry globally',
                'Offerings fuel local and worldwide evangelism',
                'Community services meet practical needs',
                'Special projects build God\'s kingdom on earth',
              ].map(p => (
                <li key={p} className="flex items-start gap-3 text-gray-600 text-sm">
                  <FaCheckCircle className="text-gold mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Scripture quote panel */}
          <div className="bg-primary p-10 shadow-xl">
            <div className="w-12 h-12 bg-gold flex items-center justify-center mb-6">
              <FaHandHoldingHeart className="text-white text-xl" />
            </div>
            <blockquote className="font-heading text-2xl text-white font-semibold italic leading-relaxed mb-5">
              "Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this, says the LORD Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
            </blockquote>
            <div className="w-12 h-0.5 bg-gold mb-3"></div>
            <cite className="text-gold text-sm font-bold uppercase tracking-widest not-italic">Malachi 3:10</cite>
          </div>
        </div>
      </section>

      {/* Types of Giving */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Giving Categories" title="Ways to Give" subtitle="Your offerings make a difference — locally and around the world." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {givingTypes.map((g, i) => (
              <div key={g.title} className="bg-white border-l-4 border-gold shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-gold font-heading text-4xl font-bold mb-3 opacity-30">0{i + 1}</div>
                <h3 className="font-heading text-primary text-xl font-bold mb-3">{g.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{g.desc}</p>
                <p className="text-gray-400 text-xs italic border-l-2 border-gold pl-3">{g.verse}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Give */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How to Contribute" title="Give Online or In Person" subtitle="Choose the most convenient method for you. All methods are safe and go directly to the church." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {/* In Person */}
            <div className="bg-offwhite border border-gray-100 shadow-sm p-7">
              <div className="w-12 h-12 bg-primary flex items-center justify-center mb-5">
                <FaHandHoldingHeart className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">In Person</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Offering envelopes are available at the church every Sabbath. Place your tithe and offering in the designated envelope and deposit it during the offertory.
              </p>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest">Every Sabbath · 9:00 AM onwards</p>
            </div>

            {/* Mobile Money */}
            <div className="bg-primary p-7 shadow-xl">
              <div className="w-12 h-12 bg-gold flex items-center justify-center mb-5">
                <FaMobileAlt className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-white text-xl font-bold mb-3">Mobile Money</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Send your tithe or offering via MTN Mobile Money or Airtel Money. After sending, please message the treasurer with your name and purpose of payment.
              </p>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-10 p-3 border border-white border-opacity-20">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">MTN Mobile Money</p>
                  <p className="text-white font-heading text-lg font-bold">0770 000 000</p>
                  <p className="text-gray-400 text-xs">Name: Kyambogo SDA Church</p>
                </div>
                <div className="bg-white bg-opacity-10 p-3 border border-white border-opacity-20">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Airtel Money</p>
                  <p className="text-white font-heading text-lg font-bold">0750 000 000</p>
                  <p className="text-gray-400 text-xs">Name: Kyambogo SDA Church</p>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-offwhite border border-gray-100 shadow-sm p-7">
              <div className="w-12 h-12 bg-gold flex items-center justify-center mb-5">
                <FaUniversity className="text-white text-xl" />
              </div>
              <h3 className="font-heading text-primary text-xl font-bold mb-3">Bank Transfer</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                You may also give via direct bank transfer. Please use your name as the reference and email the church office with details of your gift.
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-0.5">Bank</span>
                  <span className="text-gray-700 font-semibold">Stanbic Bank Uganda</span>
                </div>
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-0.5">Account Name</span>
                  <span className="text-gray-700 font-semibold">Kyambogo SDA Church</span>
                </div>
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-0.5">Account Number</span>
                  <span className="text-gray-700 font-semibold">9030012345678</span>
                </div>
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-0.5">Branch</span>
                  <span className="text-gray-700 font-semibold">Kampala Main Branch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Banner */}
      <section className="bg-gold py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-heading text-2xl text-white font-semibold italic leading-relaxed mb-4">
            "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
          </blockquote>
          <div className="w-16 h-0.5 bg-white mx-auto mb-3"></div>
          <cite className="text-white text-sm font-bold uppercase tracking-widest not-italic">Luke 6:38</cite>
        </div>
      </section>
    </>
  )
}
