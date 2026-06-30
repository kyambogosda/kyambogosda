import SectionHeader from "./SectionHeader";

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
    day: "15",
    month: "August",
    title: "Freshers' Sabbath",
    time: "8:00AM - 5:00 PM",
    venue: "Kyambogo University SDA Church",
    tag: "Special",
  },
  {
    day: "30",
    month: "August",
    title: "End of Month movie night",
    time: "6:00 PM",
    venue: "Kyambogo SDA Church",
    tag: "Special",
  },
  {
    day: "Coming",
    month: "Soon",
    title: "SocialDay Out",
    time: "All Day",
    venue: "To be communicated",
    tag: "Social",
  },
];

function EventsSection() {
  return (
    <section className="py-20 bg-slate-50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="On the Calendar" title="Upcoming Events" />
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
  );
}

export default EventsSection;
