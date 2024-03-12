/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.{js,ts,tsx}',
    './src/**/**/*.{js,ts,tsx}',
    './src/**/**/components/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#003A9B',
        secondary: '#001C40',
        text: '#272829',
        'text-light': '#61677A',
        'text-dark': '#000000',
        safe: 'emerald-500',
        'safe-light': 'emerald-100',
        'safe-dark': 'emerald-700',
        danger: 'rose-500',
        'danger-light': 'rose-100',
        'danger-dark': 'rose-700',
        warning: 'amber-500',
        'warning-light': 'amber-100',
        'warning-dark': 'amber-700',
        info: 'sky-500',
        'info-light': 'sky-100',
        'info-dark': 'sky-700',
      },
    },
  },
  plugins: [],
};
