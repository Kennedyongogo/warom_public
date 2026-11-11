import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: false,
        type: "module",
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        cleanupOutdatedCaches: true,
        navigateFallbackDenylist: [/^\/api/],
        globIgnores: ["**/api/**"],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith("/api"),
            handler: "NetworkOnly",
            options: {
              cacheName: "api-cache",
            },
          },
        ],
        additionalManifestEntries: [],
      },
      includeAssets: ["warom-logo.png"],
      manifest: {
        name: "WAROM",
        short_name: "WAROM",
        description: "Discover people, chat, call, and connect on WAROM",
        theme_color: "#0B1B2B",
        background_color: "#0B1B2B",
        icons: [
          {
            src: "warom-logo.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ["react-helmet-async"],
  },
  server: {
    port: 3000,
    host: true,
    open: true,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
      "/uploads": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
