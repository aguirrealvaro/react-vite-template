import { createContext, FunctionComponent, ReactNode, useLayoutEffect } from "react";

//type ThemeModeType = "light" | "dark";

type SessionProviderProps = {
  children: ReactNode;
};

type SessionContextValue = {
  toggleThemeMode: () => void;
};

export const ThemeContext = createContext<SessionContextValue>({} as SessionContextValue);

export const ThemeProvider: FunctionComponent<SessionProviderProps> = ({ children }) => {
  useLayoutEffect(() => {
    const themeMode = localStorage.getItem("themeMode") || "light";
    document.documentElement.classList.add(themeMode);
    document.documentElement.style.colorScheme = themeMode;
    localStorage.setItem("themeMode", themeMode);
  }, []);

  const toggleThemeMode = () => {
    const currentTheme = localStorage.getItem("themeMode") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
    localStorage.setItem("themeMode", newTheme);
  };

  return <ThemeContext.Provider value={{ toggleThemeMode }}>{children}</ThemeContext.Provider>;
};
