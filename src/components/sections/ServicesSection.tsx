"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Camera, Shield, Lock, Radio, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { getWhatsAppUrl, getCallUrl, IMAGES } from "@/lib/utils";

// ─── Every single product with its own image ─────────────────────────────────

const CATEGORIES = [
  {
    id: "cctv",
    label: "CCTV Solutions",
    icon: Camera,
    tagline: "See everything. Miss nothing.",
    desc: "From HD bullet cameras to AI-powered 4K systems — complete surveillance for every corner of your property.",
    heroImg: IMAGES.cctv3,
    cta: "Request Installation",
    ctaMsg: "Hello Lepton Technologies, I would like to request CCTV installation.",
    accentColor: "#D4AF37",
    products: [
      { name: "Bullet Cameras", slug: "bullet-cameras", img: "/bullet%20cameras.jpg" },
      { name: "Dome Cameras", slug: "dome-cameras", img: "/domes camera.jpg" },
      { name: "PTZ Cameras", slug: "ptz-cameras", img: "/ptzcamera.jpeg" },
      { name: "Wireless Cameras", slug: "wireless-cameras", img: "/wirelesscamera.jpg" },
      { name: "IP Cameras", slug: "ip-cameras", img: "/ip cameras.jpg" },
      { name: "Night Vision Cameras", slug: "night-vision-cameras", img: "/Night%20Vision%20Cameras.jpeg" },
      { name: "Solar Cameras", slug: "solar-cameras", img: "/solarcamera.jpg" },
      { name: "AI Smart Cameras", slug: "ai-smart-cameras", img: "/aismartcamera.jpg" },
      { name: "4K Cameras", slug: "4k-cameras", img: "/4ksmartcamera.webp" },
      { name: "NVR Systems", slug: "nvr-systems", img: "/nvrsystem.jpg" },
    ],
  },
  {
    id: "alarm",
    label: "Alarm Solutions",
    icon: Shield,
    tagline: "Instant alerts. Total peace of mind.",
    desc: "Smart alarm systems that detect threats before they escalate — all connected to your phone in real time.",
    heroImg: IMAGES.security_guard,
    cta: "Talk To An Expert",
    ctaMsg: "Hello Lepton Technologies, I would like to talk to an expert about alarm systems.",
    accentColor: "#EF6450",
    products: [
      { name: "Burglar Alarm Systems", slug: "burglar-alarm-systems", img: "/Burglar%20Alarm%20Systems.png" },
      { name: "Motion Sensors", slug: "motion-sensors", img: "/motion%20sensors.png" },
      { name: "Smoke Detectors", slug: "smoke-detectors", img: "/Smoke%20Detectors%20.png" },
      { name: "Fire Alarm Systems", slug: "fire-alarm-systems", img: "/Fire%20Alarm%20Systems.png" },
      { name: "Gas Leak Detectors", slug: "gas-leak-detectors", img: "/Gas%20Leak%20Detectors.png" },
      { name: "Glass Break Sensors", slug: "glass-break-sensors", img: "/Glass%20Break%20Sensors.png" },
      { name: "Panic Buttons", slug: "panic-buttons", img: "/Panic%20Buttons.jpeg" },
      { name: "Wireless Alarm Systems", slug: "wireless-alarm-systems", img: "/Wireless%20Alarm%20Systems.jpeg" },
      { name: "Smart Home Alarms", slug: "smart-home-alarms", img: "/Smart%20Home%20Alarms.jpeg" },
      { name: "Outdoor Security Sensors", slug: "outdoor-security-sensors", img: "/Outdoor%20Security%20Sensors.png" },
    ],
  },
  {
    id: "sensor",
    label: "Sensors",
    icon: Radio,
    tagline: "Detect every threat. Before it's too late.",
    desc: "The nervous system of your security — PIR, vibration, flood, temperature and beam sensors for total awareness.",
    heroImg: IMAGES.sensor2,
    cta: "Enquire About Sensors",
    ctaMsg: "Hello Lepton Technologies, I would like to enquire about security sensors.",
    accentColor: "#64C8A0",
    products: [
      { name: "PIR Motion Sensors", slug: "pir-motion-sensors", img: "/PIR%20Motion%20Sensors.jpeg" },
      { name: "Vibration Sensors", slug: "vibration-sensors", img: "/Vibration%20Sensors%20.jpeg" },
      { name: "Temperature Sensors", slug: "temperature-sensors", img: "/Temperature%20Sensors.png" },
      { name: "Flood / Water Sensors", slug: "flood-water-sensors", img: "/Flood%20or%20Water%20Sensors.jpeg" },
{ name: "Door & Window Sensors", slug: "door-window-sensors", img: "/Door%20%26%20Window%20Sensors.webp" },
      { name: "Beam Break Sensors", slug: "beam-break-sensors", img: "/beambreaksensor.jpg" },
      { name: "Smoke & CO Sensors", slug: "smoke-co-sensors", img: "/Smoke%20Detectors%20.png" },
    ],
  },
  {
    id: "access",
    label: "Door Access Control",
    icon: Lock,
    tagline: "Control who enters. Always.",
    desc: "Biometric, face recognition, RFID and smart locks — precise access control logging every entry and exit.",
    heroImg: IMAGES.fingerprint,
    cta: "Get A Quote",
    ctaMsg: "Hello Lepton Technologies, I would like a quote for door access control.",
    accentColor: "#78A0FF",
    products: [
      { name: "Fingerprint Access Systems", slug: "fingerprint-access-systems", img: "/Fingerprint%20Access%20Systems.jpeg" },
      { name: "Face Recognition Systems", slug: "face-recognition-systems", img: "/FACERECON%20IMAGE.jpg" },
      { name: "RFID Card Systems", slug: "rfid-card-systems", img: "/RFID%20IMAGE.jpg" },
      { name: "Biometric Access Control", slug: "biometric-access-control", img: "/Biometric%20Access%20Control.jpeg" },
      { name: "Smart Locks", slug: "smart-locks", img: "/SMARTLOCK.jpg" },
      { name: "Video Intercom Systems", slug: "video-intercom-systems", img: "/VIDEO INTER.jpeg" },
      { name: "PIN Keypad Access", slug: "pin-keypad-access", img: "/PIN%20Keypad%20Access.jpeg" },
      { name: "Magnetic Locks", slug: "magnetic-locks", img: "/Magnetic%20Locks.jpeg" },
{ name: "Electric Strike Locks", slug: "electric-strike-locks", img: "/Electric%20Strike%20Locks.jpeg" },
      { name: "Time & Attendance Systems", slug: "time-attendance-systems", img: "/Time%20%26%20Attendance%20Systems.jpeg" },
    ],
  },
];

