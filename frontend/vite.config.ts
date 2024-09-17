import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const target = process.env.BACKEND;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: target,
        changeOrigin: true,
      },
    },
  },
});
