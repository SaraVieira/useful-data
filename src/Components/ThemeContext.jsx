import * as React from "react";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const makeDark = (setDarkTheme, bodyClasses) => {
    bodyClasses.add("dark");
    localStorage.setItem("color-theme", "dark");
    setDarkTheme(true);
    bodyClasses.add("dark");
    localStorage.setItem("color-theme", "dark");
    setDarkTheme(true);
  };
  const makeLight = (setDarkTheme, bodyClasses) => {
    bodyClasses.remove("dark");
    localStorage.setItem("color-theme", "light");
    setDarkTheme(false);
  };

  const [darkTheme, setDarkTheme] = React.useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const toggleColorScheme = () => {
    const bodyClasses = document.documentElement.classList;
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        makeDark(setDarkTheme, bodyClasses);
      } else {
        makeLight(setDarkTheme, bodyClasses);
      }
    } else {
      if (bodyClasses.contains("dark")) {
        makeLight(setDarkTheme, bodyClasses);
      } else {
        makeDark(setDarkTheme, bodyClasses);
      }
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };
