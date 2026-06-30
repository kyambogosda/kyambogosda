import SectionHeader from "./SectionHeader";

function MissionVisionSection() {
  return (
    <section className="py-20 bg-slate-50" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Our Foundation" title="Mission, Motto & Values" />
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
  );
}

export default MissionVisionSection;
