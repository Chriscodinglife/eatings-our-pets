import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import http from "https";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACK_END,
          changeOrigin: true,
          secure: false,
          agent: new http.Agent(),
        },
      },
    },
  };
});
