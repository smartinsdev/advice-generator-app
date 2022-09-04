/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-cyan': 'hsl(193, 38%, 86%)',
      'neon-green': 'hsl(150, 100%, 66%)',
      'grayish': 'hsl(217, 19%, 38%)',
      'dark-grayish': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)'
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    extend: {
      boxShadow: {
        "neon": "0 0 10px rgb(0, 255, 128), 0 0 40px rgb(0, 255, 128), 0 0 70px rgb(0, 255, 128)"
      }
    },
  },
  plugins: [],
}
