import { createContext, FunctionComponent, ReactNode, useLayoutEffect } from "react";

const THEME_MODE_LOCAL_STORAGE_KEY = "theme";

const getCurrentThemeMode = () => {
  return (localStorage.getItem(THEME_MODE_LOCAL_STORAGE_KEY) || "light") as ThemeModeType;
};

type ThemeModeType = "light" | "dark";

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextValue = {
  toggleThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  useLayoutEffect(() => {
    const defaultTheme = getCurrentThemeMode();
    document.documentElement.classList.add(defaultTheme);
    document.documentElement.style.colorScheme = defaultTheme;
    localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, defaultTheme);
  }, []);

  const toggleThemeMode = () => {
    const currentTheme = getCurrentThemeMode();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.classList.replace(currentTheme, newTheme);
    document.documentElement.style.colorScheme = newTheme;
    localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, newTheme);
  };

  return <ThemeContext.Provider value={{ toggleThemeMode }}>{children}</ThemeContext.Provider>;
};
