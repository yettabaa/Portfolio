/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        updown: 'updown 2s infinite ease-in-out',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
      },
      colors: {
        bg: '#020307',
        _green: '#01D5A2',
        footer: '#000B08',
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

