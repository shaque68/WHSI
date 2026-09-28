/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        brand: {
          50: '#f1f6f2',
          500: '#145342',
          700: '#103f34',
          900: '#0b2c25',
        },
        accent: '#e5b65c',
      },
      boxShadow: {
        soft: '0 12px 32px rgba(22, 49, 40, 0.06)',
      },
    },
  },
  plugins: [],
};
