/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      Volkhov: ["Volkhov, serif"]
    },
    screens: {
      sm: "640px",
      md: "768px"
    },
  },
  plugins: [],
}

