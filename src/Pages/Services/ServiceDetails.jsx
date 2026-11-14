
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Heart,
  CalendarDays,
  Sparkles,
  Stethoscope,
  Smile,
  HelpCircle,
} from "lucide-react";

import "./ServiceDetails.css";

import general from "../../assets/services/general-dentistry.jpg";
import dental from "../../assets/services/dental-implants.jpg";
import orthodontics from "../../assets/services/orthodontics.jpg";
import crowns from "../../assets/services/crowns-bridges.jpg";
import root from "../../assets/services/root-canal.jpg";
import teeth from "../../assets/services/teeth-cleaning.jpg";
import whitening from "../../assets/services/teeth-whitening.jpg";
import pediatric from "../../assets/services/pediatric-dentistry.jpg";
const serviceData = {
  "general-dentistry": {
    title: "General Dentistry",
    highlight: "Care for Your Everyday Smile",
    subtitle:
      "Build a strong foundation for better oral health with regular dental care and preventive attention.",
    image: general,
    introTitle: "Complete Care for Your Oral Health",
    intro:
      "General dentistry focuses on maintaining oral health through routine examinations, preventive care and appropriate treatment based on individual needs.",
    benefits: [
      "Regular dental examinations",
      "Early identification of dental concerns",
      "Personalised preventive care",
      "Guidance for everyday oral hygiene",
    ],
    steps: [
      {
        title: "Initial Consultation",
        description:
          "Discuss your dental concerns, history and oral health goals.",
      },
      {
        title: "Dental Examination",
        description:
          "The dentist examines your teeth and gums and may recommend further assessment.",
      },
      {
        title: "Care Recommendation",
        description:
          "Receive a treatment plan based on your dental needs.",
      },
      {
        title: "Follow Up",
        description:
          "Plan regular visits and maintain your oral hygiene routine.",
      },
    ],
    faqs: [
      {
        q: "How often should I visit a dentist?",
        a: "The recommended visit frequency depends on your oral health and your dentist's advice.",
      },
      {
        q: "What happens during a dental check up?",
        a: "A dental check up generally includes an examination of your teeth and gums and a discussion of any concerns.",
      },
      {
        q: "Can regular dental visits help prevent problems?",
        a: "Regular examinations can help identify potential concerns early and support preventive care.",
      },
    ],
  },

  "dental-implants": {
    title: "Dental Implants",
    highlight: "A Replacement Option for Missing Teeth",
    subtitle:
      "Explore dental implant treatment as an option for replacing missing teeth and restoring everyday function.",
    image: dental,
    introTitle: "Understanding Dental Implants",
    intro:
      "Dental implants are placed in the jawbone to support a replacement tooth or restoration. Suitability depends on an individual's oral health and clinical assessment.",
    benefits: [
      "An option for replacing missing teeth",
      "Designed to support chewing function",
      "Can be used to support dental restorations",
      "Treatment planned around individual needs",
    ],
    steps: [
      {
        title: "Consultation",
        description:
          "Discuss your needs and undergo a dental assessment.",
      },
      {
        title: "Treatment Planning",
        description:
          "The dentist evaluates suitability and plans the procedure.",
      },
      {
        title: "Implant Placement",
        description:
          "The implant is placed according to the agreed treatment plan.",
      },
      {
        title: "Restoration",
        description:
          "After the required healing period, a suitable restoration may be attached.",
      },
    ],
    faqs: [
      {
        q: "Is everyone suitable for dental implants?",
        a: "Suitability depends on factors such as oral health, bone condition and overall clinical assessment.",
      },
      {
        q: "How long does implant treatment take?",
        a: "The timeline varies depending on healing, treatment complexity and individual needs.",
      },
      {
        q: "How should I care for dental implants?",
        a: "Maintain daily oral hygiene and follow the dentist's cleaning and review recommendations.",
      },
    ],
  },

  "orthodontic-care": {
    title: "Orthodontic Care",
    highlight: "A Thoughtful Approach to Teeth Alignment",
    subtitle:
      "Explore orthodontic options designed to address tooth alignment and bite related concerns.",
    image: orthodontics,
    introTitle: "Understanding Orthodontic Treatment",
    intro:
      "Orthodontic care focuses on evaluating and managing the alignment of teeth and jaws. Treatment options may include braces or clear aligners, depending on clinical needs.",
    benefits: [
      "Assessment of tooth alignment",
      "Treatment options based on individual needs",
      "Guidance on oral hygiene during treatment",
      "Regular progress monitoring",
    ],
    steps: [
      {
        title: "Orthodontic Assessment",
        description:
          "The dentist evaluates tooth position and bite alignment.",
      },
      {
        title: "Treatment Planning",
        description:
          "Suitable options are discussed based on the assessment.",
      },
      {
        title: "Treatment Begins",
        description:
          "The selected orthodontic appliance is fitted or provided.",
      },
      {
        title: "Progress Reviews",
        description:
          "Regular reviews help monitor treatment progress.",
      },
    ],
    faqs: [
      {
        q: "What are the options for teeth alignment?",
        a: "Options may include traditional braces and clear aligners, depending on the case.",
      },
      {
        q: "How long does orthodontic treatment take?",
        a: "Treatment duration varies with alignment needs and individual response.",
      },
      {
        q: "Can adults consider orthodontic treatment?",
        a: "Adults may be suitable for orthodontic care after an appropriate clinical assessment.",
      },
    ],
  },

  "crowns-bridges": {
    title: "Crowns and Bridges",
    highlight: "Restore Strength and Function",
    subtitle:
      "Discover restorative dental options that can help protect damaged teeth and replace missing teeth.",
    image: crowns,
    introTitle: "Restorative Care for Your Teeth",
    intro:
      "Crowns are restorations used to cover or protect a tooth. Bridges can replace one or more missing teeth by using supporting teeth or other suitable support.",
    benefits: [
      "Support for damaged or weakened teeth",
      "Replacement options for missing teeth",
      "Restoration of chewing function",
      "Materials selected according to clinical needs",
    ],
    steps: [
      {
        title: "Dental Assessment",
        description:
          "The dentist examines the tooth or area requiring restoration.",
      },
      {
        title: "Treatment Planning",
        description:
          "Suitable restorative options and materials are discussed.",
      },
      {
        title: "Preparation",
        description:
          "The tooth or supporting area is prepared as required.",
      },
      {
        title: "Final Restoration",
        description:
          "The crown or bridge is fitted and checked for comfort and function.",
      },
    ],
    faqs: [
      {
        q: "When might a dental crown be recommended?",
        a: "A crown may be recommended to cover and protect a damaged or weakened tooth.",
      },
      {
        q: "What is the difference between a crown and a bridge?",
        a: "A crown covers a tooth, while a bridge is used to replace one or more missing teeth.",
      },
      {
        q: "How do I maintain crowns and bridges?",
        a: "Daily brushing, cleaning around the restoration and regular dental reviews are important.",
      },
    ],
  },

  "root-canal": {
    title: "Root Canal Treatment",
    highlight: "Treatment to Help Preserve a Tooth",
    subtitle:
      "Learn about treatment for infection or inflammation affecting the inner part of a tooth.",
    image: root,
    introTitle: "Understanding Root Canal Treatment",
    intro:
      "Root canal treatment addresses infection or inflammation inside a tooth by removing affected tissue, cleaning the canal system and sealing it.",
    benefits: [
      "Treatment for infected or inflamed pulp",
      "An option that may help preserve a natural tooth",
      "Removal of affected tissue",
      "Restoration planned after treatment",
    ],
    steps: [
      {
        title: "Examination",
        description:
          "The dentist assesses the tooth and determines whether root canal treatment is appropriate.",
      },
      {
        title: "Cleaning",
        description:
          "Affected tissue is removed and the canal system is cleaned.",
      },
      {
        title: "Sealing",
        description:
          "The cleaned canal is filled and sealed.",
      },
      {
        title: "Restoration",
        description:
          "A suitable restoration may be recommended to protect the tooth.",
      },
    ],
    faqs: [
      {
        q: "Why might root canal treatment be needed?",
        a: "It may be recommended when the pulp inside a tooth is infected or inflamed.",
      },
      {
        q: "Can a tooth be preserved after root canal treatment?",
        a: "The treatment is intended to help preserve the natural tooth, although outcomes depend on the individual case.",
      },
      {
        q: "Will I need a crown afterwards?",
        a: "Some treated teeth may need a crown or another restoration. Your dentist will advise based on the tooth.",
      },
    ],
  },

  "teeth-cleaning": {
    title: "Teeth Cleaning and Polishing",
    highlight: "A Cleaner and Fresher Smile",
    subtitle:
      "Professional cleaning can help remove plaque and hardened deposits that regular brushing may not remove.",
    image: teeth,
    introTitle: "Professional Dental Cleaning",
    intro:
      "Professional teeth cleaning involves removing plaque and calculus deposits from the teeth. Polishing may also be performed as part of the visit.",
    benefits: [
      "Removal of plaque and calculus",
      "Cleaning of areas that are difficult to reach",
      "Support for healthy gum care",
      "Personalised oral hygiene guidance",
    ],
    steps: [
      {
        title: "Oral Examination",
        description:
          "The dentist or dental professional assesses your teeth and gums.",
      },
      {
        title: "Professional Cleaning",
        description:
          "Deposits are removed using appropriate dental instruments.",
      },
      {
        title: "Polishing",
        description:
          "Polishing may be performed when appropriate.",
      },
      {
        title: "Aftercare Guidance",
        description:
          "Receive advice on brushing, flossing and future dental visits.",
      },
    ],
    faqs: [
      {
        q: "How often should teeth be professionally cleaned?",
        a: "The frequency depends on your gum health, oral hygiene and dentist's recommendation.",
      },
      {
        q: "Does cleaning damage teeth?",
        a: "Professional cleaning performed appropriately is intended to remove deposits while preserving tooth structure.",
      },
      {
        q: "Can cleaning remove all tooth stains?",
        a: "Cleaning may remove some surface stains, but deeper discolouration may need a different approach.",
      },
    ],
  },

  "teeth-whitening": {
    title: "Teeth Whitening",
    highlight: "Explore a Brighter Looking Smile",
    subtitle:
      "Learn about professional whitening options for certain types of tooth discolouration.",
    image: whitening,
    introTitle: "Understanding Teeth Whitening",
    intro:
      "Teeth whitening uses suitable whitening agents to lighten the appearance of natural teeth. The appropriate method depends on the cause of discolouration and oral health.",
    benefits: [
      "Assessment of tooth discolouration",
      "Professional guidance on suitable options",
      "Treatment planned around oral health",
      "Advice on maintaining results",
    ],
    steps: [
      {
        title: "Smile Assessment",
        description:
          "The dentist checks your teeth and discusses your whitening goals.",
      },
      {
        title: "Suitability Check",
        description:
          "The cause of discolouration and oral health are assessed.",
      },
      {
        title: "Whitening Procedure",
        description:
          "A suitable whitening method is selected and carried out.",
      },
      {
        title: "Aftercare",
        description:
          "Receive guidance on managing sensitivity and maintaining your smile.",
      },
    ],
    faqs: [
      {
        q: "Is teeth whitening suitable for everyone?",
        a: "Not everyone is suitable. A dental assessment is recommended before whitening.",
      },
      {
        q: "Can whitening change the colour of crowns or fillings?",
        a: "Whitening products generally do not change the colour of existing crowns or fillings.",
      },
      {
        q: "Can teeth become sensitive after whitening?",
        a: "Temporary sensitivity can occur. Discuss any concerns with your dentist.",
      },
    ],
  },

  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    highlight: "Gentle Dental Care for Children",
    subtitle:
      "Support your child's oral health with age appropriate dental guidance and preventive care.",
    image: pediatric,
    introTitle: "Building Healthy Habits Early",
    intro:
      "Pediatric dentistry focuses on the oral health needs of infants, children and adolescents, with care tailored to their stage of development.",
    benefits: [
      "Age appropriate dental examinations",
      "Guidance for brushing and oral hygiene",
      "Monitoring of growing teeth",
      "Preventive care based on individual needs",
    ],
    steps: [
      {
        title: "First Visit",
        description:
          "Discuss your child's dental history and any concerns.",
      },
      {
        title: "Gentle Examination",
        description:
          "The dentist checks the child's teeth and oral development.",
      },
      {
        title: "Preventive Guidance",
        description:
          "Receive advice on brushing, diet and oral hygiene habits.",
      },
      {
        title: "Regular Reviews",
        description:
          "Plan future visits based on your child's dental needs.",
      },
    ],
    faqs: [
      {
        q: "When should a child first visit a dentist?",
        a: "Parents can discuss the timing of the first visit with a dental professional as soon as the first tooth appears or by the first birthday.",
      },
      {
        q: "Do children need dental check ups for baby teeth?",
        a: "Yes. Baby teeth support eating, speech and the development of the mouth.",
      },
      {
        q: "How can I help my child develop good oral habits?",
        a: "Supervise brushing, encourage healthy food choices and follow your dentist's advice.",
      },
    ],
  },
};

