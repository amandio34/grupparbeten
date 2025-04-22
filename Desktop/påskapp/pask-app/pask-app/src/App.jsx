import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
