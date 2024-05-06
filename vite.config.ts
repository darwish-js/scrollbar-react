import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const isLib = process.env.BUILD_LIB === "true";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: isLib
    ? {
        copyPublicDir: false,
        lib: {
          entry: resolve(__dirname, "lib/main.ts"),
          formats: ["es"],
          name: "scrollbar-react",
        },
        rollupOptions: {
          external: ["react", "react/jsx-runtime"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      }
    : {
        outDir: "dist-app",
      },
});
