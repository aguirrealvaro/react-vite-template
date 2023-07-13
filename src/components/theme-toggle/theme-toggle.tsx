import { FunctionComponent } from "react";
import { useThemeMode } from "@/hooks";

const ThemeToggle: FunctionComponent = () => {
  const { toggleThemeMode } = useThemeMode();

  return (
    <button
      className="rounded bg-blue-500 p-2 text-white dark:text-black"
      onClick={toggleThemeMode}
    >
      Theme toggle
    </button>
  );
};

export { ThemeToggle };
