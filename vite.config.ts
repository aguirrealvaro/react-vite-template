import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

type EnvironmentType = "development" | "production";

const validEnvs: EnvironmentType[] = ["development", "production"];

export default defineConfig(({ mode }) => {
  console.log("***");
  console.log(mode);
  console.log("***");

  if (!validEnvs.includes[mode]) {
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
