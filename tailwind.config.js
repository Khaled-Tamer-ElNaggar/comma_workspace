module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Teal for CTA power + facility highlights
        primary: {
          DEFAULT: "#00CED1", // teal-400
          50: "#F0FDFF", // teal-50
          100: "#CCFBF1", // teal-100
          200: "#99F6E4", // teal-200
          300: "#5EEAD4", // teal-300
          400: "#2DD4BF", // teal-400
          500: "#14B8A6", // teal-500
          600: "#0D9488", // teal-600
          700: "#0F766E", // teal-700
          800: "#115E59", // teal-800
          900: "#134E4A", // teal-900
        },
        // Secondary Colors - Professional headings + navigation
        secondary: {
          DEFAULT: "#2C3E50", // slate-800
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
        // Accent Colors - Urgency elements + limited availability
        accent: {
          DEFAULT: "#FF6B6B", // red-400
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Background and Surface Colors
        background: "#F5F5F5", // gray-100 - Clean neutral canvas
        surface: "#FFFFFF", // white - Card backgrounds + form fields
        // Text Colors
        "text-primary": "#2C3E50", // slate-800 - High contrast scanning
        "text-secondary": "#6C757D", // gray-500 - Supporting details
        // Status Colors
        success: {
          DEFAULT: "#28A745", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#16A34A", // green-600
        },
        warning: {
          DEFAULT: "#FFC107", // yellow-400
          50: "#FEFCE8", // yellow-50
          100: "#FEF3C7", // yellow-100
          400: "#FACC15", // yellow-400
          500: "#EAB308", // yellow-500
        },
        error: {
          DEFAULT: "#DC3545", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        border: "#E5E7EB", // gray-200
        "border-light": "#F3F4F6", // gray-100
      },
      fontFamily: {
        // Headlines - Modern clarity for instant value communication
        inter: ['Inter', 'sans-serif'],
        // Body - Effortless reading for benefit descriptions
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        // Accents - Testimonial emphasis and premium positioning
        playfair: ['Playfair Display', 'serif'],
      },
      fontSize: {
        // Optimized for scanning and conversion
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'cta': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      boxShadow: {
        // Conversion-focused restraint - CTA buttons and facility cards only
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'facility': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'facility-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '250': '250ms', // Specific duration for CTA hover states and form submissions
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}