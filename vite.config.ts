import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/app/",
  plugins: [react()],
  resolve: {
    alias: {
      "#": path.resolve(__dirname, "src/"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest/setup-tests.ts",
  },
});
