import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#F0D060",
        "gold-dark": "#B8941E",
        charcoal: "#2F2F2F",
        "dark-gray": "#4B4B4B",
        beige: "#F8F6F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #B8941E 100%)",
        "dark-gradient": "linear-gradient(135deg, #2F2F2F 0%, #4B4B4B 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
