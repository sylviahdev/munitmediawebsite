/**
 * Contact information constants
 * Single source of truth for all contact details across the site
 */

export const CONTACT = {
  email: "munitmedia.ke@gmail.com",
  phoneDisplay: "0713919051 / 0758668360",
  phoneCall: "0713919051",
  whatsappNumber: "254713919051",
  whatsappMessage: "Hi M-Unit Media, I want to book a video or photo shoot.",
  location: "Ekalakala, Machakos County, Kenya",
};

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@m-unitmedia7055",
  instagram: "https://instagram.com/m-unitmedia7055",
  facebook: "https://facebook.com/m-unitmedia7055",
};

export const COMPANY = {
  name: "M-Unit Media",
  tagline: "Capture life's most important moments with cinematic precision",
  description: "Premium Videography & Photography Services in Ekalakala, Machakos and beyond.",
  services: [
    "Weddings",
    "Graduations",
    "Funerals",
    "Baby showers",
    "Corporate events",
  ],
};

// Helper functions for generating contact links
export const getWhatsAppLink = (message = CONTACT.whatsappMessage) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodedMessage}`;
};

export const getPhoneLink = (number = CONTACT.phoneCall) => {
  return `tel:${number}`;
};

export const getEmailLink = (email = CONTACT.email) => {
  return `mailto:${email}`;
};
