import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      plugins: [],
    },
  },
  build: {
    sourcemap: false, // 소스맵 비활성화
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
});
