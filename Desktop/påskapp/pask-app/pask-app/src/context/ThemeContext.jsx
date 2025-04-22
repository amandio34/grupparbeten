// Import necessary libraries and assets 
import { createContext, useContext } from "react";
import pastel from "../assets/colors";

// Create a context for the theme with a default value of pastel colors 
const ThemeContext = createContext(pastel);
export const useTheme = () => useContext(ThemeContext);

// Create a ThemeProvider component that wraps its children with the ThemeContext provider
// This allows any component within the provider to access the theme context
export function ThemeProvider({ children }) {
  // The ThemeProvider component takes children as props and provides the pastel theme to them
  // It uses the ThemeContext.Provider to pass down the pastel theme
  return (
    <ThemeContext.Provider value={pastel}>
      {children}
    </ThemeContext.Provider>
  );
}