const processLabels = [
  "01",
  "02",
  "03",
  "04",
];

function ServiceDetails() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="gs-service-detail">

      {/* HERO */}

      <section className="gs-detail-hero">
        <div className="gs-detail-hero-content">
          <span className="gs-detail-tag">
            <Stethoscope size={15} />
            Gajanana Smile Care
          </span>

          <h1>
            {service.title}
            <br />
            <span>{service.highlight}</span>
          </h1>

          <p>{service.subtitle}</p>

          <Link to="/contact" className="gs-detail-button">
            Book an Appointment
            <ArrowRight size={17} />
          </Link>

          <div className="gs-detail-trust">
            <span><ShieldCheck size={15} /> Patient focused care</span>
            <span><Heart size={15} /> Personalised attention</span>
          </div>
        </div>

        <div className="gs-detail-hero-image">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="gs-detail-intro gs-detail-container">
        <div className="gs-detail-intro-image">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="gs-detail-intro-content">
          <span className="gs-detail-section-label">
            <Sparkles size={14} />
            About This Treatment
          </span>

          <h2>{service.introTitle}</h2>
          <p>{service.intro}</p>

          <Link to="/contact" className="gs-detail-text-link">
            Talk to Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="gs-detail-benefits">
        <div className="gs-detail-container">

          <div className="gs-detail-heading">
            <span className="gs-detail-section-label">
              <Heart size={14} />
              Treatment Benefits
            </span>

            <h2>
              Care Designed Around
              <span> Your Needs</span>
            </h2>

            <p>
              Your dentist can help identify the right approach
              based on your oral health and individual needs.
            </p>
          </div>

          <div className="gs-detail-benefit-grid">
            {service.benefits.map((benefit, index) => (
              <div className="gs-detail-benefit-card" key={benefit}>
                <span className="gs-detail-benefit-number">
                  0{index + 1}
                </span>
                <CheckCircle2 />
                <h3>{benefit}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TREATMENT PROCESS */}

      <section className="gs-detail-process gs-detail-container">

        <div className="gs-detail-process-heading">
          <span className="gs-detail-section-label">
            <Stethoscope size={14} />
            How It Works
          </span>

          <h2>
            Your Treatment
            <span> Journey</span>
          </h2>

          <p>
            Each treatment is planned according to your
            individual dental assessment.
          </p>
        </div>

        <div className="gs-detail-process-grid">
          {service.steps.map((step, index) => (
            <article className="gs-detail-step" key={step.title}>
              <span className="gs-detail-step-number">
                {processLabels[index]}
              </span>

              <div className="gs-detail-step-line" />

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="gs-detail-why">
        <div className="gs-detail-container gs-detail-why-inner">

          <div className="gs-detail-why-content">
            <span className="gs-detail-section-label">
              <ShieldCheck size={14} />
              Our Approach
            </span>

            <h2>
              Care That Puts
              <br />
              <span>Your Comfort First</span>
            </h2>

            <p>
              We believe in understanding your concerns,
              explaining suitable options and helping you
              make informed decisions about your dental care.
            </p>

            <ul>
              <li><CheckCircle2 /> Clear treatment discussions</li>
              <li><CheckCircle2 /> Attention to patient comfort</li>
              <li><CheckCircle2 /> Personalised care planning</li>
              <li><CheckCircle2 /> Guidance throughout your visit</li>
            </ul>
          </div>

          <div className="gs-detail-why-image">
            <img src={service.image} alt={service.title} />
          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="gs-detail-faq gs-detail-container">
        <div className="gs-detail-faq-heading">
          <span className="gs-detail-section-label">
            <HelpCircle size={14} />
            Common Questions
          </span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>
        </div>

        <div className="gs-detail-faq-list">
          {service.faqs.map((faq, index) => (
            <details className="gs-detail-faq-item" key={faq.q}>
              <summary>
                <span>{faq.q}</span>
                <span className="gs-detail-faq-plus">+</span>
              </summary>

              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}

      <section className="gs-detail-related gs-detail-container">
        <div>
          <span className="gs-detail-section-label">
            <Smile size={14} />
            Explore More
          </span>

          <h2>Explore Our Other Services</h2>
          <p>Discover more dental care options for your needs.</p>
        </div>

        <Link to="/services" className="gs-detail-button">
          View All Services
          <ArrowRight size={16} />
        </Link>
      </section>

      {/* CTA */}

      <section className="gs-detail-cta">
        <div className="gs-detail-cta-icon">
          <Smile size={42} />
        </div>

        <div className="gs-detail-cta-content">
          <span>Your Smile Matters</span>
          <h2>Ready to Take the Next Step?</h2>
          <p>
            Contact Gajanana Smile Care to discuss your dental needs.
          </p>
        </div>

        <Link to="/contact" className="gs-detail-cta-button">
          <CalendarDays size={17} />
          Book an Appointment
          <ArrowRight size={16} />
        </Link>
      </section>

    </main>
  );
}

export default ServiceDetails;
