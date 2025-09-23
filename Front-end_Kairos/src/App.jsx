import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Caffetteria from "./Caffetteria";
import Aperitivi from "./Aperitivi";
import Dolci from "./Dolci";
import { Routes, Route } from "react-router-dom";

/* ---------------- COMPONENTE PRINCIPALE APP ---------------- */
/* Main App component */
function App() {
  // Stato per salvare le card aggiunte / State to store added cards
  const [cards, setCards] = useState([]);

  // Funzione per aggiungere una nuova card / Function to add a new card
  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]); // Mantiene intatte le vecchie card / Keep previous cards intact
  };

  return (
    <>
      {/* Navbar sempre visibile / Navbar always visible */}
      <Navbar />

      {/* Rotte principali dell'app / Main app routes */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home
              cards={cards} // Passa lo stato delle card / Pass cards state
              addCard={addCard} // Passa la funzione per aggiungere card / Pass addCard function
              setCards={setCards} // Passa lo stato setter / Pass setCards function
            />
          }
        />

        {/* Pagina Caffetteria / Coffee menu page */}
        <Route path="/caffetteria" element={<Caffetteria />} />

        {/* Pagina Aperitivi / Aperitif menu page */}
        <Route path="/aperitivi" element={<Aperitivi />} />

        {/* Pagina Dolci / Desserts page */}
        <Route path="/Dolci" element={<Dolci />} />
      </Routes>
    </>
  );
}

export default App; // Esporta il componente App / Export App component
