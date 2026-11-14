import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
  Award,
  HandHeart,
} from "lucide-react";
import "./About.css";

import clinic from "../../assets/about/clinic.png";

const values = [
  {
    icon: Heart,
    title: "Patient First",
    text: "Your comfort, safety and satisfaction guide every step of your dental visit.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Care",
    text: "Thoughtful dental care with clear guidance and attention to detail.",
  },
  {
    icon: UsersRound,
    title: "Trust and Transparency",
    text: "Open communication helps you understand your care and available options.",
  },
  {
    icon: Leaf,
    title: "Continuous Improvement",
    text: "We keep learning and improving the way we care for every smile.",
  },
];

const teamHighlights = [
  {
    icon: Stethoscope,
    title: "Experienced Professionals",
    text: "A dedicated team focused on your dental wellbeing.",
  },
  {
    icon: Award,
    title: "Collaborative Care",
    text: "A coordinated approach to your dental care needs.",
  },
  {
    icon: HandHeart,
    title: "Patient Centric",
    text: "Friendly, supportive and attentive care at every visit.",
  },
];

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".gs-about-reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="gs-about-page">
      {/* HERO */}
      <section className="gs-about-hero">
        <div className="gs-about-hero-copy">
          <span className="gs-about-eyebrow gs-about-eyebrow-light">
            <Sparkles size={14} />
            About Gajanana Smile Care
          </span>
          <h1 style={{color:"white"}}>
            A Trusted Dental Care Destination for
            <span> Healthy, Confident Smiles</span>
          </h1>
          <p>
            Providing comprehensive, patient focused dental care with a
            commitment to quality, comfort and trust.
          </p>
          <Link to="/contact" className="gs-about-primary-button">
            Book an Appointment <ArrowRight size={17} />
          </Link>
        </div>

        <div className="gs-about-hero-visual">
          <img src={clinic} alt="Gajanana Smile Care clinic interior" />
          <div className="gs-about-image-shade" />
          <div className="gs-about-hero-note">
            <span className="gs-about-note-icon"><Heart size={20} /></span>
            <span>
              <strong>Your Smile Matters</strong>
              <small>Care with comfort and trust</small>
            </span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="gs-about-story gs-about-section gs-about-reveal">
        <div className="gs-about-story-image">
          <img src={clinic} alt="Modern dental treatment room" />
          <div className="gs-about-image-caption">
            <span><CheckCircle2 size={17} /></span>
            A welcoming space for your smile
          </div>
        </div>

        <div className="gs-about-story-copy">
          <span className="gs-about-eyebrow">
            <Leaf size={14} /> Our Story
          </span>
          <h2>About Our <span>Clinic</span></h2>
          <p>
            Gajanana Smile Care is a dental clinic focused on delivering
            thoughtful and comprehensive care in a comfortable environment.
          </p>
          <p>
            Our approach brings together preventive care, careful assessment
            and personalised treatment planning to support your long term oral
            health.
          </p>

          <div className="gs-about-facts">
            <div className="gs-about-fact">
              <strong>8+</strong>
              <span>Dental Services</span>
            </div>
            <div className="gs-about-fact">
              <strong>Care</strong>
              <span>Focused Approach</span>
            </div>
            <div className="gs-about-fact">
              <strong>You</strong>
              <span>At The Centre</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="gs-about-values gs-about-section gs-about-reveal">
        <div className="gs-about-section-heading">
          <span className="gs-about-eyebrow">
            <Sparkles size={14} /> Our Values
          </span>
          <h2>What <span>Drives Us</span></h2>
          <p>Our care is guided by values that put your smile and wellbeing first.</p>
        </div>

        <div className="gs-about-value-grid">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="gs-about-value-card" key={item.title}>
                <div className="gs-about-value-icon"><Icon size={27} /></div>
                <div>
                  <span className="gs-about-card-index">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* DENTAL TEAM */}
      <section className="gs-about-team gs-about-reveal">
        <div className="gs-about-team-inner">
          <div className="gs-about-team-copy">
            <span className="gs-about-eyebrow">
              <UsersRound size={14} /> Our Dental Team
            </span>
            <h2>A Skilled and Caring <span>Dental Team</span></h2>
            <p>
              A dedicated team of dental professionals working together to
              provide comprehensive and personalised care for you and your family.
            </p>

            <div className="gs-about-team-highlights">
              {teamHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="gs-about-team-highlight" key={item.title}>
                    <span className="gs-about-team-icon"><Icon size={23} /></span>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.text}</small>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="gs-about-team-art" aria-label="Dental care illustration">
            <div className="gs-about-art-glow" />
            <div className="gs-about-art-circle gs-about-art-circle-one" />
            <div className="gs-about-art-circle gs-about-art-circle-two" />
            <div className="gs-about-tooth">
              <svg viewBox="0 0 180 190" role="img" aria-label="Tooth illustration">
                <path
                  d="M90 18C67 5 29 17 25 55c-4 39 17 53 27 91 6 22 17 28 27 7l11-25 11 25c10 21 21 15 27-7 10-38 31-52 27-91C151 17 113 5 90 18Z"
                  fill="#fffdf7"
                  stroke="#0b5a4d"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path d="M54 51c8-13 21-17 34-13" fill="none" stroke="#d8e9df" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
            <div className="gs-about-art-spark gs-about-art-spark-one">✦</div>
            <div className="gs-about-art-spark gs-about-art-spark-two">✧</div>
            <div className="gs-about-art-label">
              <span><Heart size={17} /></span>
              <strong>Care for Every Smile</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gs-about-cta gs-about-reveal">
        <div className="gs-about-cta-mark">
          <span className="gs-about-cta-tooth"><Stethoscope size={38} /></span>
          <span className="gs-about-cta-spark">✦</span>
        </div>
        <div className="gs-about-cta-copy">
          <span>Your Smile Matters</span>
          <h2 style={{color:"white"}}>Let’s Keep Your Smile <em>Healthy</em></h2>
          <p>
            Book an appointment and experience thoughtful dental care at
            Gajanana Smile Care.
          </p>
        </div>
        <Link to="/contact" className="gs-about-cta-button">
          <CalendarDays size={17} /> Book an Appointment <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}

export default About;
