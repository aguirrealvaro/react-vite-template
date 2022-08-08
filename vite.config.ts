import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PACKAGE = require("./package.json");

type EnvironmentType = "development" | "production";

const validEnvs: EnvironmentType[] = ["development", "production"];

export default defineConfig(({ mode }) => {
  if (!validEnvs.includes(mode as EnvironmentType)) {
    const message = `Unsupported mode: "${mode}"`;
    throw Error(message);
  }

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    define: {
      "process.env": {
        ...process.env,
        ...loadEnv(mode, process.cwd(), ""),
        APP_VERSION: PACKAGE.version,
      },
    },
  };
});
