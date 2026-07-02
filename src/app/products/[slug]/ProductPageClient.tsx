"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone, Check, Shield, Zap, Eye } from "lucide-react";
import Link from "next/link";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";
import { PRODUCT_DATA } from "@/lib/productData";
import { useState, useRef, useEffect } from "react";

function ProductGallery({ images, productName }: { images: string[]; productName: string }) {
  const [activeImage, setActiveImage] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const resumeTimeout = useRef<number | null>(null);

  const scrollToImage = (index: number) => {
    setActiveImage(index);
    if (mainRef.current) {
      const child = mainRef.current.children[index] as HTMLElement | undefined;
      if (child) child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    if (thumbRef.current) {
      const t = thumbRef.current.children[index] as HTMLElement | undefined;
      if (t) t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        const center = el.scrollLeft + el.clientWidth / 2;
        let bestIndex = 0;
        let bestDist = Infinity;
        children.forEach((c, i) => {
          const mid = c.offsetLeft + c.clientWidth / 2;
          const dist = Math.abs(mid - center);
          if (dist < bestDist) { bestDist = dist; bestIndex = i; }
        });
        setActiveImage(bestIndex);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      if (isPaused.current) return;
      scrollToImage((activeImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [activeImage, images]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
      >
        <div
          ref={mainRef}
          onPointerDown={() => { isPaused.current = true; if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current); }}
          onPointerUp={() => { if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current); resumeTimeout.current = window.setTimeout(() => { isPaused.current = false; }, 2500) as unknown as number; }}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { if (resumeTimeout.current) window.clearTimeout(resumeTimeout.current); resumeTimeout.current = window.setTimeout(() => { isPaused.current = false; }, 1500) as unknown as number; }}
          className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" as never }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="relative snap-center flex-shrink-0 w-full aspect-square" style={{ minWidth: "100%" }}>
              <motion.div
                animate={{ scale: activeImage === idx ? 1 : 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image src={img} alt={`${productName} - Image ${idx + 1}`} fill className="object-cover transition-transform duration-500" quality={95} sizes="(max-width: 1024px) 100vw, 50vw" />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="absolute top-4 right-4 glass-gold px-3 py-1 rounded-full text-xs font-semibold text-[#D4AF37]">
          {activeImage + 1} / {images.length}
        </div>
      </motion.div>

      <div className="relative">
        <div ref={thumbRef} className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === index ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/30" : "border-white/20 hover:border-white/40"}`}
            >
              <Image src={img} alt={`${productName} thumbnail ${index + 1}`} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductPageClient({ slug }: { slug: string }) {
  const productData = PRODUCT_DATA[slug as keyof typeof PRODUCT_DATA];

  if (!productData) {
    const productName = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return (
      <div className="min-h-screen bg-[#0a0a0a] pt-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center py-16">
          <Link href="/#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="w-20 h-20 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-8">
              <Shield size={40} className="text-[#D4AF37]" />
            </div>
            <h1 className="font-display font-bold text-white text-4xl lg:text-5xl mb-4">{productName}</h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-8">
              Professional security solution designed for maximum protection and reliability. Get detailed information and pricing from our security experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <a href={getWhatsAppUrl(`Hello Lepton Technologies! I'm interested in ${productName}. Can you provide detailed information, pricing, and schedule a consultation?`)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-105 bg-gradient-to-r from-[#D4AF37] to-[#F5E070]">
                <MessageCircle size={18} /> Get Info on WhatsApp
              </a>
              <a href={getCallUrl()} className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-all">
                <Phone size={18} /> Call Expert
              </a>
            </div>
            <p className="text-white/50 text-sm mt-8">Our security consultants will provide detailed specifications, installation requirements, and custom pricing for your needs.</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
          <Link href="/#services" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <ProductGallery images={productData.gallery} productName={productData.name} />

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8 lg:sticky lg:top-24">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold glass-gold" style={{ color: productData.accentColor }}>
              {productData.category}
            </div>
            <div>
              <h1 className="font-display font-bold text-white leading-tight mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                {productData.name}
              </h1>
              <p className="text-lg font-medium italic" style={{ color: productData.accentColor }}>{productData.tagline}</p>
            </div>
            <p className="text-white/80 text-lg leading-relaxed">{productData.description}</p>

            <div className="space-y-3">
              <h3 className="text-white font-bold text-lg mb-4">Key Features</h3>
              <div className="grid gap-2">
                {productData.keyFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check size={16} style={{ color: productData.accentColor }} className="mt-1 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
                {productData.keyFeatures.length > 4 && (
                  <p className="text-white/50 text-sm italic mt-2">+ {productData.keyFeatures.length - 4} more features below</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <a href={getWhatsAppUrl(`Hello Lepton Technologies, I want to get a quote for ${productData.name}. Please provide pricing and installation details.`)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-105 flex-1 justify-center" style={{ background: `linear-gradient(135deg, ${productData.accentColor}, #F5E070)` }}>
                  <MessageCircle size={18} /> Get Quote on WhatsApp
                </a>
              </div>
              <div className="flex gap-4">
                <a href={getCallUrl()} className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-all flex-1 justify-center">
                  <Phone size={16} /> Call Expert
                </a>
                <a href={getWhatsAppUrl(`Hello, I need technical consultation for ${productData.name}. Can you help me choose the right setup?`)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-all flex-1 justify-center">
                  <Eye size={16} /> Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${productData.accentColor}20` }}>
                <Zap size={20} style={{ color: productData.accentColor }} />
              </div>
              <h2 className="text-white font-bold text-xl">How It Works</h2>
            </div>
            <div className="space-y-4">
              {productData.howItWorks.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#0a0a0a] flex-shrink-0 mt-0.5" style={{ background: productData.accentColor }}>{index + 1}</div>
                  <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${productData.accentColor}20` }}>
                <Shield size={20} style={{ color: productData.accentColor }} />
              </div>
              <h2 className="text-white font-bold text-xl">Complete Features</h2>
            </div>
            <div className="space-y-3">
              {productData.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={16} style={{ color: productData.accentColor }} className="mt-1 flex-shrink-0" />
                  <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${productData.accentColor}20` }}>
                <Eye size={20} style={{ color: productData.accentColor }} />
              </div>
              <h2 className="text-white font-bold text-xl">Best Applications</h2>
            </div>
            <div className="space-y-3">
              {productData.applications.map((application, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: productData.accentColor }} />
                  <span className="text-white/70 text-sm leading-relaxed">{application}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-16 border-t border-white/10">
          <h2 className="text-white font-bold text-2xl lg:text-3xl mb-4">Ready to Secure Your Property?</h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for {productData.name}. Our experts will help you choose the perfect security solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href={getWhatsAppUrl(`Hello Lepton Technologies! I'm interested in ${productData.name}. Can you provide a detailed quote and schedule a site visit?`)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-105" style={{ background: `linear-gradient(135deg, ${productData.accentColor}, #F5E070)` }}>
              <MessageCircle size={18} /> Get Free Quote
            </a>
            <a href={getCallUrl()} className="flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white border border-white/20 hover:border-white/50 transition-all">
              <Phone size={18} /> Call Now
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
