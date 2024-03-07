/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.{js,ts,tsx}',
    './src/screens/**/*.{js,ts,tsx}',
    './src/auth/**/*.{js,ts,tsx}',
    './src/components/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
