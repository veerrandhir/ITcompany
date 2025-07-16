<<<<<<< HEAD
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use ES modules format
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Set default port
    strictPort: true, // Prevent automatic port switching
  },
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 83297d600bf07cd7fc3df7053dd66a8514a3df0a
});
