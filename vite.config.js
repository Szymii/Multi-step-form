import { defineConfig } from "vite";
import electron from "vite-plugin-electron";

export default defineConfig({
  // base: "/Multi-step-form/",
  plugins: [
    electron({
      // Main process entry file of the Electron App.
      entry: "electron/main.js",
      // If this `onstart` is passed, Electron App will not start automatically.
      // However, you can start Electroo App via `startup` function.
      onstart(args) {
        args.startup();
      },
    }),
  ],
});
