import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

// Crea un contesto per il tema / Create a context for the theme
const ThemeContext = createContext();

// Hook personalizzato per accedere facilmente al contesto / Custom hook to easily access the context
export const useTheme = () => useContext(ThemeContext);

// Componente provider che gestisce lo stato del tema e lo fornisce ai componenti figli
// Provider component that manages the theme state and provides it to child components
export function ThemeProvider({ children }) {
  // Stato del tema: inizializzato con il valore salvato in localStorage oppure "light" di default
  // Theme state: initialized with the value saved in localStorage or "light" by default
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Funzione per alternare il tema tra "light" e "dark"
  // Function to toggle the theme between "light" and "dark"
  // useCallback la memorizza per non creare una nuova funzione ad ogni render
  // useCallback memoizes it to avoid creating a new function on each render
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []); // Nessuna dipendenza / No dependencies, function stays stable

  // Effetto per aggiornare la classe del body e salvare il tema nel localStorage
  // Effect to update the body class and save the theme in localStorage
  useEffect(() => {
    // Rimuove tutte le classi esistenti dal body / Remove all existing classes from the body
    document.body.className = "";
    // Aggiunge la classe corrispondente al tema / Add the class corresponding to the current theme
    document.body.classList.add(`${theme}-theme`);
    // Salva il tema selezionato in localStorage / Save the selected theme in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // Eseguito ogni volta che cambia il tema / Runs every time the theme changes

  // Oggetto valore da passare ai componenti figli tramite il provider
  // Value object to pass to child components via the provider
  // useMemo lo memorizza per non creare un nuovo oggetto a ogni render
  // useMemo memoizes it to avoid creating a new object on each render
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    // Fornisce il contesto a tutti i componenti figli / Provides the context to all child components
    <ThemeContext.Provider value={value}>
      {/* Applica una classe CSS al contenitore principale in base al tema / Apply a CSS class to the main container based on the theme */}
      <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
