
import React, { useEffect, useRef, useState } from "react";
import {
  UsersRound,
  Smile,
  Award,
  CalendarCheck,
} from "lucide-react";
import "./DentalStats.css";

const stats = [
  { value: 50000, suffix: "+", label: "Happy Patients", icon: UsersRound },
  { value: 34256, suffix: "+", label: "Veneers Placed", icon: Smile },
  { value: 16331, suffix: "+", label: "Smiles Straightened", icon: Award },
  { value: 150, suffix: "+", label: "Years of Combined Experience", icon: CalendarCheck },
];

const partnerLogos = [
  {
    src: "https://gajananasmilecare.com/wp-content/uploads/2024/05/logo-1-1.webp",
    alt: "Partner logo one",
  },
  {
    src: "https://gajananasmilecare.com/wp-content/uploads/2024/05/logo-2-1.webp",
    alt: "Partner logo two",
  },
  {
    src: "https://gajananasmilecare.com/wp-content/uploads/2024/05/logo-3-1.webp",
    alt: "Partner logo three",
  },
  {
    src: "https://gajananasmilecare.com/wp-content/uploads/2024/05/logo-4-1.webp",
    alt: "Partner logo four",
  },
  {
    src: "https://gajananasmilecare.com/wp-content/uploads/2024/05/logo-5.webp",
    alt: "Partner logo five",
  },
  {
    src: "https://gajananasmilecare.com/wp-content/uploads/2024/05/logo-6-1.webp",
    alt: "Partner logo six",
  },
];

function useCountUp(target, active, duration = 1900) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    let frameId;
    let startTime;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, active, duration]);

  return count;
}

function StatItem({ item, active, index }) {
  const count = useCountUp(item.value, active);
  const Icon = item.icon;

  return (
    <article
      className="gsc-stat-item"
      style={{ "--stat-delay": `${index * 130}ms` }}
    >
      <span className="gsc-stat-icon">
        <Icon size={29} strokeWidth={1.8} />
      </span>

      <div
        className="gsc-stat-number"
        aria-label={`${item.value.toLocaleString("en-IN")}${item.suffix}`}
      >
        {count.toLocaleString("en-IN")}
        <span>{item.suffix}</span>
      </div>

      <h3>{item.label}</h3>
      <span className="gsc-stat-accent" />
    </article>
  );
}

export default function DentalStats() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gsc-stats-section" ref={sectionRef}>

      {/* Section Heading */}
      <div className="gsc-stats-heading">
        <span className="gsc-stats-kicker">
          <Award size={17} />
          PATIENT ACHIEVEMENTS
        </span>

        <h2>
          A Track Record of <span>Healthier Smiles</span>
        </h2>

        <span className="gsc-heading-underline" />

        <p>
          The trust of our patients and years of dedicated care reflect
          our commitment to thoughtful dental treatment.
        </p>
      </div>

      {/* Animated Statistics */}
      <div className={`gsc-stats-panel${active ? " is-visible" : ""}`}>
        {stats.map((item, index) => (
          <StatItem
            key={item.label}
            item={item}
            active={active}
            index={index}
          />
        ))}
      </div>

      {/* Partner Logos */}
      <div className="gsc-partner-strip">
        <div className="gsc-partner-container">
          {partnerLogos.map((logo, index) => (
            <React.Fragment key={logo.src}>
              <div className={`gsc-partner-item gsc-partner-item-${index + 1}`}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                />
              </div>

              {index !== partnerLogos.length - 1 && (
                <span className="gsc-partner-divider" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
}
