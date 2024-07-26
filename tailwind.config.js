/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: "420px", 
        custom2:"992px"
      },
    },
  },
  plugins: [],
};
