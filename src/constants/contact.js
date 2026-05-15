/**
 * Contact information constants
 * Single source of truth for all contact details across the site
 */

export const CONTACT = {
  email: "munitmedia.ke@gmail.com",
  emailAlt: "kadan.md@gmail.com",
  phoneDisplay: "+254 713 919 051",
  phoneCall: "0713919051",
  whatsappNumber: "254713919051",
  whatsappMessage:
    "Hi! I'd like to book a videography or photography session. Please share your availability and pricing.",
  location: "Ekalakala, Machakos, Kenya",
};

export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@m-unitmedia7055",
  instagram: "https://instagram.com/m-unitmedia7055",
  facebook: "https://facebook.com/munitmedia",
};

export const COMPANY = {
  name: "M-Unit Media",
  tagline:
    "Cinematic Videography & Professional Photography That Captures Your Moments Perfectly",
  description:
    "Premium videography and photography for businesses, brands, and individuals across Kenya.",
};

export const getWhatsAppLink = (message = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const getPhoneLink = (number = CONTACT.phoneCall) => `tel:${number}`;

export const getEmailLink = (email = CONTACT.email) => `mailto:${email}`;
