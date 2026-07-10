import { BUSINESS } from '../config/business';

export function buildWhatsAppLink(context, data = {}) {
  const messages = {
    generic: `Hello ${BUSINESS.name}, I'd like to enquire about your services.`,
    service: `Hello ${BUSINESS.name},\nI need ${data.service} service.\nMy area is: ${data.area || '[please specify]'}\nPlease share availability and details.`,
    heroBooking: `New Quick Booking\n\nName: ${data.name}\nService: ${data.service}\nArea: ${data.area}`,
    detailedBooking: `New Service Request\n\nName: ${data.name}\nMobile: ${data.mobile}\nService: ${data.service}\nArea: ${data.area}\nNearby Landmark: ${data.landmark || 'Not shared'}\nProblem Details: ${data.details || 'Not shared'}\nLocation: ${data.location || 'Not shared'}\nPreferred Contact: ${data.contactMethod || 'WhatsApp'}`,
  };
  const text = encodeURIComponent(messages[context] || messages.generic);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
}

export function buildCallLink() {
  return `tel:${BUSINESS.phone}`;
}
