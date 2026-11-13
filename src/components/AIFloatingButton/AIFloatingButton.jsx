
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTooth,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  Bot,
  X,
  Sparkles,
  CalendarDays,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "./AIFloatingButton.css";

function AIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gs-ai-widget">

      {/* Chat Window */}
      {isOpen && (
        <div className="gs-ai-panel">

          <div className="gs-ai-header">
            <div className="gs-ai-profile">
              <div className="gs-ai-avatar">
                <FaTooth />
                <span className="gs-ai-online" />
              </div>

              <div>
                <h3>Smile Care Assistant</h3>
                <span>Here to help you</span>
              </div>
            </div>

            <button
              className="gs-ai-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
            >
              <X />
            </button>
          </div>

          <div className="gs-ai-body">

            <div className="gs-ai-welcome-icon">
              <Sparkles />
            </div>

            <h4>Hello! Welcome to Gajanana Smile Care</h4>

            <p>
              How can I help you today? Explore our services or book
              your dental appointment.
            </p>

            <div className="gs-ai-options">

              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="gs-ai-option"
              >
                <span className="gs-ai-option-icon">
                  <CalendarDays />
                </span>

                <span>
                  <strong>Book Appointment</strong>
                  <small>Schedule your dental visit</small>
                </span>

                <ArrowUpRight />
              </Link>

              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="gs-ai-option"
              >
                <span className="gs-ai-option-icon">
                  <FaTooth />
                </span>

                <span>
                  <strong>Explore Treatments</strong>
                  <small>Discover dental services</small>
                </span>

                <ArrowUpRight />
              </Link>

              <a
                href="https://wa.me/919686863278"
                target="_blank"
                rel="noopener noreferrer"
                className="gs-ai-option"
              >
                <span className="gs-ai-option-icon">
                  <FaWhatsapp />
                </span>

                <span>
                  <strong>Chat With Our Team</strong>
                  <small>Connect with us on WhatsApp</small>
                </span>

                <ArrowUpRight />
              </a>

            </div>
          </div>

          <div className="gs-ai-footer">
            <MessageCircle />
            <span>Gajanana Smile Care</span>
          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        className={`gs-ai-floating-btn ${isOpen ? "opened" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X /> : <Bot />}

        {!isOpen && (
          <>
            <span className="gs-ai-pulse" />
            <span className="gs-ai-tooltip">Ask AI Assistant</span>
          </>
        )}
      </button>

    </div>
  );
}

export default AIFloatingButton;
