"use client";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden px-4 py-3 flex gap-3" style={{ background: "rgba(6,6,6,0.95)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(212,175,55,0.12)" }}>
      <a
        href={getCallUrl()}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-gold/35 text-[#D4AF37] font-semibold text-sm transition-all active:scale-95"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href={getWhatsAppUrl("Hello Lepton Technologies, I would like information about your security solutions.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-[#0a0a0a] font-semibold text-sm transition-all active:scale-95"
        style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
}
