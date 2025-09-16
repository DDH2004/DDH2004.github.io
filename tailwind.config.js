/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cb0247',
        dark: '#01031e',
        accent: '#81a9ae',
        secondary: '#126c8e',
        blackish: '#000520',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};