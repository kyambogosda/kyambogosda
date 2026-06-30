import SectionHeader from "./SectionHeader";
import sasakGents from "../../assets/sasakugents.jpg";

function AboutSection() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeader
            label="Who We Are"
            title="About SASAKU"
            center={false}
          />
          <p className="text-gray-600 leading-relaxed mb-5">
            SASAKU- The{" "}
            <strong>
              Seventh-day Adventist Students Association of Kyambogo University
            </strong>{" "}
            is a Christ-centred student association operating under the umbrella
            of <strong>Public Campus Ministries</strong>. We exist to connect,
            nurture, and mobilise Adventist students at one of Uganda's premier
            universities.
          </p>
          <p className="text-gray-600 leading-relaxed mb-5">
            Whether you are a lifelong Adventist or just discovering the faith,
            SASAKU is a home for you. We believe that the university years are
            among the most formative in a person's life and we are here to make
            sure that faith, purpose, and community are at the centre of that
            journey.
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
  );
}

export default AboutSection;
