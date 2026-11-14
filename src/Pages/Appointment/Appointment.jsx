import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smile,
  Stethoscope,
  UserRound,
  ArrowRight,
  Sparkles,
  Menu,
} from "lucide-react";
import "./Appointment.css";

const CLINIC_PHONE = "9686863278";
const CLINIC_EMAIL = "info@gajananasmilecare.com";

const benefits = [
  {
    icon: <Smile />,
    title: "Experienced Dentists",
    text: "Care from a team with expertise across dental specialities",
  },
  {
    icon: <ShieldCheck />,
    title: "Personalised Treatment",
    text: "A treatment plan shaped around your dental needs",
  },
  {
    icon: <Stethoscope />,
    title: "Modern Facilities",
    text: "A comfortable clinic with modern dental facilities",
  },
  {
    icon: <Heart />,
    title: "Comfortable Experience",
    text: "A friendly team focused on your comfort",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
];

const dentists = [
  "Any available dentist",
  "Parixeet Patel",
  "Kiran Sunny",
  "Dr Raghavendra N",
  "Dr Vinod Kumar Yadav",
  "Dr G Lakshmi Sri Divy",
  "Dr Dhanush CV",
  "Dr Deepak P",
];

function Appointment() {
  const today = useMemo(() => {
    const date = new Date();
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().split("T")[0];
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    date: "",
    time: "",
    dentist: "Any available dentist",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Gajanana Smile Care, I would like to book an appointment.",
      "",
      `Name: ${form.fullName}`,
      `Mobile: ${form.mobile}`,
      `Email: ${form.email || "Not provided"}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      `Dentist: ${form.dentist}`,
      `Reason for visit: ${form.reason || "Not specified"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/91${CLINIC_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="gs-appointment-page">
      <section className="gs-appointment-hero">
        <div className="gs-appointment-hero-copy">
          <span className="gs-appointment-eyebrow">
            <CalendarDays size={16} /> APPOINTMENT
          </span>
          <h1>
            Book Your
            <span> Dental Appointment</span>
          </h1>
          <p>
            Get expert dental care from our experienced team. Book an
            appointment at your convenience and take the first step towards a
            healthier, brighter smile.
          </p>
        </div>
        <div className="gs-appointment-hero-image">
          <img
            src="/images/appointment/dental-clinic.jpg"
            alt="Modern dental treatment room"
          />
          <div className="gs-appointment-image-shade" />
        </div>
      </section>

      <section className="gs-appointment-trust" aria-label="Appointment benefits">
        <div className="gs-appointment-trust-item">
          <CalendarDays />
          <div><strong>Easy Booking</strong><span>Schedule in minutes</span></div>
        </div>
        <div className="gs-appointment-trust-item">
          <Smile />
          <div><strong>Expert Care</strong><span>Experienced dental team</span></div>
        </div>
        <div className="gs-appointment-trust-item">
          <ShieldCheck />
          <div><strong>Safe and Hygienic</strong><span>Care in a clean clinic</span></div>
        </div>
        <div className="gs-appointment-trust-item">
          <Clock3 />
          <div><strong>Timely Appointments</strong><span>Plan your visit ahead</span></div>
        </div>
      </section>

      <section className="gs-appointment-main">
        <aside className="gs-appointment-aside">
          <span className="gs-section-kicker">YOUR SMILE MATTERS</span>
          <h2>Why Book With Us?</h2>
          <p className="gs-appointment-aside-intro">
            A simple and convenient way to get quality dental care.
          </p>

          <div className="gs-appointment-benefits">
            {benefits.map((item) => (
              <div className="gs-appointment-benefit" key={item.title}>
                <span className="gs-appointment-benefit-icon">{item.icon}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            ))}
          </div>

          <div className="gs-appointment-help">
            <div className="gs-appointment-help-heading">
              <Phone />
              <div><h3>Need Assistance?</h3><p>Our team is here to help with your booking and queries.</p></div>
            </div>
            <a href={`tel:+91${CLINIC_PHONE}`}><Phone size={17} /> +91 {CLINIC_PHONE}</a>
            <a href={`mailto:${CLINIC_EMAIL}`}><Mail size={17} /> {CLINIC_EMAIL}</a>
            <div className="gs-appointment-address">
              <MapPin size={18} />
              <span>No. 26/5, SLVR Building, Above Medplus Pharmacy, 9th Cross Road, ITPL Main Road, Kundalahalli, Brookefield, Bengaluru, Karnataka 560037</span>
            </div>
            <Smile className="gs-appointment-help-watermark" />
          </div>
        </aside>

        <section className="gs-appointment-form-card">
          <div className="gs-appointment-form-heading">
            <span className="gs-appointment-form-icon"><CalendarDays /></span>
            <div>
              <h2>Book an Appointment</h2>
              <p>Fill in your details and our team will confirm your appointment shortly.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="gs-appointment-fields">
              <label className="gs-appointment-field">
                <span>Full Name <b>*</b></span>
                <span className="gs-appointment-input-wrap"><UserRound /><input name="fullName" value={form.fullName} onChange={updateField} placeholder="Enter your full name" autoComplete="name" required /></span>
              </label>

              <label className="gs-appointment-field">
                <span>Mobile Number <b>*</b></span>
                <span className="gs-appointment-input-wrap"><Phone /><input name="mobile" value={form.mobile} onChange={updateField} placeholder="Enter 10 digit mobile number" inputMode="numeric" pattern="[0-9]{10}" maxLength="10" autoComplete="tel" required /></span>
              </label>

              <label className="gs-appointment-field">
                <span>Email Address</span>
                <span className="gs-appointment-input-wrap"><Mail /><input type="email" name="email" value={form.email} onChange={updateField} placeholder="Enter your email address" autoComplete="email" /></span>
              </label>

              <label className="gs-appointment-field">
                <span>Preferred Date <b>*</b></span>
                <span className="gs-appointment-input-wrap"><CalendarDays /><input type="date" name="date" min={today} value={form.date} onChange={updateField} required /></span>
              </label>

              <label className="gs-appointment-field">
                <span>Preferred Time <b>*</b></span>
                <span className="gs-appointment-input-wrap"><Clock3 /><select name="time" value={form.time} onChange={updateField} required><option value="">Select time</option>{timeSlots.map((slot) => <option value={slot} key={slot}>{slot}</option>)}</select></span>
              </label>

              <label className="gs-appointment-field">
                <span>Consultation With</span>
                <span className="gs-appointment-input-wrap"><UserRound /><select name="dentist" value={form.dentist} onChange={updateField}>{dentists.map((dentist) => <option key={dentist} value={dentist}>{dentist}</option>)}</select></span>
              </label>

              <label className="gs-appointment-field gs-appointment-field-full">
                <span>Reason for Visit</span>
                <span className="gs-appointment-textarea-wrap"><textarea name="reason" value={form.reason} onChange={updateField} placeholder="Tell us about your concern (optional)" rows="4" /></span>
              </label>
            </div>

            <button className="gs-appointment-submit" type="submit">
              <CalendarDays /> Book Appointment <ArrowRight />
            </button>
            {submitted && (
              <p className="gs-appointment-success" role="status">
                <CheckCircle2 size={17} /> Your booking details are ready in WhatsApp. Please send the message to complete your request.
              </p>
            )}
            <p className="gs-appointment-form-note">Our team will contact you to confirm the appointment date and time.</p>
          </form>
        </section>
      </section>

      <section className="gs-appointment-steps">
        <span className="gs-appointment-steps-kicker"><Sparkles size={15} /> HOW IT WORKS</span>
        <h2>Your Appointment in 3 Simple Steps</h2>
        <p className="gs-appointment-steps-subtitle">Book, confirm and visit. It is that easy!</p>
        <div className="gs-appointment-step-grid">
          <div className="gs-appointment-step">
            <span className="gs-appointment-step-icon"><CalendarDays /></span>
            <div><h3>1. Book Online</h3><p>Fill in your details and preferred time</p></div>
          </div>
          <ArrowRight className="gs-appointment-step-arrow" />
          <div className="gs-appointment-step">
            <span className="gs-appointment-step-icon"><CheckCircle2 /></span>
            <div><h3>2. Get Confirmed</h3><p>Receive confirmation from our team</p></div>
          </div>
          <ArrowRight className="gs-appointment-step-arrow" />
          <div className="gs-appointment-step">
            <span className="gs-appointment-step-icon"><Smile /></span>
            <div><h3>3. Visit the Clinic</h3><p>Come at your scheduled time and get care</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Appointment;
