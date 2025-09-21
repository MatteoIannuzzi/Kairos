// Importa i React Hook e il metodo per creare il contesto
import { createContext, useContext, useEffect, useState } from "react";

// Crea un nuovo contesto per il tema
const ThemeContext = createContext();

// Hook personalizzato per accedere facilmente al contesto
export const useTheme = () => useContext(ThemeContext);

// Componente provider che gestisce lo stato del tema e lo fornisce all'app
export function ThemeProvider({ children }) {
  // Inizializza lo stato del tema con il valore salvato in localStorage
  // Se non esiste, imposta "light" come valore di default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Funzione per alternare il tema tra "light" e "dark"
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // useEffect viene eseguito ogni volta che cambia il valore di "theme"
  useEffect(() => {
    // Rimuove tutte le classi dal body
    document.body.className = "";
    // Aggiunge la nuova classe basata sul tema attuale (es. "light-theme" o "dark-theme")
    document.body.classList.add(`${theme}-theme`);
    // Salva il tema selezionato nel localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Valore da passare a tutti i componenti figli tramite il provider
  const value = { theme, toggleTheme };

  return (
    // Fornisce il contesto a tutti i componenti figli
    <ThemeContext.Provider value={value}>
      {/* Applica una classe CSS al contenitore principale in base al tema */}
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
