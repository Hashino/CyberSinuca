/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      light: '#F1F1E6',
      dark: {
        1: '#1A1E28',
        2: '#151821',
        3: '#0E1117',
      },
      gray: {
        1: '#B7B8BF',
        2: '#656471',
        3: '#3F4046',
      },
      pink: '#FF00FF',
      yellow: '#FFFF00',
      'light-blue': '#00FFFF',
      'dark-blue': '#00091F',
      green: '#428623',
      red: '#831B1B',
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 -4px 0',
      },
    },
  },
  plugins: [],
};
