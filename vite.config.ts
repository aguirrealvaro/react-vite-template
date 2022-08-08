import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const validEnvs = ["development", "production"];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (!validEnvs.includes[mode]) {
    const message = `Unsupported mode: "${mode}"`;
    throw Error(message);
  }

  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
  };
});
