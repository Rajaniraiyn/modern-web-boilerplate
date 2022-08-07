import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import strip from "@rollup/plugin-strip";
import { ViteWebfontDownload as webFont } from "vite-plugin-webfont-dl";
import eslint from "vite-plugin-eslint";
import { type ManifestOptions, VitePWA as pwa } from "vite-plugin-pwa";
import { splitVendorChunkPlugin as splitChunks } from "vite";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";

import { resolve } from "path";

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

function manualChunks(path: string) {
  const name = path.split("/").at(-1).split(".").at(0);
  if (path.includes("/views/")) return `views/${name}`;
  else if (path.includes("/components/")) return `components/${name}`;
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode === "production";
  return {
    base: "./",
    build: {
      minify: "terser",
      terserOptions: {
        toplevel: true,
        compress: {
          unsafe: true,
          booleans_as_integers: true,
          drop_console: true,
          keep_fargs: false,
          unsafe_math: true,
        },
      },
      rollupOptions: {
        input: {
          main: resolve("index.html"),
          "404": resolve("404.html"),
        },
        output: {
          compact: true,
          manualChunks: manualChunks,
          assetFileNames: "assets/[ext]/[name]-[hash][extname]",
        },
      },
    },
    plugins: [
      svelte({
        emitCss: true,
        experimental: {
          useVitePreprocess: true,
          prebundleSvelteLibraries: true,
        },
      }),
      pwa({
        manifest: pwaManifest,
        registerType: "autoUpdate",
        workbox: {
          globPatterns: [
            "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2}",
          ],
        },
      }),
      ...(isProd
        ? [
            strip(),
            webFont(),
            eslint(),
            splitChunks(),
            imagePresets({
              optimize: widthPreset({
                widths: [300, 500, 1000],
                formats: {
                  webp: {
                    quality: 80,
                  },
                  avif: {
                    quality: 80,
                  },
                  png: {
                    quality: 80,
                  },
                },
              }),
            }),
          ]
        : []),
    ],
  };
});
