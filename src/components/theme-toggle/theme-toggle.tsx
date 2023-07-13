import { FunctionComponent } from "react";
import { useThemeMode } from "@/hooks";

const ThemeToggle: FunctionComponent = () => {
  const { toggleThemeMode } = useThemeMode();

  return (
    <button
      className="rounded bg-blue-500 p-4 text-white dark:bg-red-500"
      onClick={toggleThemeMode}
    >
      Theme toggle
    </button>
  );
};

export { ThemeToggle };
