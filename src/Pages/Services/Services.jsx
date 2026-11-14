
import React from "react";
import { Link } from "react-router-dom";

import {
  Heart,
  ShieldCheck,
  Smile,
  Star,
  ArrowRight,
  CalendarDays,
  Sparkles,
  Stethoscope,
  Syringe,
  AlignCenter,
  Crown,
  Brush,
  Baby,
  Scan,
} from "lucide-react";

import "./Services.css";

import clinic from "../../assets/about/clinic.png";
import patient from "../../assets/about/dentist.png";

import general from "../../assets/services/general-dentistry.jpg";
import dental from "../../assets/services/dental-implants.jpg";
import orthodontics from "../../assets/services/orthodontics.jpg";
import crowns from "../../assets/services/crowns-bridges.jpg";
import root from "../../assets/services/root-canal.jpg";
import teeth from "../../assets/services/teeth-cleaning.jpg";
import whitening from "../../assets/services/teeth-whitening.jpg";
import pediatric from "../../assets/services/pediatric-dentistry.jpg";

/* =========================================
   TRUST FEATURES
========================================= */

const trustFeatures = [
  {
    icon: Smile,
    title: "Experienced Care",
    description: "Attentive and personalised dental care",
  },
  {
    icon: ShieldCheck,
    title: "Modern Technology",
    description: "A thoughtful approach to treatment",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description: "A welcoming and friendly environment",
  },
  {
    icon: Star,
    title: "Personalised Treatment",
    description: "Care planned around individual needs",
  },
];

/* =========================================
   DENTAL SERVICES
========================================= */

const services = [
  {
    id: 1,
    title: "General Dentistry",
    description:
      "Routine check ups, cleaning and preventive care for a healthy smile.",
    image: general,
    icon: Smile,
    link: "/services/general-dentistry",
  },
  {
    id: 2,
    title: "Dental Implants",
    description:
      "A long lasting treatment option for replacing missing teeth.",
    image: dental,
    icon: Syringe,
    link: "/services/dental-implants",
  },
  {
    id: 3,
    title: "Orthodontic Care",
    description:
      "Teeth alignment solutions including braces and clear aligners.",
    image: orthodontics,
    icon: AlignCenter,
    link: "/services/orthodontic-care",
  },
  {
    id: 4,
    title: "Crowns and Bridges",
    description:
      "Restore the strength, function and appearance of your teeth.",
    image: crowns,
    icon: Crown,
    link: "/services/crowns-bridges",
  },
  {
    id: 5,
    title: "Root Canal Treatment",
    description:
      "Treatment to address infection inside a tooth and help preserve it.",
    image: root,
    icon: Scan,
    link: "/services/root-canal",
  },
  {
    id: 6,
    title: "Teeth Cleaning and Polishing",
    description:
      "Professional cleaning to remove plaque and surface stains.",
    image: teeth,
    icon: Brush,
    link: "/services/teeth-cleaning",
  },
  {
    id: 7,
    title: "Teeth Whitening",
    description:
      "Professional whitening options for a brighter looking smile.",
    image: whitening,
    icon: Sparkles,
    link: "/services/teeth-whitening",
  },
  {
    id: 8,
    title: "Pediatric Dentistry",
    description:
      "Gentle dental care focused on children's oral health needs.",
    image: pediatric,
    icon: Baby,
    link: "/services/pediatric-dentistry",
  },
];

/* =========================================
   SERVICES PAGE
========================================= */

function Services() {
  return (
    <main className="gs-services-page">

      {/* HERO */}

      <section className="gs-services-hero">

        <div className="gs-services-hero-content">

          <span className="gs-services-hero-tag">
            <Smile size={15} />
            Our Dental Services
          </span>

          <h1>
            Complete Dental Care
            <br />
            for a Healthier,
            <br />
            More <span>Confident Smile</span>
          </h1>

          <p>
            A range of dental services to help keep your smile
            healthy, functional and beautiful.
          </p>

          <Link
            to="/contact"
            className="gs-services-outline-button"
          >
            Book an Appointment
            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="gs-services-hero-image">
          <img
            src={clinic}
            alt="Modern dental treatment room"
          />
        </div>

      </section>

      {/* TRUST FEATURES */}

      <section className="gs-services-trust">

        <div className="gs-services-trust-inner">

          {trustFeatures.map(({ icon: Icon, title, description }) => (
            <div
              className="gs-services-trust-item"
              key={title}
            >

              <div className="gs-services-trust-icon">
                <Icon size={25} />
              </div>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* SERVICES GRID */}

      <section className="gs-services-list gs-services-container">

        <div className="gs-services-heading">

          <span className="gs-services-section-tag">
            <Stethoscope size={15} />
            Our Services
          </span>

          <h2>
            Dental Services <span>We Offer</span>
          </h2>

          <p>
            Comprehensive dental care for you and your family,
            all under one roof.
          </p>

        </div>

        <div className="gs-services-grid">

          {services.map(
            ({ id, title, description, image, icon: Icon, link }) => (

              <article
                className="gs-service-card"
                key={id}
              >

                <Link
                  to={link}
                  className="gs-service-card-image-link"
                  aria-label={`Explore ${title}`}
                >
                  <div className="gs-service-image">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                    />
                  </div>
                </Link>

                <div className="gs-service-icon">
                  <Icon size={25} />
                </div>

                <div className="gs-service-content">

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <Link
                    to={link}
                    className="gs-service-link"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>

            )
          )}

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="gs-services-cta">

        <div className="gs-services-cta-image">
          <img
            src={patient}
            alt="Patient having a dental consultation"
            loading="lazy"
          />
        </div>

        <div className="gs-services-cta-content">

          <span className="gs-services-cta-tag">
            <Smile size={14} />
            Take the Next Step
          </span>

          <h2>
            Ready to Care for Your Smile?
          </h2>

          <p>
            Book an appointment and explore personalised
            dental care at Gajanana Smile Care.
          </p>

        </div>

        <Link
          to="/contact"
          className="gs-services-cta-button"
        >
          <CalendarDays size={17} />
          Book an Appointment
          <ArrowRight size={16} />
        </Link>

      </section>

    </main>
  );
}

export default Services;
