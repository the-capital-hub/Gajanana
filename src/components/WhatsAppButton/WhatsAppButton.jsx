
import { FaWhatsapp } from "react-icons/fa6";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "919686863278";

  const message = encodeURIComponent(
    "Hello Gajanana Smile Care, I would like to know more about your dental services."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className="gs-whatsapp-floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gajanana Smile Care on WhatsApp"
    >
      <span className="gs-whatsapp-pulse"></span>

      <span className="gs-whatsapp-tooltip">
        Chat with us
        <MessageCircle size={14} />
      </span>

      <FaWhatsapp className="gs-whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;
