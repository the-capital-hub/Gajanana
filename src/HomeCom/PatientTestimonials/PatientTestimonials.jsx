
import { useState } from "react";
import {
  Toothbrush,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  UsersRound,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import "./PatientTestimonials.css";

const testimonials = [
  {
    name: "Shasheesh Tiwari",
    image: "/images/testimonials/shasheesh.jpg",
    treatment: "Patient Experience",
    rating: 5,
    review:
      "I go for regular hygienist appointments at Dental Clinic and my teeth are much healthier now! I would definitely recommend.",
  },
  {
    name: "Karen Gomes",
    image: "/images/testimonials/karen.jpg",
    treatment: "Patient Experience",
    rating: 5,
    review:
      "Dr. Raghavendra is very good. He is polite, does a good job and explains the pros and cons well. My family and I have had a great experience with this clinic. Keep up the good work. Thank you.",
  },
  {
    name: "Ella R. Sudheendra Panganamala",
    image: "/images/testimonials/ella.jpg",
    treatment: "Patient Experience",
    rating: 5,
    review:
      "Had a fantastic experience at Gajanana Smile care. The staff was friendly, professional, and made me feel at ease throughout my visit. The clinic was clean and well-maintained, with modern equipment that ensured a smooth and pain-free procedure. Dr. Raghavendra took time to explain every step and answered all my questions patiently. I highly recommend this clinic for anyone looking for quality dental care.",
  },
  {
    name: "Mia G. Sasmita Sahoo",
    image: "/images/testimonials/mia.jpg",
    treatment: "Patient Experience",
    rating: 5,
    review:
      "Me and my whole family always choose to go to Dr. Raghavendra for any kind of dental issues from the last three to four years and trust me he is very professional and always does what is needed and what is best for our teeth. Recently I visited the clinic to get my root canal cap re-done, general checkup and everything was hassle free and the process completed within a week... I highly recommend the clinic for good and genuine service. Unlike other dentists I visited earlier, he never tries to sell anything which is not needed.",
  },
];

function PatientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = 3;

  const nextSlide = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const visibleTestimonials = Array.from(
    { length: visibleCount },
    (_, index) =>
      testimonials[(activeIndex + index) % testimonials.length]
  );

  return (
    <section className="gs-testimonials-section">

      <div className="gs-testimonials-overlay" />

      <div className="gs-testimonials-container">

        <div className="gs-testimonials-heading">

          <div className="gs-testimonials-label">
            <Toothbrush size={23} />
            <span>PATIENT TESTIMONIALS</span>
          </div>

          <h2>
            What Our <span>Patients</span> Say
          </h2>

          <div className="gs-testimonials-heading-line">
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
            Patient experiences shared with Gajanana Smile Care.
          </p>

        </div>

        <div className="gs-testimonials-carousel">

          <button
            type="button"
            className="gs-testimonial-arrow gs-testimonial-prev"
            onClick={previousSlide}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={25} />
          </button>

          <div className="gs-testimonials-grid">

            {visibleTestimonials.map((item, index) => (
              <article
                className="gs-testimonial-card"
                key={`${item.name}-${activeIndex}-${index}`}
              >

                <div className="gs-testimonial-image-wrap">

                  <img
                    src={item.image}
                    alt={`Portrait of ${item.name}`}
                    className="gs-testimonial-image"
                    loading="lazy"
                  />

                  <div className="gs-testimonial-image-accent" />

                  <div className="gs-testimonial-quote-icon">
                    <Quote size={27} />
                  </div>

                </div>

                <div className="gs-testimonial-content">

                  {item.rating && (
                    <div
                      className="gs-testimonial-stars"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from(
                        { length: item.rating },
                        (_, i) => (
                          <Star
                            key={i}
                            size={20}
                            fill="currentColor"
                          />
                        )
                      )}
                    </div>
                  )}

                  <p className="gs-testimonial-review">
                    {item.review}
                  </p>

                  <div className="gs-testimonial-divider" />

                  <div className="gs-testimonial-author">

                    <div className="gs-testimonial-avatar">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div className="gs-testimonial-author-info">
                      <h3>{item.name}</h3>
                      <span>{item.treatment}</span>
                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>

          <button
            type="button"
            className="gs-testimonial-arrow gs-testimonial-next"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <ChevronRight size={25} />
          </button>

        </div>

        <div className="gs-testimonials-dots">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`gs-testimonial-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>

      </div>

      <div className="gs-testimonials-stats">

        <div className="gs-testimonials-stats-inner">

          <div className="gs-testimonial-stat">
            <UsersRound size={39} />
            <div>
              <strong>Patient Focused</strong>
              <span>Care and attention</span>
            </div>
          </div>

          <div className="gs-testimonial-stat">
            <HeartHandshake size={39} />
            <div>
              <strong>Compassionate</strong>
              <span>Personalised experience</span>
            </div>
          </div>

          <div className="gs-testimonial-stat">
            <ShieldCheck size={39} />
            <div>
              <strong>Trusted Care</strong>
              <span>Dedicated dental team</span>
            </div>
          </div>

          <div className="gs-testimonial-stat">
            <Toothbrush size={39} />
            <div>
              <strong>Dental Solutions</strong>
              <span>Care for every smile</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PatientTestimonials;
