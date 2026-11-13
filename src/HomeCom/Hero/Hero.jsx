
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import {
  CalendarDays,
  ShieldCheck,
  Monitor,
  HeartHandshake,
  ArrowUpRight,
  ToothbrushIcon,
} from "lucide-react";

import hero from '../../assets/home/hero.png'
import "./Hero.css";

function Hero() {
  const phoneNumber = "919686863278";

  const message = encodeURIComponent(
    "Hello Gajanana Smile Care, I would like to know more about your dental services."
  );

  return (
    <section className="gs-hero">

      {/* Hero Background Image */}
      <div className="gs-hero-photo">
        <img
          src={hero}
          alt="Dentist providing dental care to a patient"
        />
      </div>

      {/* Left Content */}
      <div className="gs-hero-container">

        <div className="gs-hero-content">

          <div className="gs-hero-label">
            <ToothbrushIcon />
            <span>Advanced Dental Care</span>
          </div>

          <h1>
            We are ready to make your
            <span className="gs-hero-highlight">
              smile sparkle!
            </span>
          </h1>

          <p className="gs-hero-description">
            One of The Top-rated Clinic in the Bangalore East region,
            particularly covering Whitefield, Brookfield, Marathahalli,
            Kr Puram, kundalahalli, Mahadevapura.
          </p>

          {/* CTA Buttons */}
          <div className="gs-hero-actions">

            <Link
              to="/appointment"
              className="gs-hero-primary-btn"
            >
              <CalendarDays />
              <span>Book Appointment</span>
              <ArrowUpRight className="gs-hero-arrow" />
            </Link>

            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gs-hero-secondary-btn"
            >
              <FaWhatsapp />
              <span>Chat on WhatsApp</span>
            </a>

          </div>

          {/* Feature Highlights */}
          <div className="gs-hero-highlights">

            <div className="gs-highlight-item">
              <span className="gs-highlight-icon">
                <ShieldCheck />
              </span>
              <span>
                Experienced
                <strong>Dental Team</strong>
              </span>
            </div>

            <span className="gs-highlight-divider" />

            <div className="gs-highlight-item">
              <span className="gs-highlight-icon">
                <Monitor />
              </span>
              <span>
                Latest
                <strong>Technology</strong>
              </span>
            </div>

            <span className="gs-highlight-divider" />

            <div className="gs-highlight-item">
              <span className="gs-highlight-icon">
                <HeartHandshake />
              </span>
              <span>
                Personalised
                <strong>Patient Care</strong>
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="gs-hero-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 35 C280 125 500 130 760 85 C1030 38 1240 100 1440 5 L1440 150 L0 150 Z"
            fill="#0d4037"
          />

          <path
            d="M0 35 C280 125 500 130 760 85 C1030 38 1240 100 1440 5"
            fill="none"
            stroke="#d9b76b"
            strokeWidth="3"
          />

          <path
            d="M0 70 C300 140 550 140 800 105 C1060 65 1250 125 1440 40 L1440 150 L0 150 Z"
            fill="#164e45"
          />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
