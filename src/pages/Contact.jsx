import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaCheckCircle,
} from "react-icons/fa";
import SectionHeader from "../components/ui/SectionHeader";
import { sendContactEmail } from "../services/emailService";

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

const socials = [
  {
    icon: <FaYoutube className="text-xl" />,
    label: "YouTube",
    handle: "@kyambogosdachurch",
    url: "https://www.youtube.com/@kyambogosdachurch",
    colour: "hover:bg-red-600",
  },
  {
    icon: <FaTwitter className="text-xl" />,
    label: "Twitter/X",
    handle: "@kyambogosdachurch",
    url: "https://twitter.com/kyambogosdachurch",
    colour: "hover:bg-sky-500",
  },
  {
    icon: <FaTiktok className="text-xl" />,
    label: "TikTok",
    handle: "@kyambogosdachurch",
    url: "https://www.tiktok.com/@kyambogosdachurch",
    colour: "hover:bg-black",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      await sendContactEmail(form);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS send error:", error);
      setErrorMessage(
        error?.message ||
          "Unable to send your message right now. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        breadcrumb="Home / Contact"
        title="Get in Touch"
        subtitle="We would love to hear from you. Reach out, visit us, or connect on social media."
      />

      {/* Contact block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info panel — 2 cols */}
          <div className="lg:col-span-2">
            <SectionHeader
              label="Find Us"
              title="Church Information"
              center={false}
            />

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                    Address
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Kyambogo, Nakawa Division
                    <br />
                    Kampala, Uganda
                    <br />
                    (Kyambogo University)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+256774555259"
                    className="text-gray-700 text-sm hover:text-gold transition-colors"
                  >
                    +256 774555259
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:kyambogosdachurch@gmail.com"
                    className="text-gray-700 text-sm hover:text-gold transition-colors break-all"
                  >
                    kyambogosdachurch@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                  <FaClock className="text-white" />
                </div>
                <div>
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">
                    Service Times
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>
                      Sabbath School: <strong>Sat 8:30 AM</strong>
                    </li>
                    <li>
                      Divine Service: <strong>Sat 11:00 AM</strong>
                    </li>
                    <li>
                      MidWeek Fellowship: <strong>Wed 5:30 PM</strong>
                    </li>
                    <li>
                      Vespers: <strong>Fri 6:30 PM</strong>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            {/* Social media */}
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">
                Follow Us Online
              </p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`contact-${s.label.toLowerCase()}`}
                    className={`flex items-center gap-4 bg-primary text-white px-4 py-3 ${s.colour} transition-colors duration-300`}
                  >
                    <div className="text-gold">{s.icon}</div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest">
                        {s.label}
                      </div>
                      <div className="text-gray-300 text-xs">{s.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form — 3 cols */}
          <div className="lg:col-span-3">
            <SectionHeader
              label="Send a Message"
              title="We'd Love to Hear from You"
              center={false}
            />

            {submitted ? (
              <div className="bg-offwhite border-l-4 border-gold p-8 flex items-start gap-4">
                <FaCheckCircle className="text-gold text-3xl shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-primary text-xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Thank you for reaching out. A member of our team will get
                    back to you within 24–48 hours. God bless you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 btn-primary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                id="contact-form"
              >
                {errorMessage && (
                  <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  />
                </div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-offwhite" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="w-full h-72 bg-gray-200 border border-gray-300 overflow-hidden shadow-sm">
            <iframe
              title="Kyambogo SDA Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7452434442857!2d32.62584847496461!3d0.34677819964981976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db97fefedfa2d%3A0xbc2ee349b62cf831!2sKyambogo%20Seventh%20Day%20Adventist%20Church!5e0!3m2!1sen!2sga!4v1782828112911!5m2!1sen!2sga"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-primary text-white px-6 py-4 flex items-center gap-3">
            <FaMapMarkerAlt className="text-gold text-lg shrink-0" />
            <span className="text-sm">
              Kyambogo, Nakawa Division, Kampala, Uganda - Within Kyambogo
              University
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
