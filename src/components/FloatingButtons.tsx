"use client";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-8 z-50 hidden lg:flex flex-col gap-3">
      <a
        href={getWhatsAppUrl("Hello Lepton Technologies, I would like information about your security solutions.")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 hover:-translate-y-1"
        style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", boxShadow: "0 8px 32px rgba(37,211,102,0.3)" }}
        title="WhatsApp"
      >
        <MessageCircle className="text-white" size={22} />
      </a>
      <a
        href={getCallUrl()}
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110 hover:-translate-y-1"
        style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)", boxShadow: "0 8px 32px rgba(212,175,55,0.3)" }}
        title="Call Now"
      >
        <Phone className="text-[#0a0a0a]" size={22} />
      </a>
    </div>
  );
}
