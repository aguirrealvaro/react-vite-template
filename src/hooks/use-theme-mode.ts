import { useContext } from "react";
import { ThemeContext } from "@/providers";

const useThemeMode = () => {
  return useContext(ThemeContext);
};

export { useThemeMode };
