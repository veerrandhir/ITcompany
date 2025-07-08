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
});
