import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path aliases
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@i18n": resolve(__dirname, "./src/i18n"),
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
    exclude: ["lucide-react"],
  },

  // Build optimization
  build: {
    target: "es2020",
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animations: ["framer-motion"],
          icons: ["lucide-react", "react-icons"],
          i18n: ["i18next", "react-i18next"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  // Dev server configuration
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: false,
  },

  // Preview server configuration
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: false,
  },
});
