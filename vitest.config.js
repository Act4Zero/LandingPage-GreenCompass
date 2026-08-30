import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  resolve: {
    alias: {
      components: path.resolve(projectRoot, "src/components"),
      context: path.resolve(projectRoot, "src/context"),
      util: path.resolve(projectRoot, "src/util"),
      styles: path.resolve(projectRoot, "src/styles"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.js"],
    css: false,
  },
});
