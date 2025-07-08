/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          500: "#6366f1",
          600: "#4f46e5",
        },
      },
    },
  },
  plugins: [],
};
