import { FaUsers, FaBookOpen, FaMobile } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

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

function ProgramsSection() {
  return (
    <section className="py-20 bg-slate-900" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
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
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
