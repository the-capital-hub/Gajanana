
import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  Award,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  CalendarDays,
  Smile,
  Gem,
  Stethoscope,
  Users,
} from "lucide-react";

import "./About.css";

import clinic from "../../assets/about/clinic.png";
import dentist from "../../assets/about/dentist.png";
import reception from "../../assets/about/reception.png";
import team from "../../assets/about/team.png";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We care for you",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "You can rely on us",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Thoughtful dental care",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "A modern approach to care",
  },
];

const highlights = [
  { icon: Gem, title: "Thoughtful Care" },
  { icon: Heart, title: "Patient First Approach" },
  { icon: ShieldCheck, title: "Comfort and Trust" },
  { icon: Smile, title: "Healthy Smiles" },
];

const clinicFeatures = [
  "Modern dental equipment",
  "Comfortable treatment experience",
  "Clean and safe environment",
  "Personalised dental care",
];

function About() {
  return (
    <main className="gs-about-page">

      {/* HERO */}

      <section className="gs-about-hero">
        <div className="gs-about-hero-inner">

          <div className="gs-about-hero-content">
            <span className="gs-about-hero-tag">
              <Smile size={15} />
              About Gajanana Smile Care
            </span>

            <h1>
              Gajanana Smile Care
              <br />
              Your Trusted
              <br />
              <span>Dental Partner</span>
            </h1>

            <p>
              We are committed to delivering thoughtful dental
              care with compassion, attention and a personal touch.
            </p>

            <Link to="/services" className="gs-about-outline-button">
              Explore Our Services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="gs-about-hero-image">
            <img src={reception} alt="Gajanana Smile Care reception" />
          </div>

        </div>
      </section>

      {/* OUR STORY */}

      <section className="gs-about-story gs-about-container">

        <div className="gs-about-story-photo">
          <img
            src={dentist}
            alt="Dentist discussing dental care with a patient"
          />
        </div>

        <div className="gs-about-story-description">

          <span className="gs-about-label">
            <Sparkles size={14} />
            Our Story
          </span>

          <h2>
            A Journey Towards
            <br />
            <span>Healthier and Happier Smiles</span>
          </h2>

          <p>
            At Gajanana Smile Care, we believe that every smile
            deserves attention and care. Our approach is centred
            around understanding each patient's needs and making
            dental visits a comfortable experience.
          </p>

          <p>
            We aim to create a welcoming environment where patients
            feel informed, supported and confident throughout
            their dental care journey.
          </p>

          <Link to="/contact" className="gs-about-primary-button">
            Know More
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="gs-about-story-highlights">
          {highlights.map(({ icon: Icon, title }) => (
            <div className="gs-about-highlight" key={title}>
              <div className="gs-about-highlight-icon">
                <Icon />
              </div>
              <strong>{title}</strong>
            </div>
          ))}
        </div>

      </section>

      {/* MISSION AND VALUES */}

      <section className="gs-about-mission">
        <div className="gs-about-container gs-about-mission-inner">

          <div className="gs-about-mission-content">
            <span className="gs-about-label">
              <Heart size={15} />
              Our Mission
            </span>

            <h2>
              Creating
              <br />
              <span>Confident Smiles</span>
            </h2>

            <p>
              Our mission is to provide thoughtful dental care
              with a personalised approach, patient comfort and
              attention to individual needs.
            </p>
          </div>

          <div className="gs-about-values-content">

            <span className="gs-about-label">
              <Smile size={15} />
              Our Values
            </span>

            <div className="gs-about-values-grid">
              {values.map(({ icon: Icon, title, description }) => (
                <article className="gs-about-value-card" key={title}>
                  <div className="gs-about-value-icon">
                    <Icon />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* OUR CLINIC */}

      <section className="gs-about-clinic gs-about-container">

        <div className="gs-about-clinic-photo">
          <img src={clinic} alt="Modern Gajanana Smile Care clinic" />
        </div>

        <div className="gs-about-clinic-content">

          <span className="gs-about-label">
            <Stethoscope size={15} />
            Our Clinic
          </span>

          <h2>
            Modern Care in a
            <br />
            <span>Comfortable Space</span>
          </h2>

          <p>
            We want every visit to feel welcoming and reassuring.
            Our focus is on providing a clean and comfortable
            environment with attentive dental care.
          </p>

          <div className="gs-about-feature-grid">
            {clinicFeatures.map((feature) => (
              <div className="gs-about-feature" key={feature}>
                <CheckCircle2 size={17} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link to="/contact" className="gs-about-primary-button">
            Explore Our Clinic
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

      {/* OUR TEAM */}

      <section className="gs-about-team gs-about-container">

        <div className="gs-about-team-content">

          <span className="gs-about-label">
            <Users size={15} />
            Our Team
          </span>

          <h2>
            Care That Begins
            <br />
            <span>With People</span>
          </h2>

          <p>
            Every patient deserves to be heard and cared for.
            Our focus is on creating a supportive experience
            through attentive communication and personalised care.
          </p>

          <Link to="/our-team" className="gs-about-primary-button">
            Meet Our Team
            <ArrowRight size={16} />
          </Link>

        </div>

        <div className="gs-about-team-photo">
          <img src={team} alt="Gajanana Smile Care dental team" />
        </div>

      </section>

      {/* FINAL CTA */}

      <section className="gs-about-cta">

        <div className="gs-about-cta-photo">
          <img
            src={dentist}
            alt="A patient during a dental consultation"
          />
        </div>

        <div className="gs-about-cta-content">

          <span className="gs-about-cta-tag">
            <Smile size={14} />
            Your Smile Matters
          </span>

          <h2>
            Ready for a Healthier,
            <br />
            Happier Smile?
          </h2>

          <p>
            Take the first step towards thoughtful dental care
            at Gajanana Smile Care.
          </p>

        </div>

        <Link to="/contact" className="gs-about-cta-button">
          <CalendarDays size={17} />
          Book an Appointment
          <ArrowRight size={16} />
        </Link>

      </section>

    </main>
  );
}

export default About;
