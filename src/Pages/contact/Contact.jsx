import React, { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Headset,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smile,
  Send,
  ArrowRight,
  Navigation,
} from "lucide-react";
import "./Contact.css";

const CLINIC_PHONE = "9686863278";
const CLINIC_EMAIL = "info@gajananasmilecare.com";
const CLINIC_ADDRESS =
  "No. 26/5, SLVR Building, Above Medplus Pharmacy, 9th Cross Road, ITPL Main Road, Kundalahalli Colony, Kundalahalli, Brookefield, Bengaluru, Karnataka 560037";

const features = [
  {
    icon: <CalendarDays />,
    title: "Book an Appointment",
    text: "Choose a convenient time",
  },
  {
    icon: <Headset />,
    title: "Get Expert Advice",
    text: "Talk to our dental team",
  },
  {
    icon: <MapPin />,
    title: "Visit Our Clinic",
    text: "Find our Bengaluru location",
  },
  {
    icon: <Clock3 />,
    title: "Quick Response",
    text: "Our team will get back to you",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const updateField = (e) => {
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = [
      "Hello Gajanana Smile Care, I have a query.",
      "",
      `Name: ${form.fullName}`,
      `Mobile: ${form.mobile}`,
      `Email: ${form.email || "Not provided"}`,
      `Subject: ${form.subject}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(
      `https://wa.me/91${CLINIC_PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_ADDRESS)}`;

  return (
    <main className="gs-contact-page">
      <section className="gs-contact-hero">
        <div className="gs-contact-hero-copy">
          <span className="gs-contact-eyebrow">
            <MessageCircle size={16} /> CONTACT US
          </span>
          <h1>
            Get in Touch<span>With Our Dental Team</span>
          </h1>
          <p>
            Have a question, need a consultation, or want to book an
            appointment? We are here to help you with personalised dental care.
          </p>
        </div>
        <div className="gs-contact-hero-image">
          <img
            src="/images/contact/clinic-reception.jpg"
            alt="Reception area at Gajanana Smile Care"
          />
          <div className="gs-contact-hero-image-shade" />
        </div>
      </section>

      <section className="gs-contact-features" aria-label="Contact benefits">
        {features.map((item) => (
          <div className="gs-contact-feature" key={item.title}>
            <span className="gs-contact-feature-icon">{item.icon}</span>
            <div>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="gs-contact-main">
        <aside className="gs-contact-info">
          <span className="gs-contact-kicker">WE ARE HERE TO HELP</span>
          <h2>Contact Information</h2>
          <p className="gs-contact-info-intro">
            Reach out to us for appointments, enquiries, or assistance related
            to your dental care.
          </p>
          <div className="gs-contact-info-list">
            <a className="gs-contact-info-item" href={`tel:+91${CLINIC_PHONE}`}>
              <span className="gs-contact-info-icon">
                <Phone />
              </span>
              <span>
                <strong>Phone</strong>
                <small>+91 {CLINIC_PHONE}</small>
              </span>
            </a>
            <a className="gs-contact-info-item" href={`mailto:${CLINIC_EMAIL}`}>
              <span className="gs-contact-info-icon">
                <Mail />
              </span>
              <span>
                <strong>Email</strong>
                <small>{CLINIC_EMAIL}</small>
              </span>
            </a>
            <div className="gs-contact-info-item">
              <span className="gs-contact-info-icon">
                <MapPin />
              </span>
              <span>
                <strong>Clinic Address</strong>
                <small>
                  Gajanana Smile Care
                  <br />
                  {CLINIC_ADDRESS}
                </small>
              </span>
            </div>
            <div className="gs-contact-info-item">
              <span className="gs-contact-info-icon">
                <Clock3 />
              </span>
              <span>
                <strong>Working Hours</strong>
                <small>
                  Please contact our team to confirm clinic timings.
                </small>
              </span>
            </div>
          </div>
          <div className="gs-contact-callout">
            <span className="gs-contact-callout-icon">
              <Phone />
            </span>
            <div>
              <h3>Need quick assistance?</h3>
              <p>Call our team and we will be happy to guide you.</p>
              <a href={`tel:+91${CLINIC_PHONE}`}>
                Call +91 {CLINIC_PHONE} <ArrowRight size={16} />
              </a>
            </div>
            <Smile className="gs-contact-callout-watermark" />
          </div>
        </aside>

        <section className="gs-contact-form-card">
          <div className="gs-contact-form-heading">
            <span className="gs-contact-form-icon">
              <MessageCircle />
            </span>
            <div>
              <h2>Send Us a Message</h2>
              <p>
                Fill in your details and our team will get back to you shortly.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="gs-contact-fields">
              <label className="gs-contact-field">
                <span>
                  Full Name <b>*</b>
                </span>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="gs-contact-field">
                <span>
                  Mobile Number <b>*</b>
                </span>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={updateField}
                  placeholder="Enter 10 digit mobile number"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  autoComplete="tel"
                  required
                />
              </label>
              <label className="gs-contact-field">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="Enter your email address"
                  autoComplete="email"
                />
              </label>
              <label className="gs-contact-field">
                <span>
                  Subject <b>*</b>
                </span>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={updateField}
                  required
                >
                  <option value="">Select a subject</option>
                  <option>Appointment enquiry</option>
                  <option>Treatment information</option>
                  <option>General enquiry</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="gs-contact-field gs-contact-field-full">
                <span>
                  Your Message <b>*</b>
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  required
                />
              </label>
            </div>
            <button className="gs-contact-submit" type="submit">
              <Send size={19} /> Send Message <ArrowRight size={19} />
            </button>
            {sent && (
              <p className="gs-contact-success" role="status">
                <ShieldCheck size={17} /> Your message is ready in WhatsApp.
                Send it there to contact our team.
              </p>
            )}
            <p className="gs-contact-form-note">
              Your details will be used only to respond to your enquiry.
            </p>
          </form>
        </section>
      </section>

      <section className="gs-contact-location">
        <div className="gs-contact-map-card">
          <iframe
            title="Gajanana Smile Care location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="gs-contact-location-copy">
          <span className="gs-contact-location-icon">
            <MapPin />
          </span>
          <span className="gs-contact-kicker">COME VISIT US</span>
          <h2>Find Our Clinic</h2>
          <p>
            Visit Gajanana Smile Care at Kundalahalli, Brookefield, Bengaluru.
            Use the map to plan your visit.
          </p>
          <a
            className="gs-contact-directions"
            href={directions}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation size={18} /> Get Directions on Google Maps{" "}
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="gs-contact-clinic-image">
          <img
            src="/images/contact/dental-treatment-room.jpg"
            alt="Dental treatment room"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
