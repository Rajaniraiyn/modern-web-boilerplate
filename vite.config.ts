import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import strip from "@rollup/plugin-strip";
import { ViteWebfontDownload as webFont } from "vite-plugin-webfont-dl";
import eslint from "vite-plugin-eslint";
import { type ManifestOptions, VitePWA as pwa } from "vite-plugin-pwa";
import { splitVendorChunkPlugin as splitChunks } from "vite";

const pwaManifest: Partial<ManifestOptions> = {
  name: "Rajaniraiyn's Base Web Boilerplate",
  short_name: "Web Boilerplate",
  description:
    "A simple, modern, fast and advanced boilerplate for web projects.",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  orientation: "portrait",
  icons: [
    {
      src: "./icons/splash.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "./icons/x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "./icons/x256.png",
      sizes: "256x256",
      type: "image/png",
    },
    {
      src: "./icons/maskablex128.png",
      sizes: "128x128",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "./icons/maskablex384.png",
      sizes: "384x384",
      type: "image/png",
      purpose: "maskable",
    },
  ],
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        compact: true,
      },
    },
  },
  plugins: [
    svelte(),
    strip(),
    webFont(),
    eslint(),
    pwa({
      manifest: pwaManifest,
      registerType: "autoUpdate",
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2}",
        ],
      },
    }),
    splitChunks(),
  ],
});
