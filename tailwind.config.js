/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f2d5e',
          50:  '#e8edf5',
          100: '#c5d3e8',
          200: '#9fb6d9',
          300: '#7899ca',
          400: '#5a82bf',
          500: '#3b6bb4',
          600: '#2d5a9e',
          700: '#1e4580',
          800: '#163366',
          900: '#0f2d5e',
        },
        accent: {
          DEFAULT: '#c9a84c',
          light: '#e8cc88',
          dark:  '#a07c28',
        },
        navy: '#0f2d5e',
        gold:  '#c9a84c',
        offwhite: '#f7f7f5',
        charcoal: '#1a1a2e',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'fade-in':    'fadeIn 0.5s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
