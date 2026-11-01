/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'], serif: ['P22 Mackinac W01 Book', 'Georgia', 'serif'] },
      colors: { ink: '#191919', surface: '#F4F3F3' }
    }
  },
  plugins: []
};
