import React, { useState, useReducer } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Caffetteria from "./Caffetteria";
import Aperitivi from "./Aperitivi";
import Dolci from "./Dolci";
import Footer from "./Footer";
import MainContent from "./MainContent";
import FacebookPost from "./FacebookPost";
import CardForm from "./CardForm";
import FormUser from "./FormUser";
import Richiesta from "./Richiesta";
import { useTheme } from "./ThemeContext";
import { Routes, Route, Link } from "react-router-dom";

/* ---------------- APP ---------------- */
function App() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home cards={cards} addCard={addCard} setCards={setCards} />}
        />
        <Route path="/caffetteria" element={<Caffetteria />} />
        <Route path="/aperitivi" element={<Aperitivi />} />
        <Route path="/Dolci" element={<Dolci />} />
      </Routes>
    </>
  );
}

export default App;
