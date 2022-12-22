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
    extend: {
      fontSize: {
        'base': '1.125rem',
      },
    },
  },
  plugins: [],
};
