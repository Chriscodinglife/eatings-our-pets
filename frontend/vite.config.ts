import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const target = env.VITE_BACKEND;

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: target,
          changeOrigin: true,
        },
      },
    },
  };
});
