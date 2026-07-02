export const WHATSAPP_NUMBER = "+254143097319";
export const PHONE_NUMBER = "+254143097319";

export const getWhatsAppUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const getCallUrl = () => `tel:${PHONE_NUMBER}`;

// High-quality Unsplash images — security & surveillance themed
export const IMAGES = {
  // CCTV Solutions background (local asset in /public)
  hero: "/hero-bg.png",
  heroAlt: "/CCTV%20Solutions",
  cctv1: "/ptzcamera1.jpg",
  cctv2: "/bullet cameras.jpg",
  cctv3: "/4ksmartcamera1.webp",
  // Burglar Alarm Systems images (local assets in /public)
  alarm1: "/Burglar%20Alarm%20Systems%201.jpeg",
  alarm2: "/Burglar%20Alarm%20Systems%202.jpeg",
  access1: "/FACERECON IMAGE1.jpg",
  access2: "/SMARTLOCK.jpg",
  building: "/Warehouses & Logistics.jpeg",
  warehouse: "/Warehouses%20%26%20Logistics.jpeg",
  camera_closeup: "/bullet cameras2.jpg",
  control_room: "/DOOR ACCESS CONTROL.jpeg",
  fingerprint: "/DOOR%20ACCESS%20CONTROL.jpeg",
  security_guard: "/Alarm%20Solutions.jpeg",
  tech_bg: "/CCTV%20Solutions",
  city: "/Warehouses & Logistics.jpeg",
  bullet_cam: "/bullet cameras.jpg",
  dome_cam: "/domes camera.jpg",
  smart_lock: "/SMARTLOCK.jpg",
  biometric: "/Biometric Access Control.jpeg",
  motion: "/motion sensors 1.jpeg",
  fire_alarm: "/Fire Alarm Systems.png",
  // Sectors
  school: "/Schools%20%26%20Universities.jpeg",
  hospital: "/Hospitals%20%26%20Clinics.jpeg",
  house: "/Homes%20%26%20Villas.jpg",
  office: "/Offices%20%26%20Corporate%20Buildings.webp",
  smartHome: "/Smart Home Alarms.jpeg",
  doorAccess: "/DOOR ACCESS CONTROL.jpeg",
  town: "/Cities%2C%20Towns%20%26%20Public%20Spaces.png",

  church: "/Churches%20%26%20Places%20of%20Worship.jpeg",
  industry: "/ndustries%20%26%20Factories.jpeg",
  estate: "/Estates%20%26%20Gated%20Communities.webp",

  // Extra product images
  sensor1: "/PIR Motion Sensors 1.jpeg",
  sensor2: "/Sensors%20bg.jpeg",
  nvr: "/nvrsystem1.jpeg",
  intercom: "/VIDEO INTER.jpeg",
  floating: "/floating.webp",
};
