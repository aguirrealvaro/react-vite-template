import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

type EnvironmentType = "development" | "production";

const validEnvs: EnvironmentType[] = ["development", "production"];

export default defineConfig(({ mode }) => {
  if (!validEnvs.includes(mode as EnvironmentType)) {
    const message = `Unsupported mode: "${mode}"`;
    throw Error(message);
  }

  return {
    plugins: [react()],
    define: {
      "process.env": {},
    },
  };
});
