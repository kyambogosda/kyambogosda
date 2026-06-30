import SectionHeader from "./SectionHeader";

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

function JoinSection() {
  return (
    <section className="py-20 bg-slate-800" id="join">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
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
  );
}

export default JoinSection;
