
import { Link } from "react-router-dom";
import {
  Toothbrush,
  UsersRound,
  ShieldCheck,
  CalendarDays,
  ArrowRight,
  Award,
} from "lucide-react";

import aboutImage from "../../assets/home/about.png";
import "./AboutSection.css";

const features = [
  {
    icon: UsersRound,
    title: "Experienced",
    subtitle: "Dentists",
  },
  {
    icon: Toothbrush,
    title: "Quality",
    subtitle: "Dental Care",
  },
  {
    icon: ShieldCheck,
    title: "Patient",
    subtitle: "Focused Care",
  },
];

function AboutSection() {
  return (
    <section className="gs-about-section">
      <div className="gs-about-container">

        {/* LEFT IMAGE AREA */}

        <div className="gs-about-visual">
          <div className="gs-about-circle" />

          <div className="gs-about-image-wrap">
            <img
              src={aboutImage}
              alt="Gajanana Smile Care dental clinic interior"
              className="gs-about-image"
            />

            <div className="gs-about-image-shade" />

            <div className="gs-about-image-info">

              <div className="gs-about-info-card">
                <CalendarDays size={24} />
                <span>Established in 2010</span>
              </div>

              <div className="gs-about-info-card gs-about-years">
                <Award size={27} />
                <span>
                  <strong>Over 14 Years</strong>
                  <small>of Dental Care</small>
                </span>
              </div>

            </div>
          </div>

          <div className="gs-about-gold-circle" />
        </div>

        {/* RIGHT CONTENT AREA */}

        <div className="gs-about-content">

          <div className="gs-about-label">
            <Toothbrush size={25} strokeWidth={2} />
            <span>WELCOME TO DENTALIST</span>
          </div>

          <h2 className="gs-about-heading">
            Welcome to
            <span>Gajanan Smile Care</span>
          </h2>

          <div className="gs-about-gold-line">
            <svg viewBox="0 0 320 24" preserveAspectRatio="none">
              <path
                d="M3 19 C85 2 210 0 315 14"
                fill="none"
                stroke="#C9A34D"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="gs-about-description">
            Established in 2010 and based in the heart of
            Kundalahalli, Whitefield, we have spent over 14 years
            providing high quality dental care. Our dedicated
            and experienced dentists provide decades worth of
            expertise to ensure you get the smile of your dreams.
          </p>

          {/* FEATURE CARDS */}

          <div className="gs-about-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  className="gs-about-feature"
                  key={feature.title}
                  style={{ "--feature-delay": `${index * 0.15}s` }}
                >
                  <div className="gs-about-feature-icon">
                    <Icon size={43} strokeWidth={1.7} />
                  </div>

                  <h3>
                    {feature.title}
                    <span>{feature.subtitle}</span>
                  </h3>
                </div>
              );
            })}
          </div>

          {/* ABOUT BUTTON */}

          <Link to="/about" className="gs-about-button">
            <span>About Us</span>
            <ArrowRight size={23} />
          </Link>

        </div>
      </div>

      {/* BOTTOM DECORATIVE WAVE */}

      <div className="gs-about-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 50 C250 125 510 150 760 105 C1040 55 1260 0 1440 35 L1440 150 L0 150 Z"
            fill="#246B5B"
          />

          <path
            d="M0 50 C250 125 510 150 760 105 C1040 55 1260 0 1440 35"
            fill="none"
            stroke="#C9A34D"
            strokeWidth="3"
          />

          <path
            d="M0 85 C270 145 530 160 810 125 C1080 85 1270 40 1440 65 L1440 150 L0 150 Z"
            fill="#164E45"
          />
        </svg>
      </div>

    </section>
  );
}

export default AboutSection;