// ─── Single product card ──────────────────────────────────────────────────────

function ProductCard({
  name, img, accentColor, i, slug,
}: {
  name: string; img: string; accentColor: string; i: number; slug: string;
}) {
  return (
    <motion.a
      href={`/products/${slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.05, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      className="group relative rounded-2xl overflow-hidden border border-white/6 hover:border-white/25 transition-all cursor-pointer block"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Product image — fills the card */}
      <Image
        src={img}
        alt={name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 20vw"
        quality={80}
      />

      {/* Bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Hover tint using category accent */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(to top, ${accentColor}22 0%, transparent 60%)` }}
      />

      {/* Name */}
      <div className="absolute bottom-0 inset-x-0 p-4">
        <p className="text-white font-bold text-base leading-tight mb-2 drop-shadow-lg">{name}</p>
        {/* Enquire CTA — slides up on hover */}
        <div className="flex items-center gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-semibold" style={{ color: accentColor }}>Enquire</span>
          <ArrowRight size={14} style={{ color: accentColor }} />
        </div>
      </div>
    </motion.a>
  );
}

// ─── Category block ───────────────────────────────────────────────────────────

function CategoryBlock({ cat, index }: { cat: typeof CATEGORIES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-24 last:mb-0">

      {/* Category hero banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full rounded-3xl overflow-hidden mb-8 bg-black"

        style={{ height: "clamp(180px, 28vw, 420px)" }}
      >
        {/* For specific categories, remove background image and keep a darker solid/gradient look */}
        {(cat.id === "cctv" || cat.id === "alarm" || cat.id === "access" || cat.id === "sensor") ? null : (

          <Image
            src={cat.heroImg}
            alt={cat.label}
            fill
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
        )}
        {/* Dark base when background image is removed */}
        {cat.id === "cctv" || cat.id === "alarm" || cat.id === "access" || cat.id === "sensor" ? (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.80) 100%)",
            }}
          />
        ) : null}

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 0% 100%, ${cat.accentColor}20 0%, transparent 55%)` }}
        />

        {/* Content on hero */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-14 py-10">
          {/* Extra bottom padding so CTAs never feel attached to the "line"/edge */}
          <div className="max-w-2xl pb-6">
            {/* Giant category name — this IS the headline */}
            <h3
              className="font-display font-black text-white leading-none mb-3 tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 6.8vw, 6.2rem)", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}
            >
              <span style={{ color: cat.accentColor }}>{cat.label.split(" ")[0]}</span>
              {" "}
              <span className="text-white">{cat.label.split(" ").slice(1).join(" ")}</span>
            </h3>

            <p
              className="font-display font-semibold italic mb-5"
              style={{ fontSize: "clamp(1rem, 2.2vw, 1.5rem)", color: `${cat.accentColor}cc` }}
            >
              {cat.tagline}
            </p>
            <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-6 max-w-sm">
              {cat.desc}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl(cat.ctaMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${cat.accentColor}, #F5E070)` }}
              >
                <MessageCircle size={15} /> {cat.cta}
              </a>
              <a
                href={getCallUrl()}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-all"
              >
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>
        </div>

        {/* Product count badge */}
        <div
          className="absolute top-5 right-5 glass-gold px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ color: cat.accentColor }}
        >
          {cat.products.length} Products
        </div>
      </motion.div>

      {/* Product grid — every item shown with image + name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
        {cat.products.map((p, i) => (
          <ProductCard
            key={p.name}
            name={p.name}
            img={p.img}
            accentColor={cat.accentColor}
            slug={p.slug}
            i={i}
          />
        ))}
      </div>

      {/* Divider between categories */}
      {index < CATEGORIES.length - 1 && (
        <div className="mt-24 gold-line opacity-20" />
      )}
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.05) 0%, transparent 55%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20"
        >
          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            What We Offer
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
            >
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-white/35 text-sm max-w-xs leading-relaxed">
              Every product listed with its own image. Tap any item to enquire directly on WhatsApp.
            </p>
          </div>

          {/* Quick jump anchors */}
          <div className="flex flex-wrap gap-2 mt-8">
            {CATEGORIES.map(({ id, label, icon: Icon, accentColor }) => (
              <a
                key={id}
                href={`#svc-${id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass border border-white/8 hover:border-white/25 text-white/60 hover:text-white transition-all"
              >
                <Icon size={13} style={{ color: accentColor }} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* All categories rendered one after another */}
        {CATEGORIES.map((cat, index) => (
          <div key={cat.id} id={`svc-${cat.id}`}>
            <CategoryBlock cat={cat} index={index} />
          </div>
        ))}

      </div>
    </section>
  );
}
