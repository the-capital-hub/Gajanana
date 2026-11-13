
import { Link } from "react-router-dom";
import {
  Toothbrush,
  ArrowRight,
  Stethoscope,
} from "lucide-react";

import "./MeetDoctors.css";
import parixeet from '../../assets/docotor/parixeet.png'
import kiran from '../../assets/docotor/kiran.png'
import raghavendra from '../../assets/docotor/raghavendra.png'
import vinod from '../../assets/docotor/vinod.png'
import lakshmi from '../../assets/docotor/lakshmi.png'
import deepak from '../../assets/docotor/deepak.png'
const doctors = [
  {
    name: "Parixeet Patel",
    specialty: "pedodontist",
    image: parixeet,
  },
  {
    name: "Kiran sunny",
    specialty: "Prosthodontist",
    image: kiran,
  },
  {
    name: "Dr Raghavendra N",
    specialty: "Oral and maxilla facial pathologis",
    image: raghavendra,
  },
  {
    name: "Dr Vinod kumar Yadav",
    specialty: "orthodontis",
    image: vinod,
  },
  {
    name: "Dr.G Lakshmi Sri Divy",
    specialty: "Periodontist and implantologist",
    image: lakshmi,
  },
  {
    name: "Dr Dhanush CV",
    specialty: "Oral and maxillofacial surgeon and Implantologist",
    image: "/images/doctors/dhanush-cv.jpg",
  },
  {
    name: "Dr Deepak P",
    specialty: "oral medicine and radiologist",
    image: deepak,
  },
];

function MeetDoctors() {
  return (
    <section className="gs-doctors-section">

      <div className="gs-doctors-container">

        {/* SECTION HEADING */}

        <div className="gs-doctors-heading">

          <div className="gs-doctors-label">
            <Toothbrush size={23} />
            <span>OUR EXPERT TEAM</span>
          </div>

          <h2>
            Meet Our <span>Doctors</span>
          </h2>

          <div className="gs-doctors-heading-line">
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
            Meet the dental professionals listed by Gajanana
            Smile Care and explore their areas of speciality.
          </p>

        </div>

        {/* DOCTORS GRID */}

        <div className="gs-doctors-grid">

          {doctors.map((doctor, index) => (
            <article
              className="gs-doctor-card"
              key={doctor.name}
              style={{ "--doctor-index": index }}
            >

              {/* DOCTOR IMAGE */}

              <div className="gs-doctor-image-wrap">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="gs-doctor-image"
                  loading="lazy"
                />

                <div className="gs-doctor-image-accent" />

              </div>

              {/* DOCTOR DETAILS */}

              <div className="gs-doctor-details">

                <h3>{doctor.name}</h3>

                <div className="gs-doctor-divider" />

                <div className="gs-doctor-specialty">

                  <div className="gs-doctor-specialty-icon">
                    <Stethoscope size={27} strokeWidth={1.7} />
                  </div>

                  <p>{doctor.specialty}</p>

                </div>

                <Link
                  to="/doctors"
                  className="gs-doctor-button"
                >
                  <span>View Profile</span>
                  <ArrowRight size={19} />
                </Link>

              </div>

            </article>
          ))}

        </div>

        {/* VIEW ALL DOCTORS */}

        <div className="gs-doctors-footer">
          <Link
            to="/doctors"
            className="gs-doctors-view-all"
          >
            View All Doctors
            <ArrowRight size={21} />
          </Link>
        </div>

      </div>

      {/* BOTTOM WAVE */}

      <div className="gs-doctors-wave">
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

export default MeetDoctors;
