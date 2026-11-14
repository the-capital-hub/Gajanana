
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTooth,
} from "react-icons/fa6";
import {
  MapPin,
  Phone,
  Clock3,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";
import logo from '../../assets/logo.png'
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Appointment", path: "/appointment" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="gs-header">

      {/* Top Information Bar */}
      <div className="gs-topbar">
        <div className="gs-topbar-container">

          <div className="gs-topbar-contact">
            <div className="gs-topbar-item">
              <MapPin />
              <span>Kundalahalli, Whitefield, Bengaluru</span>
            </div>

            <span className="gs-topbar-divider" />

            <a href="tel:9686863278" className="gs-topbar-item">
              <Phone />
              <span>+91 96868 63278</span>
            </a>
          </div>

          <div className="gs-topbar-social">
            <div className="gs-topbar-item gs-timing">
              <Clock3 />
              <span>Contact Us for Clinic Timings</span>
            </div>

            <span className="gs-topbar-divider" />

            <div className="gs-social-list">
              <a
                href="https://wa.me/919686863278"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="gs-social-icon whatsapp"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="gs-social-icon instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="gs-social-icon facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="gs-navigation">
        <div className="gs-navigation-container">

          {/* Brand Logo */}
          <Link to="/" className="gs-brand" onClick={closeMenu}>
            <div className="gs-brand-symbol">
              <img src={logo} alt="" />
            </div>

            
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="gs-desktop-nav">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `gs-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Appointment CTA */}
          <Link
            to="/appointment"
            className="gs-appointment-btn"
            onClick={closeMenu}
          >
            <CalendarDays />
            <span>Book Appointment</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="gs-mobile-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`gs-mobile-panel ${menuOpen ? "open" : ""}`}>
          <nav className="gs-mobile-nav">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `gs-mobile-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/appointment"
            className="gs-mobile-appointment"
            onClick={closeMenu}
          >
            <CalendarDays />
            <span>Book Appointment</span>
          </Link>

          <div className="gs-mobile-social">
            <a
              href="https://wa.me/919686863278"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Navbar;
