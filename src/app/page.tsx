import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SectorsSection from "@/components/sections/SectorsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lepton Technologies | CCTV, Access Control, Time & Attendance, Alarm & Smart Security Systems Nairobi Kenya",
  description:
    "Lepton Technologies — Kenya's #1 security company. Expert CCTV installation, biometric access control, time and attendance systems (fingerprint clocking, employee attendance tracking, staff clocking machines, biometric time clock, punch clock, workforce management), burglar alarms, fire alarms, gas detectors, electric fencing, gate automation, and smart security in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret and all towns across Kenya. Trusted by schools, universities, hospitals, clinics, banks, factories, warehouses, offices, hotels, churches, mosques, malls, estates, apartments, government facilities, NGOs, embassies, airports, supermarkets, restaurants, petrol stations, parking lots, stadiums, prisons, courts, and industrial parks.",
};

const allKenyaTowns = [
  // Nairobi County
  "Nairobi", "Westlands", "Karen", "Kilimani", "Lavington", "Parklands", "Upperhill",
  "Gigiri", "Runda", "Muthaiga", "Kileleshwa", "Hurlingham", "South B", "South C",
  "Embakasi", "Kasarani", "Ruaraka", "Roysambu", "Zimmerman", "Githurai", "Kahawa",
  "Kahawa West", "Kahawa Wendani", "Donholm", "Umoja", "Buruburu", "Eastleigh",
  "Pangani", "Ngara", "Starehe", "Mathare", "Huruma", "Korogocho", "Dandora",
  "Kayole", "Komarock", "Utawala", "Mihango", "Njiru", "Ruai", "Kamulu", "Joska",
  "Malaa", "Lang'ata", "Kibera", "Dagoretti", "Kawangware", "Waithaka", "Uthiru",
  "Kabete", "Loresho", "Ridgeways", "Spring Valley", "Rosslyn", "Kitisuru",
  "Nyari", "Peponi", "Highridge", "Mountain View", "Kangemi", "Kinoo",
  // Kiambu County
  "Kiambu", "Ruiru", "Juja", "Thika", "Kikuyu", "Limuru", "Tigoni", "Ngong",
  "Rongai", "Kitengela", "Athi River", "Mlolongo", "Syokimau", "Muguga", "Ondiri",
  "Makuyu", "Maragua", "Kangema", "Gatundu", "Githunguri", "Lari", "Karuri",
  // Machakos County
  "Machakos", "Athi River", "Mlolongo", "Syokimau", "Kangundo", "Tala", "Kathiani",
  "Mwala", "Matuu", "Yatta",
  // Makueni County
  "Wote", "Kibwezi", "Mtito Andei", "Makindu", "Sultan Hamud",
  // Kajiado County
  "Ngong", "Rongai", "Kitengela", "Isinya", "Kajiado", "Namanga", "Loitokitok",
  // Mombasa County
  "Mombasa", "Nyali", "Bamburi", "Shanzu", "Mtwapa", "Tudor", "Likoni",
  "Changamwe", "Miritini", "Kisauni", "Kongowea", "Mombasa CBD",
  // Kilifi County
  "Kilifi", "Malindi", "Watamu", "Mtwapa", "Mariakani", "Mazeras", "Kaloleni",
  "Rabai", "Ganze", "Magarini",
  // Kwale County
  "Kwale", "Diani", "Ukunda", "Msambweni", "Lungalunga", "Shimba Hills",
  // Taita Taveta County
  "Voi", "Taveta", "Wundanyi", "Mwatate",
  // Lamu County
  "Lamu", "Mpeketoni", "Mokowe",
  // Tana River County
  "Hola", "Garsen", "Bura",
  // Nakuru County
  "Nakuru", "Naivasha", "Gilgil", "Molo", "Njoro", "Rongai", "Subukia",
  "Bahati", "Kuresoi", "Mau Narok",
  // Uasin Gishu County
  "Eldoret", "Turbo", "Burnt Forest", "Moiben", "Ziwa",
  // Nandi County
  "Kapsabet", "Nandi Hills", "Kobujoi",
  // Trans Nzoia County
  "Kitale", "Kiminini", "Saboti", "Endebess",
  // Bungoma County
  "Bungoma", "Webuye", "Kimilili", "Chwele", "Malakisi", "Sirisia",
  // Busia County
  "Busia", "Malaba", "Nambale", "Butula",
  // Kakamega County
  "Kakamega", "Mumias", "Butere", "Khayega", "Lugari", "Malava",
  // Vihiga County
  "Vihiga", "Mbale", "Hamisi", "Luanda",
  // Siaya County
  "Siaya", "Bondo", "Ugunja", "Yala", "Ukwala",
  // Kisumu County
  "Kisumu", "Kisumu CBD", "Kondele", "Mamboleo", "Ahero", "Awasi",
  "Muhoroni", "Chemelil", "Maseno",
  // Homa Bay County
  "Homa Bay", "Kendu Bay", "Mbita", "Ndhiwa", "Oyugis", "Rodi Kopany",
  // Migori County
  "Migori", "Rongo", "Awendo", "Isebania", "Kehancha", "Uriri",
  // Kisii County
  "Kisii", "Ogembo", "Keroka", "Nyamache", "Masimba", "Suneka",
  // Nyamira County
  "Nyamira", "Keroka", "Nyansiongo",
  // Bomet County
  "Bomet", "Sotik", "Litein", "Longisa",
  // Kericho County
  "Kericho", "Londiani", "Kipkelion", "Nhyahururu",
  // Narok County
  "Narok", "Narok Town", "Kilgoris", "Ololulunga",
  // Baringo County
  "Kabarnet", "Eldama Ravine", "Marigat", "Mogotio",
  // Laikipia County
  "Nanyuki", "Rumuruti", "Nyahururu", "Doldol",
  // Samburu County
  "Maralal", "Baragoi", "Wamba",
  // Turkana County
  "Lodwar", "Lokichar", "Kakuma", "Lokichoggio",
  // West Pokot County
  "Kapenguria", "Sigor", "Chepareria",
  // Elgeyo Marakwet County
  "Iten", "Eldoret", "Kapsowar",
  // Nyeri County
  "Nyeri", "Othaya", "Mukurweini", "Naro Moru", "Karatina",
  // Murang'a County
  "Muranga", "Kangema", "Maragua", "Makuyu", "Sagana",
  // Kirinyaga County
  "Kerugoya", "Karatina", "Sagana", "Mwea", "Kutus",
  // Embu County
  "Embu", "Runyenjes", "Siakago", "Ishiara",
  // Meru County
  "Meru", "Chuka", "Nkubu", "Maua", "Timau", "Mikinduri",
  // Tharaka Nithi County
  "Chuka", "Marimanti", "Kathwana",
  // Kitui County
  "Kitui", "Mwingi", "Mutomo", "Zombe",
  // Machakos County (additional)
  "Machakos Town", "Athi River", "Kangundo",
  // Garissa County
  "Garissa", "Dadaab", "Hulugho",
  // Wajir County
  "Wajir", "Habaswein", "Bute",
  // Mandera County
  "Mandera", "Elwak", "Rhamu",
  // Marsabit County
  "Marsabit", "Moyale", "Laisamis", "North Horr",
  // Isiolo County
  "Isiolo", "Merti", "Garbatulla",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://leptontech.co.ke/#business",
      name: "Lepton Technologies",
      alternateName: [
        "Lepton Tech Kenya",
        "Lepton Technologies Nairobi",
        "Lepton Security Systems Kenya",
      ],
      url: "https://leptontech.co.ke",
      logo: "https://leptontech.co.ke/logo.png",
      image: "https://leptontech.co.ke/og-image.jpg",
      description:
        "Kenya's leading provider of CCTV installation, biometric access control, time and attendance systems, fingerprint clocking, employee attendance tracking, staff clocking machines, burglar alarms, fire alarms, gas detectors, electric fencing, gate automation, and smart security solutions. Serving all towns across Kenya.",
      telephone: "+254700000000",
      email: "info@leptontech.co.ke",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nairobi",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi County",
        postalCode: "00100",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -1.2921,
        longitude: 36.8219,
      },
      areaServed: allKenyaTowns.map((town) => ({
        "@type": "City",
        name: town,
        containedInPlace: {
          "@type": "Country",
          name: "Kenya",
        },
      })),
      priceRange: "KSh",
      currenciesAccepted: "KES",
      paymentAccepted: "Cash, M-Pesa, Bank Transfer, Cheque",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "09:00",
          closes: "14:00",
        },
      ],
      sameAs: ["https://leptontech.co.ke"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security Systems & Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Installation", description: "Professional CCTV camera installation for homes, offices, schools, hospitals, factories and all businesses across Kenya." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biometric Access Control", description: "Fingerprint, facial recognition, RFID card and PIN access control systems." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Time and Attendance Systems", description: "Biometric time attendance, fingerprint clocking machines, staff clocking systems, employee attendance tracking and workforce management." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fingerprint Clocking Systems", description: "Fingerprint time clocks and biometric clocking machines for employee attendance." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Employee Attendance Tracking", description: "Digital attendance management, payroll integration and HR attendance systems." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burglar Alarm Systems", description: "Wireless and wired intruder alarm systems with 24/7 monitoring." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fire Alarm Systems", description: "Addressable fire alarm systems, smoke detectors, heat detectors and voice evacuation." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Leak Detection", description: "Gas leak detectors and carbon monoxide alarm systems." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electric Fencing", description: "Electric fence installation and perimeter security systems." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gate Automation", description: "Automatic sliding and swing gate motors, boom barriers and vehicle access control." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Home Security", description: "Integrated smart security systems for homes and apartments." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Intercom Systems", description: "Video door phones and intercom systems for homes and offices." } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://leptontech.co.ke/#website",
      url: "https://leptontech.co.ke",
      name: "Lepton Technologies",
      description: "Professional CCTV, Access Control, Time & Attendance, Alarm & Smart Security Systems in Kenya",
      publisher: { "@id": "https://leptontech.co.ke/#business" },
      inLanguage: "en-KE",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://leptontech.co.ke/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a time and attendance system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A time and attendance system is a biometric or card-based solution that records employee clock-in and clock-out times, tracks working hours, manages shifts, and integrates with payroll. It is also known as a staff clocking system, employee attendance machine, fingerprint time clock, biometric clocking machine, punch clock, digital attendance register, workforce management system, or HR attendance system. Lepton Technologies supplies and installs time and attendance systems across all towns in Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "How much does CCTV installation cost in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CCTV installation cost in Kenya depends on the number of cameras, camera type (HD, 4K, PTZ, dome, bullet), and location. Lepton Technologies offers affordable CCTV packages for homes, offices, schools, hospitals, factories, warehouses, hotels, malls, and all businesses across Nairobi and Kenya. Contact us for a free quote.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install CCTV cameras across all towns in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lepton Technologies installs CCTV cameras and security systems across all towns in Kenya including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, Kiambu, Ruiru, Juja, Kitengela, Athi River, Ngong, Rongai, Westlands, Karen, Kilimani, Lavington, Parklands, Upperhill, Gigiri, Runda, Muthaiga, Embakasi, Kasarani, Githurai, Kahawa, Nyali, Bamburi, Mtwapa, Kilifi, Malindi, Diani, Lamu, Voi, Kericho, Naivasha, Narok, Kitale, Kakamega, Bungoma, Busia, Kisii, Migori, Homa Bay, Siaya, Nyeri, Muranga, Nanyuki, Meru, Embu, Machakos, Kitui, Garissa, Isiolo, Marsabit, Mandera, Wajir, Lodwar, Maralal, Nyahururu, Nakuru, Bomet, Sotik, Kapsabet, Nandi Hills, Kapenguria, Webuye, Mumias, Vihiga, Rongo, Awendo, Oyugis, Ahero, Kerugoya, Karatina, Sagana, Chuka, Runyenjes, Mwingi, Kibwezi, Mtito Andei, and more.",
          },
        },
        {
          "@type": "Question",
          name: "What industries and institutions do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lepton Technologies serves schools, primary schools, secondary schools, universities, colleges, polytechnics, hospitals, clinics, pharmacies, banks, microfinance institutions, SACCOs, factories, manufacturing plants, warehouses, logistics companies, offices, corporate headquarters, hotels, lodges, resorts, churches, mosques, temples, shopping malls, supermarkets, retail shops, estates, gated communities, apartments, residential homes, government offices, county governments, NGOs, embassies, high commissions, airports, bus terminals, stadiums, sports facilities, courts, prisons, petrol stations, restaurants, bars, nightclubs, gyms, salons, car washes, parking lots, construction sites, industrial parks, EPZs, and more across Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "What access control systems do you offer in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lepton Technologies offers fingerprint access control, facial recognition access control, RFID card access control, proximity card systems, PIN keypad access control, smart locks, magnetic locks, electric strike locks, video intercom systems, turnstiles, boom barriers, speed gates, tripod turnstiles, full height turnstiles, vehicle access control, gate automation, and full biometric multi-factor access control systems across Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer fingerprint clocking machines in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lepton Technologies supplies and installs fingerprint clocking machines, biometric time attendance systems, staff clocking systems, employee attendance machines, and workforce management systems across Kenya. Our time and attendance solutions integrate with payroll systems and HR software. We serve Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and all other towns in Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "What alarm systems do you install in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lepton Technologies installs burglar alarm systems, intruder alarms, fire alarm systems, smoke detectors, heat detectors, gas leak detectors, carbon monoxide alarms, panic buttons, duress alarms, perimeter alarms, wireless alarm systems, wired alarm systems, smart home alarms, and 24/7 monitored alarm systems across Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install electric fencing in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lepton Technologies installs electric fencing, razor wire, perimeter security systems, gate automation, automatic sliding gates, swing gate motors, boom barriers, and vehicle access control systems for homes, estates, factories, warehouses, schools, hospitals, and all businesses across Kenya.",
          },
        },
        {
          "@type": "Question",
          name: "Which is the best security company in Nairobi Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lepton Technologies is one of Kenya's leading security system companies, offering professional CCTV installation, biometric access control, time and attendance systems, alarm systems, electric fencing, and gate automation. We serve clients across Nairobi and all towns in Kenya with quality products and expert installation.",
          },
        },
        {
          "@type": "Question",
          name: "How do I secure my home or business in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To secure your home or business in Kenya, you need a combination of CCTV cameras for surveillance, an alarm system for intrusion detection, access control to manage who enters, electric fencing for perimeter security, and motion sensors for early warning. Lepton Technologies provides all these solutions with professional installation and after-sales support across Kenya.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://leptontech.co.ke" },
        { "@type": "ListItem", position: 2, name: "CCTV Systems", item: "https://leptontech.co.ke/products/bullet-cameras" },
        { "@type": "ListItem", position: 3, name: "Access Control", item: "https://leptontech.co.ke/products/fingerprint-access-systems" },
        { "@type": "ListItem", position: 4, name: "Time & Attendance", item: "https://leptontech.co.ke/products/time-attendance-systems" },
        { "@type": "ListItem", position: 5, name: "Alarm Systems", item: "https://leptontech.co.ke/products/burglar-alarm-systems" },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <SectorsSection />
        <WhyUsSection />
        <ProcessSection />
        <GallerySection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
