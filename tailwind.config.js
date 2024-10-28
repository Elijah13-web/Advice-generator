/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(193, 38%, 86%)', // Light Cyan
        accent: 'hsl(150, 100%, 66%)',  // Neon Green
        DarkBlue: 'hsl(218, 23%, 16%)',
        GrayBlue: 'hsl(217, 19%, 38%)',
        DarkGray: 'hsl(217, 19%, 24%)',
        Neon: 'hsl(150, 100%, 66%)',
        LightG: 'hsl(193, 38%, 86%)'
      },
    },
  },
  plugins: [],
}