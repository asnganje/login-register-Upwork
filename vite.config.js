import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 4173,
  },
  plugins: [react()],
  proxy: {
    "/api": {
      target: "http://localhost:3002",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
    },
  },
});
