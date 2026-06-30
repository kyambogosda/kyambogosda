import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import SectionHeader from "./SectionHeader";

function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
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
  );
}

export default ContactSection;
