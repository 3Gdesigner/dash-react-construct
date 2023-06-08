import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import SvgrPluguim from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    SvgrPluguim(),
  ],
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
});
