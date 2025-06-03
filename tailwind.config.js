/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'monospace'],
        playWrite: ['Playwright', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
      },
    },
    colors: {
      gray: '#D2D2D4',
      blue1: ' #000080',
      blue2: '#4169E1',
      blue3: '#1E90FF',
      blue4: '#6495ED',
      blue5: '#87CEEB',
      blue6: '#B0E0E6',
      blue7: '#4682B4',
      blue8: '#008080',
      blue9: ' #40E0D0',
      blue: '#B0C4DE',
    },
  },
  plugins: [],
};
