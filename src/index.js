import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { useTheme, ThemeProvider } from "./components/theme";
import EasyButton from "./components/EasyButton";

function ThemeToggler() {
  const [theme, setTheme] = useTheme();
  return (
    <button onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}>
      Toggle theme: {theme}
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Hit the easy button!</h1>
        <hr />
        <EasyButton onClick={() => alert("that was easy")}>Easy!</EasyButton>
        <hr />
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
