import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import pluginRewriteAll from "vite-plugin-rewrite-all";

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["swiper/css", "swiper/css/effect-fade"],
  },
  plugins: [react(), pluginRewriteAll(), svgrPlugin({ icon: true })],
});
