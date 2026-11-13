
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Toothbrush,
  Sparkles,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import veneers from "../../assets/home/smile/veneers.jpg";
import whitening from "../../assets/home/smile/whitening.jpg";
import aligners from "../../assets/home/smile/aligners.jpg";
import smile from "../../assets/home/smile/smile-designing.jpg";
import before from '../../assets/home/before.png'
import after from '../../assets/home/after.png'
import "./SmileMakeover.css";

const highlights = [
  {
    icon: Toothbrush,
    title: "Veneers and Smile Designing",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
  },
  {
    icon: Toothbrush,
    title: "Orthodontic Treatments",
  },
  {
    icon: ShieldCheck,
    title: "Personalised Dental Care",
  },
];

const treatments = [
  {
    title: "Composite Veneers",
    image: veneers,
  },
  {
    title: "Teeth Whitening",
    image: whitening,
  },
  {
    title: "Orthodontic Treatments",
    image: aligners,
  },
  {
    title: "Smile Designing",
    image: smile,
  },
];

function SmileMakeover() {
  const [comparisonPosition, setComparisonPosition] = useState(50);

  return (
    <section className="gs-smile-section">

      <div className="gs-smile-container">

        {/* SECTION HEADING */}

        <div className="gs-smile-heading">

          <div className="gs-smile-label">
            <Toothbrush size={23} />
            <span>COSMETIC DENTISTRY</span>
          </div>

          <h2>
            Cosmetic Smile <span>Makeover</span>
          </h2>

          <div className="gs-smile-heading-line">
            <svg
              viewBox="0 0 320 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M3 19 C85 2 210 0 315 14"
                fill="none"
                stroke="#C9A34D"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p>
            Start your journey to a better smile
          </p>

        </div>

        {/* BEFORE AFTER AND HIGHLIGHTS */}

        <div className="gs-smile-main">

          {/* INTERACTIVE BEFORE AFTER SLIDER */}

          <div className="gs-smile-comparison">

            <div
              className="gs-smile-comparison-image"
              style={{
                "--comparison-position": `${comparisonPosition}%`,
              }}
            >

              {/* BEFORE IMAGE */}

              <img
                src={before}
                alt="Before smile makeover"
                className="gs-smile-before-image"
                draggable="false"
              />

              {/* AFTER IMAGE */}

              <img
                src={after}
                alt="After smile makeover"
                className="gs-smile-after-image"
                draggable="false"
              />

              {/* IMAGE LABELS */}

              <span className="gs-smile-before-label">
                Before
              </span>

              <span className="gs-smile-after-label">
                After
              </span>

              {/* SLIDER DIVIDER */}

              <div className="gs-smile-comparison-divider">
                <span>↔</span>
              </div>

              {/* SLIDER CONTROL */}

              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={comparisonPosition}
                onChange={(event) =>
                  setComparisonPosition(Number(event.target.value))
                }
                className="gs-smile-comparison-range"
                aria-label="Compare before and after smile"
              />

            </div>

            <p className="gs-smile-comparison-hint">
              Drag to compare the smile transformation
            </p>

          </div>

          {/* HIGHLIGHTS */}

          <div className="gs-smile-highlights">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="gs-smile-highlight"
                  key={item.title}
                  style={{ "--smile-index": index }}
                >

                  <div className="gs-smile-highlight-icon">
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  <p>{item.title}</p>

                </div>
              );
            })}

          </div>

        </div>

        {/* TREATMENT CARDS */}

        <div className="gs-smile-treatments">

          {treatments.map((item, index) => (
            <Link
              to="/services"
              className="gs-smile-treatment-card"
              key={item.title}
              style={{ "--smile-index": index }}
            >

              <div className="gs-smile-treatment-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>

              <div className="gs-smile-treatment-title">
                <span>{item.title}</span>
                <ArrowRight size={18} />
              </div>

            </Link>
          ))}

        </div>

        {/* CONSULTATION BUTTON */}

        <div className="gs-smile-footer">

          <Link
            to="/appointment"
            className="gs-smile-button"
          >
            <span>Book a Smile Consultation</span>
            <ArrowRight size={22} />
          </Link>

        </div>

      </div>

      {/* BOTTOM WAVE */}

      <div className="gs-smile-wave">

        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >

          <path
            d="M0 45 C260 105 530 120 800 85 C1080 45 1260 5 1440 30 L1440 120 L0 120 Z"
            fill="#246B5B"
          />

          <path
            d="M0 45 C260 105 530 120 800 85 C1080 45 1260 5 1440 30"
            fill="none"
            stroke="#C9A34D"
            strokeWidth="3"
          />

          <path
            d="M0 72 C300 120 560 130 840 100 C1110 65 1290 35 1440 52 L1440 120 L0 120 Z"
            fill="#164E45"
          />

        </svg>

      </div>

    </section>
  );
}

export default SmileMakeover;
