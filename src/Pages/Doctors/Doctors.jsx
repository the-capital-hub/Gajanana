import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  Award,
  ShieldCheck,
  UsersRound,
  Smile,
  Stethoscope,
  Gem,
  HeartHandshake,
  MonitorSmartphone,
  HandHeart,
  Sprout,
} from "lucide-react";
import "./Doctors.css";
import hero from "../../assets/docotor/hero.png";

import parixeet from "../../assets/docotor/parixeet.png";
import kiran from "../../assets/docotor/kiran.png";
import raghavendra from "../../assets/docotor/raghavendra.png";
import vinod from "../../assets/docotor/vinod.png";
import lakshmi from "../../assets/docotor/lakshmi.png";
import deepak from "../../assets/docotor/deepak.png";
import clinic from "../../assets/about/clinic.png";

const doctors = [
  {
    name: "Parixeet Patel",
    specialty: "Pedodontist",
    image: parixeet,
    qualification: "",
  },
  {
    name: "Kiran Sunny",
    specialty: "Prosthodontist",
    image: kiran,
    qualification: "",
  },
  {
    name: "Dr Raghavendra N",
    specialty: "Oral and maxillofacial pathologist",
    image: raghavendra,
    qualification: "",
  },
  {
    name: "Dr Vinod Kumar Yadav",
    specialty: "Orthodontist",
    image: vinod,
    qualification: "",
  },
  {
    name: "Dr G Lakshmi Sri Divy",
    specialty: "Periodontist and implantologist",
    image: lakshmi,
    qualification: "",
  },
  {
    name: "Dr Dhanush CV",
    specialty: "Oral and maxillofacial surgeon and implantologist",
    image: null,
    qualification: "",
  },
  {
    name: "Dr Deepak P",
    specialty: "Oral medicine and radiologist",
    image: deepak,
    qualification: "",
  },
];

const trustItems = [
  { icon: <Smile />, title: "Experienced Team", text: "Dental professionals" },
  { icon: <Award />, title: "Specialised Care", text: "Across dental treatments" },
  { icon: <UsersRound />, title: "Patient Centric", text: "Comfort and safety first" },
  { icon: <ShieldCheck />, title: "Trusted and Professional", text: "Committed to quality care" },
];

const approachItems = [
  { icon: <Gem />, title: "High Expertise", text: "Specialists for every dental need" },
  { icon: <MonitorSmartphone />, title: "Modern Facility", text: "Advanced and safe technology" },
  { icon: <HandHeart />, title: "Personalised Care", text: "Treatment plans tailored for you" },
  { icon: <Sprout />, title: "Long Term Results", text: "Focus on your lasting oral health" },
];

function DoctorPortrait({ doctor }) {
  if (!doctor.image) {
    return (
      <div className="gdm-doctor-placeholder">
        <span className="gdm-placeholder-tooth"><Smile size={48} strokeWidth={1.35} /></span>
        <strong>Gajanana Smile Care</strong>
        <small>Doctor photo coming soon</small>
      </div>
    );
  }

  return <img src={doctor.image} alt={doctor.name} loading="lazy" />;
}

export default function Doctors() {
  return (
    <main className="gdm-page">
      {/* Hero */}
      <section className="gdm-hero">
        <div className="gdm-hero-copy">
          <span className="gdm-eyebrow"><UsersRound size={16} /> OUR DOCTORS</span>
          <h1>Meet Our <span>Dental Experts</span></h1>
          <p>
            A team of experienced and compassionate dental professionals
            dedicated to your healthy and confident smile.
          </p>
          <Link to="/appointment" className="gdm-hero-button">
            Book an Appointment <ArrowRight size={18} />
          </Link>
        </div>

        <div className="gdm-hero-team">
          
          {/* <div className="gdm-hero-team-photo gdm-hero-team-main">
            <img src={parixeet} alt="Parixeet Patel" />
          </div>
          <div className="gdm-hero-team-photo gdm-hero-team-left">
            <img src={kiran} alt="Kiran Sunny" />
          </div>
          <div className="gdm-hero-team-photo gdm-hero-team-right">
            <img src={vinod} alt="Dr Vinod Kumar Yadav" />
          </div>
          <div className="gdm-hero-team-photo gdm-hero-team-small">
            <img src={lakshmi} alt="Dr G Lakshmi Sri Divy" />
          </div> */}
          <div className="gdm-hero-team-caption">
            <Smile size={18} />
            <span><strong>Gajanana Smile Care</strong><small>Your smile is our focus</small></span>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="gdm-trust-strip">
        {trustItems.map((item) => (
          <div className="gdm-trust-item" key={item.title}>
            <span className="gdm-trust-icon">{item.icon}</span>
            <span className="gdm-trust-copy">
              <strong>{item.title}</strong>
              <small>{item.text}</small>
            </span>
          </div>
        ))}
      </section>

      {/* Doctor cards */}
      <section className="gdm-team-section" id="our-doctors">
        <div className="gdm-section-heading">
          <span className="gdm-section-pill"><Smile size={16} /> OUR TEAM</span>
          <h2>Meet Our Dental Experts</h2>
          <p>Skilled, experienced and dedicated to delivering thoughtful dental care.</p>
        </div>

        <div className="gdm-doctor-grid">
          {doctors.map((doctor, index) => (
            <article className="gdm-doctor-card" key={doctor.name}>
              <div className="gdm-doctor-photo">
                <DoctorPortrait doctor={doctor} />
                <span className="gdm-doctor-photo-index">0{index + 1}</span>
              </div>
              <div className="gdm-doctor-content">
                <h3>{doctor.name}</h3>
                {doctor.qualification ? (
                  <p className="gdm-doctor-qualification">{doctor.qualification}</p>
                ) : null}
                <div className="gdm-doctor-specialty">
                  <Stethoscope size={19} />
                  <span>{doctor.specialty}</span>
                </div>
                <Link to="/contact" className="gdm-profile-link">
                  Contact Clinic <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach section */}
      <section className="gdm-approach">
        <div className="gdm-approach-image">
          <img src={clinic} alt="Gajanana Smile Care clinic interior" loading="lazy" />
          <span className="gdm-image-caption">A welcoming space for your smile</span>
        </div>
        <div className="gdm-approach-content">
          <span className="gdm-approach-kicker">OUR APPROACH</span>
          <h2>Our Approach to Your Care</h2>
          <p className="gdm-approach-intro">
            We combine clinical expertise, modern technology and a patient
            centred approach to support your dental health.
          </p>
          <div className="gdm-approach-grid">
            {approachItems.map((item) => (
              <div className="gdm-approach-item" key={item.title}>
                <span>{item.icon}</span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gdm-cta">
        <div className="gdm-cta-tooth"><Smile size={64} strokeWidth={1.25} /></div>
        <div className="gdm-cta-copy">
          <span>PERSONALISED DENTAL CARE</span>
          <h2>Consult Our Dental Team Today</h2>
          <p>Book an appointment with our team and take a step towards a healthier smile.</p>
        </div>
        <Link to="/appointment" className="gdm-cta-button">
          <CalendarDays size={19} /> Book an Appointment <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
