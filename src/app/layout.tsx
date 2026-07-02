import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StickyBar from "@/components/StickyBar";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import ExitPopup from "@/components/ExitPopup";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leptontech.co.ke"),
  title: "Lepton Technologies | CCTV, Access Control, Time & Attendance, Alarm & Smart Security Systems Nairobi Kenya",
  description:
    "Lepton Technologies — Kenya's #1 security company. Professional CCTV installation, biometric access control, time and attendance systems, fingerprint clocking machines, employee attendance tracking, staff clocking systems, burglar alarms, fire alarms, gas detectors, electric fencing, gate automation, and smart security solutions. Serving Nairobi, Mombasa, Kisumu, Nakuru, Eldoret and all towns across Kenya. Trusted by schools, universities, hospitals, banks, factories, warehouses, offices, hotels, churches, malls, estates, government, NGOs, embassies, airports and more.",
  keywords: [
    // ── CCTV ──
    "CCTV installation Nairobi", "CCTV cameras Kenya", "CCTV installation Kenya", "security cameras Nairobi",
    "CCTV company Nairobi", "CCTV installer Kenya", "best CCTV company Kenya", "CCTV shop Nairobi",
    "buy CCTV cameras Nairobi", "CCTV price Kenya", "cheap CCTV cameras Kenya", "affordable CCTV Nairobi",
    "IP cameras Kenya", "4K CCTV cameras Nairobi", "HD CCTV cameras Kenya", "1080p cameras Nairobi",
    "dome cameras Kenya", "bullet cameras Nairobi", "PTZ cameras Kenya", "pan tilt zoom cameras Nairobi",
    "wireless CCTV Kenya", "WiFi cameras Nairobi", "night vision cameras Kenya", "infrared cameras Nairobi",
    "solar CCTV cameras Kenya", "solar powered cameras Nairobi", "AI smart cameras Kenya",
    "NVR systems Kenya", "DVR systems Nairobi", "network video recorder Kenya", "CCTV recording systems Nairobi",
    "outdoor CCTV cameras Kenya", "indoor CCTV cameras Nairobi", "hidden cameras Kenya",
    "CCTV monitoring Nairobi", "remote CCTV viewing Kenya", "CCTV with phone viewing Nairobi",
    "CCTV for home Kenya", "home security cameras Nairobi", "CCTV for office Kenya",
    "CCTV for school Kenya", "CCTV for hospital Nairobi", "CCTV for warehouse Kenya",
    "CCTV for factory Nairobi", "CCTV for hotel Kenya", "CCTV for church Nairobi",
    "CCTV for mall Kenya", "CCTV for apartment Nairobi", "CCTV for estate Kenya",
    "CCTV for bank Nairobi", "CCTV for petrol station Kenya", "CCTV for supermarket Nairobi",
    "CCTV for restaurant Kenya", "CCTV for parking lot Nairobi", "CCTV for construction site Kenya",
    "how much does CCTV cost in Kenya", "CCTV installation cost Nairobi", "CCTV package Kenya",

    // ── ACCESS CONTROL ──
    "access control systems Nairobi", "access control Kenya", "door access control Nairobi",
    "biometric access control Kenya", "fingerprint access control Nairobi", "fingerprint door lock Kenya",
    "face recognition access control Nairobi", "facial recognition door lock Kenya",
    "RFID card access control Nairobi", "proximity card access Kenya", "smart card door access Nairobi",
    "smart locks Kenya", "smart door lock Nairobi", "keyless door lock Kenya",
    "magnetic locks Nairobi", "electromagnetic locks Kenya", "electric strike locks Nairobi",
    "video intercom systems Kenya", "door intercom Nairobi", "video doorbell Kenya",
    "PIN keypad access control Nairobi", "keypad door lock Kenya",
    "turnstile Kenya", "boom barrier Nairobi", "speed gate Kenya", "tripod turnstile Nairobi",
    "full height turnstile Kenya", "vehicle access control Nairobi", "gate access control Kenya",
    "visitor management system Nairobi", "access control installation Kenya",
    "access control for office Nairobi", "access control for school Kenya",
    "access control for hospital Nairobi", "access control for factory Kenya",
    "access control price Kenya", "best access control company Nairobi",

    // ── TIME & ATTENDANCE (all possible names) ──
    "time and attendance system Kenya", "time attendance Nairobi", "time attendance machine Kenya",
    "biometric time attendance Nairobi", "fingerprint time attendance Kenya",
    "fingerprint clocking machine Nairobi", "fingerprint clocking system Kenya",
    "staff clocking system Nairobi", "employee clocking machine Kenya", "clocking in machine Nairobi",
    "employee attendance system Kenya", "attendance management system Nairobi",
    "workforce management system Kenya", "HR attendance system Nairobi",
    "payroll attendance system Kenya", "payroll integration attendance Nairobi",
    "time tracking system Kenya", "employee time tracking Nairobi",
    "digital attendance register Kenya", "electronic attendance system Nairobi",
    "biometric clocking system Kenya", "biometric attendance machine Nairobi",
    "time clock system Kenya", "punch clock machine Nairobi", "punch card system Kenya",
    "staff attendance tracker Nairobi", "employee check in system Kenya",
    "leave management system Nairobi", "shift management system Kenya",
    "overtime tracking system Nairobi", "work hours tracking Kenya",
    "ZKTeco Kenya", "ZKTeco Nairobi", "Hikvision time attendance Kenya",
    "time attendance for school Kenya", "time attendance for hospital Nairobi",
    "time attendance for factory Kenya", "time attendance for office Nairobi",
    "time attendance for hotel Kenya", "time attendance for NGO Nairobi",
    "time attendance system price Kenya", "best time attendance company Nairobi",
    "time attendance installation Kenya", "time attendance supplier Nairobi",

    // ── ALARMS ──
    "alarm systems Nairobi", "alarm systems Kenya", "burglar alarm Kenya", "intruder alarm Nairobi",
    "home alarm system Kenya", "office alarm system Nairobi", "security alarm installation Kenya",
    "wireless alarm systems Nairobi", "wired alarm systems Kenya", "smart alarm system Nairobi",
    "fire alarm systems Kenya", "fire alarm installation Nairobi", "fire detection system Kenya",
    "smoke detectors Kenya", "smoke alarm Nairobi", "heat detectors Kenya",
    "gas leak detectors Nairobi", "gas alarm Kenya", "carbon monoxide detector Nairobi",
    "panic buttons Kenya", "panic alarm Nairobi", "duress alarm Kenya",
    "perimeter alarm Kenya", "outdoor alarm system Nairobi", "smart home alarm Kenya",
    "alarm monitoring Kenya", "24 hour alarm monitoring Nairobi", "alarm response Kenya",
    "alarm system price Kenya", "best alarm company Nairobi", "alarm installer Kenya",

    // ── SENSORS ──
    "motion sensors Kenya", "PIR sensors Nairobi", "motion detector Kenya",
    "door sensors Kenya", "window sensors Nairobi", "magnetic contact sensors Kenya",
    "glass break sensors Nairobi", "vibration sensors Kenya", "perimeter sensors Nairobi",
    "infrared beam sensors Kenya", "outdoor sensors Nairobi", "smart sensors Kenya",
    "flood sensors Kenya", "water leak detector Nairobi", "temperature sensors Kenya",

    // ── ELECTRIC FENCING & PERIMETER ──
    "electric fence Kenya", "electric fencing Nairobi", "electric fence installation Kenya",
    "electric fence company Nairobi", "perimeter security Kenya", "razor wire Kenya",
    "razor wire installation Nairobi", "perimeter wall security Kenya",
    "gate automation Kenya", "automatic gate Nairobi", "sliding gate motor Kenya",
    "swing gate motor Nairobi", "gate opener Kenya", "automated gate installation Nairobi",

    // ── INDUSTRIES & INSTITUTIONS ──
    "school security systems Kenya", "school CCTV Nairobi", "school access control Kenya",
    "university security Kenya", "college security systems Nairobi",
    "hospital security systems Kenya", "hospital CCTV Nairobi", "clinic security Kenya",
    "bank security systems Kenya", "bank CCTV Nairobi", "ATM security Kenya",
    "factory security Kenya", "manufacturing plant security Nairobi", "industrial security Kenya",
    "warehouse security Kenya", "warehouse CCTV Nairobi", "logistics security Kenya",
    "office security systems Kenya", "corporate security Nairobi", "office CCTV Kenya",
    "hotel security systems Kenya", "hotel CCTV Nairobi", "hospitality security Kenya",
    "church security systems Kenya", "mosque security Nairobi", "place of worship security Kenya",
    "mall security systems Kenya", "shopping centre security Nairobi", "retail security Kenya",
    "supermarket security Kenya", "supermarket CCTV Nairobi",
    "estate security systems Kenya", "gated community security Nairobi", "apartment security Kenya",
    "residential security Kenya", "home security Nairobi", "house security systems Kenya",
    "government security systems Kenya", "government office security Nairobi",
    "NGO security systems Kenya", "embassy security Nairobi", "diplomatic security Kenya",
    "airport security Kenya", "transport hub security Nairobi",
    "stadium security Kenya", "event security systems Nairobi",
    "court security Kenya", "prison security systems Nairobi",
    "petrol station security Kenya", "fuel station CCTV Nairobi",
    "restaurant security Kenya", "bar security systems Nairobi",
    "parking lot security Kenya", "car park CCTV Nairobi",
    "construction site security Kenya", "site security Nairobi",
    "industrial park security Kenya", "EPZ security Kenya",
    "pharmacy security Kenya", "chemist CCTV Nairobi",
    "gym security systems Kenya", "fitness centre CCTV Nairobi",
    "salon security Kenya", "shop security systems Nairobi",
    "market security Kenya", "open air market CCTV Nairobi",

    // ── QUESTION-BASED SEARCHES ──
    "how to install CCTV in Kenya", "where to buy CCTV cameras in Nairobi",
    "best CCTV brand in Kenya", "which CCTV is best for home Kenya",
    "how much is CCTV installation in Kenya", "CCTV installation cost in Nairobi",
    "how does biometric attendance work", "best time attendance machine in Kenya",
    "how to set up access control in Kenya", "which access control is best Kenya",
    "how to secure my home in Kenya", "best home security system Kenya",
    "how to prevent burglary in Kenya", "best burglar alarm Kenya",
    "fire alarm installation cost Kenya", "how to install fire alarm Kenya",
    "best security company in Nairobi", "top security companies Kenya",
    "security system installation near me Kenya", "CCTV repair Nairobi",
    "CCTV maintenance Kenya", "access control repair Nairobi",
    "alarm system repair Kenya", "security system service Nairobi",

    // ── GEO: NAIROBI SUBURBS ──
    "CCTV Westlands", "security systems Westlands", "access control Westlands",
    "CCTV Karen", "security systems Karen", "home security Karen Nairobi",
    "CCTV Kilimani", "security systems Kilimani", "CCTV Lavington",
    "CCTV Parklands", "security systems Parklands", "CCTV Upperhill",
    "CCTV Gigiri", "security systems Gigiri", "CCTV Runda",
    "CCTV Muthaiga", "security systems Muthaiga", "CCTV Kileleshwa",
    "CCTV Hurlingham", "CCTV South B", "CCTV South C",
    "CCTV Embakasi", "CCTV Kasarani", "CCTV Ruaraka",
    "CCTV Roysambu", "CCTV Zimmerman", "CCTV Githurai",
    "CCTV Kahawa", "CCTV Kahawa West", "CCTV Kahawa Wendani",
    "CCTV Ruiru", "security systems Ruiru", "CCTV Juja",
    "CCTV Thika", "security systems Thika", "time attendance Thika",
    "CCTV Kiambu", "security systems Kiambu", "CCTV Kikuyu",
    "CCTV Limuru", "CCTV Tigoni", "CCTV Ngong",
    "CCTV Rongai", "security systems Rongai", "CCTV Kitengela",
    "security systems Kitengela", "CCTV Athi River", "CCTV Mlolongo",
    "CCTV Syokimau", "CCTV Donholm", "CCTV Umoja",
    "CCTV Buruburu", "CCTV Eastleigh", "CCTV Pangani",
    "CCTV Ngara", "CCTV Starehe", "CCTV Mathare",
    "CCTV Huruma", "CCTV Korogocho", "CCTV Dandora",
    "CCTV Kayole", "CCTV Komarock", "CCTV Utawala",
    "CCTV Mihango", "CCTV Njiru", "CCTV Ruai",
    "CCTV Kamulu", "CCTV Joska", "CCTV Malaa",
    "CCTV Lang'ata", "CCTV Kibera", "CCTV Dagoretti",
    "CCTV Kawangware", "CCTV Waithaka", "CCTV Uthiru",
    "CCTV Kabete", "CCTV Loresho", "CCTV Ridgeways",
    "CCTV Spring Valley", "CCTV Rosslyn", "CCTV Kitisuru",
    "CCTV Nyari", "CCTV Peponi", "CCTV Highridge",
    "CCTV Highpoint", "CCTV Mountain View", "CCTV Kangemi",
    "CCTV Kinoo", "CCTV Muguga", "CCTV Ondiri",

    // ── GEO: COAST ──
    "CCTV Mombasa", "security systems Mombasa", "time attendance Mombasa",
    "access control Mombasa", "alarm systems Mombasa",
    "CCTV Nyali", "security systems Nyali", "CCTV Bamburi",
    "CCTV Shanzu", "CCTV Mtwapa", "security systems Mtwapa",
    "CCTV Kilifi", "security systems Kilifi", "CCTV Malindi",
    "security systems Malindi", "CCTV Watamu", "CCTV Lamu",
    "CCTV Diani", "security systems Diani", "CCTV Ukunda",
    "CCTV Kwale", "CCTV Voi", "CCTV Taveta",
    "CCTV Mariakani", "CCTV Mazeras", "CCTV Mombasa CBD",
    "CCTV Tudor", "CCTV Likoni", "CCTV Changamwe",
    "CCTV Miritini", "CCTV Kisauni", "CCTV Kongowea",

    // ── GEO: RIFT VALLEY ──
    "CCTV Nakuru", "security systems Nakuru", "time attendance Nakuru",
    "access control Nakuru", "alarm systems Nakuru",
    "CCTV Eldoret", "security systems Eldoret", "time attendance Eldoret",
    "access control Eldoret", "CCTV Kericho",
    "security systems Kericho", "CCTV Bomet", "CCTV Naivasha",
    "security systems Naivasha", "CCTV Narok",
    "CCTV Kapenguria", "CCTV Kitale", "security systems Kitale",
    "CCTV Webuye", "CCTV Bungoma", "security systems Bungoma",
    "CCTV Busia", "CCTV Mumias", "CCTV Kakamega",
    "security systems Kakamega", "CCTV Vihiga", "CCTV Siaya",
    "CCTV Sotik", "CCTV Litein", "CCTV Londiani",
    "CCTV Molo", "CCTV Njoro", "CCTV Gilgil",
    "CCTV Naivasha", "CCTV Nyahururu", "CCTV Rumuruti",
    "CCTV Maralal", "CCTV Lodwar", "CCTV Lokichar",

    // ── GEO: NYANZA & WESTERN ──
    "CCTV Kisumu", "security systems Kisumu", "time attendance Kisumu",
    "access control Kisumu", "alarm systems Kisumu",
    "CCTV Kisii", "security systems Kisii", "CCTV Migori",
    "CCTV Homa Bay", "security systems Homa Bay", "CCTV Siaya",
    "CCTV Rongo", "CCTV Awendo", "CCTV Oyugis",
    "CCTV Ahero", "CCTV Awasi", "CCTV Kondele",
    "CCTV Nyamira", "CCTV Keroka", "CCTV Ogembo",
    "CCTV Mbita", "CCTV Kendu Bay", "CCTV Ndhiwa",

    // ── GEO: CENTRAL ──
    "CCTV Nyeri", "security systems Nyeri", "time attendance Nyeri",
    "CCTV Muranga", "security systems Muranga", "CCTV Kerugoya",
    "CCTV Karatina", "CCTV Sagana", "CCTV Nanyuki",
    "security systems Nanyuki", "CCTV Meru", "security systems Meru",
    "time attendance Meru", "CCTV Chuka", "CCTV Embu",
    "security systems Embu", "CCTV Runyenjes", "CCTV Mwea",
    "CCTV Kangema", "CCTV Maragua", "CCTV Makuyu",
    "CCTV Othaya", "CCTV Mukurweini", "CCTV Naro Moru",

    // ── GEO: EASTERN ──
    "CCTV Machakos", "security systems Machakos", "time attendance Machakos",
    "CCTV Wote", "CCTV Kitui", "security systems Kitui",
    "CCTV Mwingi", "CCTV Garissa", "security systems Garissa",
    "CCTV Isiolo", "CCTV Marsabit", "CCTV Moyale",
    "CCTV Mandera", "CCTV Wajir", "CCTV Malindi",
    "CCTV Makueni", "CCTV Kibwezi", "CCTV Mtito Andei",
    "CCTV Kangundo", "CCTV Tala", "CCTV Kathiani",

    // ── GEO: TIME & ATTENDANCE BY TOWN ──
    "time attendance system Nairobi", "time attendance system Mombasa",
    "time attendance system Kisumu", "time attendance system Nakuru",
    "time attendance system Eldoret", "time attendance system Thika",
    "time attendance system Meru", "time attendance system Nyeri",
    "time attendance system Embu", "time attendance system Machakos",
    "time attendance system Kericho", "time attendance system Kakamega",
    "time attendance system Kisii", "time attendance system Garissa",
    "time attendance system Kitale", "time attendance system Bungoma",
    "fingerprint clocking machine Nairobi", "fingerprint clocking machine Mombasa",
    "fingerprint clocking machine Kisumu", "fingerprint clocking machine Nakuru",
    "biometric attendance Nairobi", "biometric attendance Mombasa",
    "biometric attendance Kisumu", "biometric attendance Eldoret",
    "staff clocking system Nairobi", "staff clocking system Mombasa",

    // ── GEO: ACCESS CONTROL BY TOWN ──
    // Nairobi & suburbs
    "access control Nairobi", "biometric access control Nairobi", "fingerprint door lock Nairobi",
    "access control Westlands", "access control Karen", "access control Kilimani",
    "access control Lavington", "access control Parklands", "access control Upperhill",
    "access control Gigiri", "access control Runda", "access control Muthaiga",
    "access control Kileleshwa", "access control Hurlingham", "access control Embakasi",
    "access control Kasarani", "access control Roysambu", "access control Githurai",
    "access control Kahawa", "access control Donholm", "access control Buruburu",
    "access control Eastleigh", "access control Lang'ata", "access control Kawangware",
    "access control Kabete", "access control Kangemi", "access control Ruiru",
    "access control Juja", "access control Thika", "access control Kiambu",
    "access control Kikuyu", "access control Limuru", "access control Ngong",
    "access control Rongai", "access control Kitengela", "access control Athi River",
    "access control Mlolongo", "access control Syokimau",
    // Coast
    "access control Mombasa", "biometric access control Mombasa", "fingerprint door lock Mombasa",
    "access control Nyali", "access control Bamburi", "access control Mtwapa",
    "access control Kilifi", "access control Malindi", "access control Diani",
    "access control Lamu", "access control Voi", "access control Kwale",
    // Rift Valley
    "access control Nakuru", "biometric access control Nakuru", "fingerprint access control Nakuru",
    "access control Eldoret", "biometric access control Eldoret", "fingerprint access control Eldoret",
    "access control Kericho", "access control Naivasha", "access control Narok",
    "access control Kitale", "access control Kakamega", "access control Bungoma",
    "access control Busia", "access control Webuye", "access control Mumias",
    "access control Vihiga", "access control Gilgil", "access control Nyahururu",
    "access control Maralal", "access control Lodwar", "access control Kapenguria",
    // Nyanza & Western
    "access control Kisumu", "biometric access control Kisumu", "fingerprint access control Kisumu",
    "access control Kisii", "access control Migori", "access control Homa Bay",
    "access control Siaya", "access control Rongo", "access control Nyamira",
    "access control Bomet", "access control Sotik", "access control Kapsabet",
    // Central
    "access control Nyeri", "access control Muranga", "access control Nanyuki",
    "access control Meru", "access control Embu", "access control Kerugoya",
    "access control Karatina", "access control Chuka", "access control Runyenjes",
    // Eastern
    "access control Machakos", "access control Kitui", "access control Mwingi",
    "access control Garissa", "access control Isiolo", "access control Marsabit",
    "access control Mandera", "access control Wajir",
    // Fingerprint access control by town
    "fingerprint access control Nairobi", "fingerprint access control Mombasa",
    "fingerprint access control Thika", "fingerprint access control Kisii",
    "fingerprint access control Meru", "fingerprint access control Nyeri",
    "fingerprint access control Kericho", "fingerprint access control Kakamega",
    "fingerprint access control Kitale", "fingerprint access control Machakos",
    "fingerprint access control Embu", "fingerprint access control Nanyuki",
    "fingerprint access control Garissa", "fingerprint access control Isiolo",
    // Face recognition by town
    "face recognition access control Nairobi", "face recognition access control Mombasa",
    "face recognition access control Kisumu", "face recognition access control Nakuru",
    "face recognition access control Eldoret", "face recognition access control Thika",
    // Smart locks by town
    "smart locks Nairobi", "smart locks Mombasa", "smart locks Kisumu",
    "smart locks Nakuru", "smart locks Eldoret", "smart locks Thika",
    "smart door lock Nairobi", "smart door lock Mombasa", "keyless door lock Kenya",
    // Time attendance by town (expanded)
    "time attendance Nairobi", "time attendance Mombasa", "time attendance Kisumu",
    "time attendance Nakuru", "time attendance Eldoret", "time attendance Thika",
    "time attendance Kiambu", "time attendance Ruiru", "time attendance Juja",
    "time attendance Kitengela", "time attendance Athi River", "time attendance Ngong",
    "time attendance Rongai", "time attendance Westlands", "time attendance Karen",
    "time attendance Kilimani", "time attendance Embakasi", "time attendance Kasarani",
    "time attendance Nyali", "time attendance Bamburi", "time attendance Mtwapa",
    "time attendance Kilifi", "time attendance Malindi", "time attendance Diani",
    "time attendance Kericho", "time attendance Naivasha", "time attendance Narok",
    "time attendance Kitale", "time attendance Kakamega", "time attendance Bungoma",
    "time attendance Busia", "time attendance Kisii", "time attendance Migori",
    "time attendance Homa Bay", "time attendance Siaya", "time attendance Nyeri",
    "time attendance Muranga", "time attendance Nanyuki", "time attendance Meru",
    "time attendance Embu", "time attendance Machakos", "time attendance Kitui",
    "time attendance Garissa", "time attendance Isiolo", "time attendance Nyamira",
    "time attendance Bomet", "time attendance Sotik", "time attendance Kapsabet",
    "time attendance Nyahururu", "time attendance Rumuruti", "time attendance Maralal",

    // ── GEO: ALARM BY TOWN ──
    // Nairobi & suburbs
    "alarm systems Nairobi", "burglar alarm Nairobi", "fire alarm Nairobi", "intruder alarm Nairobi",
    "alarm systems Westlands", "alarm systems Karen", "alarm systems Kilimani", "alarm systems Lavington",
    "alarm systems Parklands", "alarm systems Runda", "alarm systems Muthaiga", "alarm systems Gigiri",
    "alarm systems Kileleshwa", "alarm systems Hurlingham", "alarm systems Upperhill",
    "alarm systems Embakasi", "alarm systems Kasarani", "alarm systems Roysambu",
    "alarm systems Githurai", "alarm systems Kahawa", "alarm systems Donholm",
    "alarm systems Buruburu", "alarm systems Eastleigh", "alarm systems Lang'ata",
    "alarm systems Kawangware", "alarm systems Kabete", "alarm systems Kangemi",
    "alarm systems Ruiru", "alarm systems Juja", "alarm systems Thika",
    "alarm systems Kiambu", "alarm systems Kikuyu", "alarm systems Limuru",
    "alarm systems Ngong", "alarm systems Rongai", "alarm systems Kitengela",
    "alarm systems Athi River", "alarm systems Mlolongo", "alarm systems Syokimau",
    // Coast
    "alarm systems Mombasa", "burglar alarm Mombasa", "fire alarm Mombasa",
    "alarm systems Nyali", "alarm systems Bamburi", "alarm systems Mtwapa",
    "alarm systems Kilifi", "alarm systems Malindi", "alarm systems Diani",
    "alarm systems Lamu", "alarm systems Voi", "alarm systems Kwale",
    // Rift Valley
    "alarm systems Nakuru", "burglar alarm Nakuru", "fire alarm Nakuru",
    "alarm systems Eldoret", "burglar alarm Eldoret", "fire alarm Eldoret",
    "alarm systems Kericho", "alarm systems Naivasha", "alarm systems Narok",
    "alarm systems Kitale", "alarm systems Kakamega", "alarm systems Bungoma",
    "alarm systems Busia", "alarm systems Webuye", "alarm systems Mumias",
    "alarm systems Vihiga", "alarm systems Gilgil", "alarm systems Molo",
    "alarm systems Nyahururu", "alarm systems Rumuruti", "alarm systems Maralal",
    "alarm systems Lodwar", "alarm systems Kapenguria",
    // Nyanza & Western
    "alarm systems Kisumu", "burglar alarm Kisumu", "fire alarm Kisumu",
    "alarm systems Kisii", "alarm systems Migori", "alarm systems Homa Bay",
    "alarm systems Siaya", "alarm systems Rongo", "alarm systems Awendo",
    "alarm systems Oyugis", "alarm systems Nyamira", "alarm systems Bomet",
    "alarm systems Sotik", "alarm systems Kapsabet",
    // Central
    "alarm systems Nyeri", "alarm systems Muranga", "alarm systems Nanyuki",
    "alarm systems Meru", "alarm systems Embu", "alarm systems Kerugoya",
    "alarm systems Karatina", "alarm systems Chuka", "alarm systems Runyenjes",
    // Eastern
    "alarm systems Machakos", "alarm systems Kitui", "alarm systems Mwingi",
    "alarm systems Garissa", "alarm systems Isiolo", "alarm systems Marsabit",
    "alarm systems Mandera", "alarm systems Wajir",
    // Burglar alarm by town
    "burglar alarm Thika", "burglar alarm Nakuru", "burglar alarm Eldoret",
    "burglar alarm Kisii", "burglar alarm Meru", "burglar alarm Nyeri",
    "burglar alarm Kericho", "burglar alarm Kakamega", "burglar alarm Kitale",
    "burglar alarm Machakos", "burglar alarm Embu", "burglar alarm Nanyuki",
    // Fire alarm by town
    "fire alarm Thika", "fire alarm Kisii", "fire alarm Meru",
    "fire alarm Nyeri", "fire alarm Kericho", "fire alarm Kakamega",
    "fire alarm Kitale", "fire alarm Machakos", "fire alarm Embu",
    "fire alarm Nanyuki", "fire alarm Garissa", "fire alarm Isiolo",

    // ── BRAND & GENERAL ──
    "Lepton Technologies", "Lepton Technologies Kenya", "Lepton Technologies Nairobi",
    "leptontech.co.ke", "security company Nairobi", "best security company Kenya",
    "top security companies Nairobi", "security solutions Kenya",
    "integrated security systems Kenya", "smart security Kenya",
    "professional security installation Nairobi", "security system supplier Kenya",
    "security equipment Kenya", "security products Nairobi",
    "Hikvision Kenya", "Dahua Kenya", "ZKTeco Kenya", "Hikvision installer Nairobi",
    "Dahua installer Kenya", "ZKTeco installer Nairobi",
  ].join(", "),
  authors: [{ name: "Lepton Technologies", url: "https://leptontech.co.ke" }],
  creator: "Lepton Technologies",
  publisher: "Lepton Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://leptontech.co.ke",
  },
  openGraph: {
    title: "Lepton Technologies | CCTV, Access Control, Time & Attendance, Alarm & Smart Security Systems Kenya",
    description:
      "Kenya's #1 security company. Professional CCTV installation, biometric access control, time & attendance systems, fingerprint clocking, burglar & fire alarms across Nairobi, Mombasa, Kisumu, Nakuru, Eldoret and all Kenya towns. Serving schools, hospitals, banks, factories, offices, hotels, malls, estates & more.",
    url: "https://leptontech.co.ke",
    siteName: "Lepton Technologies",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "https://leptontech.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lepton Technologies - Security Systems Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lepton Technologies | CCTV, Access Control, Time & Attendance & Alarm Systems Kenya",
    description:
      "Professional CCTV, biometric access control, time & attendance, and alarm systems across all towns in Kenya.",
    images: ["https://leptontech.co.ke/og-image.jpg"],
  },
  verification: {
    google: "G-31G7E0FXBL",
  },
  category: "Security Systems",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} overflow-x-hidden`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-31G7E0FXBL" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-31G7E0FXBL');
          `}
        </Script>
      </head>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        {children}

        <StickyBar />
        <FloatingButtons />
        <ExitPopup />
      </body>
    </html>
  );
}
