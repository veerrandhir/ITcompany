/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // Green accent color
        darkbg: "#111827", // Dark mode background
      },
    },
  },
  plugins: [],
};
