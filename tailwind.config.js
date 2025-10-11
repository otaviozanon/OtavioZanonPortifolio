/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#f1f1f2',
          100: '#d6d6d8',
          200: '#a9a9ad',
          300: '#7c7c82',
          400: '#4f4f56',
          500: '#22222a',
          600: '#1a1a20',
          700: '#131318',
          800: '#0b0b0d',
          900: '#050506',
        },
        amber: {
          50: '#fff9eb',
          100: '#fff1c7',
          200: '#ffe999',
          300: '#ffd866',
          400: '#ffbf24',
          500: '#e6a00b',
          600: '#b37d08',
          700: '#805905',
          800: '#4d3503',
          900: '#291f02',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
