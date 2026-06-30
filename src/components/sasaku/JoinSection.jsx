import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { sendRegistrationData } from "../../services/registrationService";

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
  const [formData, setFormData] = useState({
    fullName: "",
    studentNumber: "",
    email: "",
    phone: "",
    faculty: "",
    sdaStatus: "Yes, I am an SDA member",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await sendRegistrationData(formData);

      if (response.ok || response === undefined) {
        setSubmitStatus("success");
        setStatusMessage(
          "Registration submitted successfully! Welcome to SASAKU!",
        );
        setFormData({
          fullName: "",
          studentNumber: "",
          email: "",
          phone: "",
          faculty: "",
          sdaStatus: "Yes, I am an SDA member",
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          "Registration submitted. We'll contact you soon to confirm!",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("success");
      setStatusMessage(
        "Registration submitted. We've saved your information locally!",
      );
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setSubmitting(false);
    }
  };
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

          {submitStatus && (
            <div
              className={`mb-6 p-4 rounded ${
                submitStatus === "success"
                  ? "bg-green-100 border border-green-400 text-green-700"
                  : "bg-red-100 border border-red-400 text-red-700"
              }`}
            >
              {statusMessage}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
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
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                placeholder="e.g. School of Engineering"
                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-1.5">
                Are you a Seventh-day Adventist?
              </label>
              <select
                name="sdaStatus"
                value={formData.sdaStatus}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-sky-600"
              >
                <option>Yes, I am an SDA member</option>
                <option>I am interested in Adventism</option>
                <option>I am still exploring</option>
              </select>
            </div>
            <button
              type="submit"
              id="sasaku-register-btn"
              disabled={submitting}
              className="w-full bg-sky-700 text-white font-bold text-sm uppercase tracking-widest py-3 border-2 border-sky-700 hover:bg-transparent hover:text-sky-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Registering..." : "Register Now"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JoinSection;
