
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f6ff",   // Aqua
        secondary: "#9b59b6", // Purple
        darkBg: "#0f0f0f",
        cardBg: "#1b1b1b"
      },
      boxShadow: {
        chartGlow: "0 0 20px rgba(0, 246, 255, 0.6), 0 0 40px rgba(155, 89, 182, 0.4)"
      }
    },
  },
  plugins: [],
}

