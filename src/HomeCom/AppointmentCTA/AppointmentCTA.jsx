
import { Link } from "react-router-dom";
import {
  Toothbrush,
  CalendarDays,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
} from "lucide-react";
import cta from '../../assets/home/cta.png'
import "./AppointmentCTA.css";

function AppointmentCTA() {
  const phoneNumber = "919686863278";

  const message = encodeURIComponent(
    "Hello Gajanana Smile Care, I would like to book a dental appointment."
  );

  return (
    <section className="gs-appointment-cta">

      <div className="gs-appointment-container">

        {/* LEFT CONTENT */}

        <div className="gs-appointment-content">

          <div className="gs-appointment-label">
            <Toothbrush size={29} />
            <span>YOUR SMILE MATTERS</span>
          </div>

          <h2>
            Ready for a
            <span>Healthier Smile?</span>
          </h2>

          <div className="gs-appointment-heading-line">
            <svg viewBox="0 0 420 24" preserveAspectRatio="none">
              <path
                d="M3 17 C110 0 290 0 415 15"
                fill="none"
                stroke="#D9B76B"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="gs-appointment-description">
            Your journey towards a confident smile starts here.
            Connect with Gajanana Smile Care and take the next
            step towards your dental care.
          </p>

          {/* ACTION BUTTONS */}

          <div className="gs-appointment-actions">

            <Link
              to="/appointment"
              className="gs-appointment-primary"
            >
              <CalendarDays size={27} />
              <span>Book Appointment</span>
              <ArrowRight size={25} />
            </Link>

            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gs-appointment-secondary"
            >
              <MessageCircle size={27} />
              <span>Chat on WhatsApp</span>
            </a>

          </div>

          {/* CARE MESSAGE */}

          <div className="gs-appointment-trust">

            <HeartHandshake size={45} />

            <span>
              We are here to care for your smile
            </span>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="gs-appointment-visual">

          <div className="gs-appointment-image-frame">

            <img
              src={cta}
              alt="Modern dental treatment room at Gajanana Smile Care"
              loading="lazy"
            />

          </div>

          <div className="gs-appointment-image-border" />

        </div>

      </div>

      {/* BOTTOM WAVES */}

      <div className="gs-appointment-wave">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 40 C240 5 420 75 650 90 C900 110 1100 30 1440 45 L1440 150 L0 150 Z"
            fill="#F8F7F2"
          />

          <path
            d="M0 40 C240 5 420 75 650 90 C900 110 1100 30 1440 45"
            fill="none"
            stroke="#D9B76B"
            strokeWidth="5"
          />

          <path
            d="M0 65 C250 30 440 95 680 110 C930 130 1150 55 1440 65 L1440 150 L0 150 Z"
            fill="#246B5B"
          />

          <path
            d="M0 92 C280 55 460 120 700 130 C950 145 1180 80 1440 88 L1440 150 L0 150 Z"
            fill="#164E45"
          />
        </svg>
      </div>

    </section>
  );
}

export default AppointmentCTA;
