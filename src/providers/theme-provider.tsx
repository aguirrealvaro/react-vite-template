import { createContext, FunctionComponent, ReactNode, useLayoutEffect } from "react";

const THEME_MODE_LOCAL_STORAGE_KEY = "theme";

type ThemeModeType = "light" | "dark";

type SessionProviderProps = {
  children: ReactNode;
};

type SessionContextValue = {
  toggleThemeMode: () => void;
};

export const ThemeContext = createContext<SessionContextValue>({} as SessionContextValue);

export const ThemeProvider: FunctionComponent<SessionProviderProps> = ({ children }) => {
  const getCurrentThemeMode = () => {
    return (localStorage.getItem(THEME_MODE_LOCAL_STORAGE_KEY) || "light") as ThemeModeType;
  };

  useLayoutEffect(() => {
    const defaultTheme = getCurrentThemeMode();
    document.documentElement.classList.add(defaultTheme);
    document.documentElement.style.colorScheme = defaultTheme;
    localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, defaultTheme);
  }, []);

  const toggleThemeMode = () => {
    const currentTheme = getCurrentThemeMode();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
    localStorage.setItem(THEME_MODE_LOCAL_STORAGE_KEY, newTheme);
  };

  return <ThemeContext.Provider value={{ toggleThemeMode }}>{children}</ThemeContext.Provider>;
};
