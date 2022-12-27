/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1440px',
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'transparent': 'transparent',
      'offwhite': {
        'DEFAULT': 'hsl(0 0% 98%)',
      },
      'offblack': {
        'DEFAULT': 'hsl(0 0% 8%)',
      },
      'gray': {
        'DEFAULT': 'hsl(0 0% 41%)',
      },
    },
    fontFamily: {
      'body': ['Epilogue', 'sans-serif'],
    },
    fontWeight: {
      '500': 500,
      '700': 700,
    },
    boxShadow: {
      'lg': '0 25px 50px 0px rgba(0, 0, 0, 0.25)'
    },
    extend: {
      fontSize: {
        'base': '1.125rem',
      },
    },
  },
  plugins: [],
};
