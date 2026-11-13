
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Toothbrush,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Activity,
  ScanLine,
  Smile,
  Stethoscope,
  Layers,
} from "lucide-react";

import composite from '../../assets/home/treat/composite-veneers.jpg'
import tooth from '../../assets/home/treat/tooth-splinting.jpg'
import sealants from '../../assets/home/treat/sealants.jpg'
import trauma from '../../assets/home/treat/trauma-care.jpg'
import dentures from '../../assets/home/treat/dentures.jpg'
import fluoride from '../../assets/home/treat/fluoride-varnish.jpg'
import full from '../../assets/home/treat/full-mouth.jpg'
import smile from '../../assets/home/treat/smile-designing.jpg'
import laser from '../../assets/home/treat/laser-dentistry.jpg'

import "./DentistryTreatments.css";

const treatments = [
  {
    title: "Trauma Care in Dentistry",
    icon: HeartPulse,
    image: trauma,
  },
  {
    title: "Composite Veneers",
    icon: Toothbrush,
    image: composite,
  },
  {
    title: "Tooth Splinting",
    icon: ShieldCheck,
    image: tooth,
  },
  {
    title: "Pit and Fissure Sealants",
    icon: Sparkles,
    image: sealants
  },
  {
    title: "Dentures",
    icon: Layers,
    image: dentures
  },
  {
    title: "Fluoride Varnish",
    icon: ShieldCheck,
    image: fluoride
  },
  {
    title: "Full Mouth Rehabilitation",
    icon: ScanLine,
    image: full,
  },
  {
    title: "Smile Designing",
    icon: Smile,
    image: smile,
  },
  {
    title: "Laser Dentistry",
    icon: Activity,
    image: laser,
  },
];

function DentistryTreatments() {
  return (
    <section className="gs-treatments-section">

      <div className="gs-treatments-container">

        {/* SECTION HEADING */}

        <div className="gs-treatments-heading">

          <div className="gs-treatments-label">
            <Toothbrush size={23} />
            <span>OUR DENTAL SERVICES</span>
          </div>

          <h2>
            Dentistry <span>Treatments</span>
          </h2>

          <div className="gs-treatments-heading-line">
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

          <p>
            Explore our range of dental treatments
            and discover the care options available
            at Gajanana Smile Care.
          </p>

        </div>

        {/* TREATMENT GRID */}

        <div className="gs-treatments-grid">

          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                to="/services"
                className="gs-treatment-card"
                key={item.title}
                style={{
                  "--card-index": index,
                }}
              >

                <div className="gs-treatment-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>

                <div className="gs-treatment-content">

                  <div className="gs-treatment-title-row">

                    <div className="gs-treatment-icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3>{item.title}</h3>

                  </div>

                  <div className="gs-treatment-arrow">
                    <ArrowRight size={21} />
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

        {/* VIEW ALL BUTTON */}

        <div className="gs-treatments-footer">
          <Link
            to="/services"
            className="gs-treatments-button"
          >
            <span>View All Treatments</span>
            <ArrowRight size={23} />
          </Link>
        </div>

      </div>

      {/* BOTTOM WAVE */}

      <div className="gs-treatments-wave">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 35 C280 95 520 110 790 75 C1080 40 1270 0 1440 25 L1440 120 L0 120 Z"
            fill="#246B5B"
          />

          <path
            d="M0 35 C280 95 520 110 790 75 C1080 40 1270 0 1440 25"
            fill="none"
            stroke="#C9A34D"
            strokeWidth="3"
          />

          <path
            d="M0 65 C300 115 550 120 830 90 C1100 55 1280 25 1440 48 L1440 120 L0 120 Z"
            fill="#164E45"
          />
        </svg>
      </div>

    </section>
  );
}

export default DentistryTreatments;
