
import { Link } from "react-router-dom";
import {
  FaTooth,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const popularServices = [
    "Oral Surgery",
    "Pediatric Dentistry",
    "Whitening Boost",
    "Wisdom Tooth Extraction",
    "Gum Care",
    "Emergency Dentistry",
    "Ortho Solutions",
    "Cavity Prevention",
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Appointment", path: "/appointment" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="gs-footer">

      {/* Decorative Top Curve */}
      <div className="gs-footer-curve">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 65 C250 -15 420 10 650 52 C900 100 1120 65 1440 5"
            fill="none"
            stroke="#d8b66a"
            strokeWidth="2"
          />
          <path
            d="M0 67 C250 -13 420 12 650 54 C900 102 1120 67 1440 7 L1440 100 L0 100 Z"
            fill="#073d33"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div
  className="gs-footer-main"
  
>

        {/* Decorative Tooth Watermark */}
        <div className="gs-footer-watermark">
          <FaTooth />
        </div>

        <div className="gs-footer-container">

          {/* Brand Column */}
          <div className="gs-footer-about">

            <Link to="/" className="gs-footer-brand">
              <span className="gs-footer-brand-icon">
                <FaTooth />
              </span>

              <span className="gs-footer-brand-name">
                <strong>Gajanana</strong>
                <strong>Smile Care</strong>
                <small>DENTAL CLINIC</small>
              </span>
            </Link>

            <p className="gs-footer-description">
              We are ready to make your smile sparkle!
            </p>

            <div className="gs-footer-socials">
              <a
                href="https://wa.me/919686863278"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="gs-whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="gs-instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="gs-facebook"
              >
                <FaFacebookF />
              </a>
            </div>

          </div>

          {/* Popular Services */}
          <div className="gs-footer-column">

            <h3>Popular Services</h3>
            <span className="gs-footer-title-line" />

            <ul>
              {popularServices.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <ChevronRight />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Quick Links */}
          <div className="gs-footer-column">

            <h3>Quick Links</h3>
            <span className="gs-footer-title-line" />

            <ul>
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <ChevronRight />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact Column */}
          <div className="gs-footer-contact">

            <h3>Get In Touch</h3>
            <span className="gs-footer-title-line" />

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gajanana+Smile+Care+Kundalahalli+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="gs-footer-contact-item"
            >
              <span className="gs-footer-contact-icon">
                <MapPin />
              </span>

              <span>
                No. 26/5, SLVR Building, Above Medplus Pharmacy, 9th Cross
                Road, ITPL Main Road, Kundalahalli, Brookefield, Bengaluru,
                Karnataka 560037
              </span>
            </a>

            <a
              href="tel:9686863278"
              className="gs-footer-contact-item"
            >
              <span className="gs-footer-contact-icon">
                <Phone />
              </span>
              <span>9686863278</span>
            </a>

            <a
              href="mailto:info@gajananasmilecare.com"
              className="gs-footer-contact-item"
            >
              <span className="gs-footer-contact-icon">
                <Mail />
              </span>
              <span>info@gajananasmilecare.com</span>
            </a>

            <div className="gs-footer-contact-item">
              <span className="gs-footer-contact-icon">
                <Clock3 />
              </span>
              <span>Contact us for clinic timings</span>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="gs-footer-bottom">
          <div className="gs-footer-bottom-inner">

            <p>
              © {new Date().getFullYear()} Gajanana Smile Care. All Rights Reserved.
            </p>

            <Link
              to="/appointment"
              className="gs-footer-visit-btn"
            >
              <span>Book Your Visit</span>
              <ArrowUpRight />
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
