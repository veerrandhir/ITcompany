/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        indigo: {
          500: "#6366f1",
          600: "#4f46e5",
        },
=======
        primary: "#10B981", // Green accent color
        darkbg: "#111827", // Dark mode background
>>>>>>> 83297d600bf07cd7fc3df7053dd66a8514a3df0a
      },
    },
  },
  plugins: [],
};
