import React from "react";
import { Phone } from "lucide-react";
import Button from "./Button";
import {
  CONTACT,
  getWhatsAppLink,
  getPhoneLink,
} from "../../constants/contact";

/**
 * ContactButtons component
 * Reusable button group for WhatsApp and phone call actions
 * Variants: horizontal (side-by-side) or vertical (stacked)
 */
export const ContactButtons = ({
  variant = "horizontal",
  showLabels = true,
  buttonSize = "md",
  className = "",
}) => {
  const flexDirection = variant === "horizontal" ? "flex-row" : "flex-col";

  return (
    <div className={`flex ${flexDirection} gap-4 ${className}`}>
      <Button
        href={getWhatsAppLink()}
        variant="whatsapp"
        size={buttonSize}
        external
      >
        {showLabels ? "WhatsApp Booking" : "WhatsApp"}
      </Button>

      <Button
        href={getPhoneLink()}
        variant="primary"
        size={buttonSize}
      >
        <Phone className="w-5 h-5" />
        {showLabels ? "Call Now" : "Call"}
      </Button>
    </div>
  );
};

export default ContactButtons;
