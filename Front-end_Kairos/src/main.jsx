import React from "react";
// Importa ReactDOM per renderizzare l'app nel DOM / Import ReactDOM to render the app in the DOM
import ReactDOM from "react-dom/client";
// Importa il componente principale App / Import main App component
import App from "./App";
// Importa CSS di reset per uniformare gli stili / Import reset CSS to standardize styles
import "./reset.css";
// Importa CSS globale dell'app / Import global app CSS
import "./index.css";
// Importa il ThemeProvider per fornire il contesto del tema / Import ThemeProvider to provide theme context
import { ThemeProvider } from "./ThemeContext";
// Importa BrowserRouter per la navigazione interna / Import BrowserRouter for internal routing
import { BrowserRouter } from "react-router-dom";

// Crea la root di React e renderizza l'app
// Create React root and render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  // React.StrictMode aiuta a individuare problemi nei componenti / React.StrictMode helps detect potential issues in components
  <React.StrictMode>
    {/* BrowserRouter avvolge l'app per abilitare il routing / BrowserRouter wraps the app to enable routing */}
    <BrowserRouter>
      {/* ThemeProvider fornisce il contesto del tema a tutta l'app / ThemeProvider provides theme context to the whole app */}
      <ThemeProvider>
        {/* Componente principale dell'app / Main App component */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
