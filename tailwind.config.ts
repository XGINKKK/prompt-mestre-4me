import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" }
        },
        "count-up": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(0 0% 100% / 0.1)" },
          "50%": { boxShadow: "0 0 40px hsl(0 0% 100% / 0.2)" }
        },
        "gradient-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "check-bounce": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2) rotate(5deg)" }
        },
        "location-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))"
          },
          "50%": { 
            transform: "scale(1.1)",
            filter: "drop-shadow(0 4px 8px rgba(59, 130, 246, 0.5))"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "count-up": "count-up 0.8s ease-out",
        "glow": "glow 3s ease-in-out infinite",
        "gradient-flow": "gradient-flow 3s ease infinite",
        "check-bounce": "check-bounce 0.6s ease",
        "location-pulse": "location-pulse 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-engineering': 'linear-gradient(135deg, hsl(0 0% 0%), hsl(0 0% 10%))',
        'gradient-card': 'linear-gradient(135deg, hsl(0 0% 0% / 0.8), hsl(0 0% 5% / 0.9))',
        'gradient-text': 'linear-gradient(90deg, hsl(0 0% 100%), hsl(0 0% 90%))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
