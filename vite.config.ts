import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const validEnvs = ["development", "production"];

export default defineConfig(({ mode }) => {
  if (!validEnvs.includes[mode]) {
    const message = `Unsupported mode: "${mode}"`;
    throw Error(message);
  }

  const envVars = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    envPrefix: "VITE_",
    define: {
      "process.env": envVars,
    },
  };
});
