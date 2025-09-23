// Importa React e l'hook useState / Import React and useState hook
import React, { useState } from "react";

// Componente CardForm / CardForm component
// Permette di creare e aggiungere una nuova card / Allows creating and adding a new card
function CardForm({ addCard }) {
  // Stato del form / Form state
  // Contiene titolo, descrizione e immagine / Contains title, description and image
  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    immagine: "",
  });

  // Stato per ID progressivo / State for progressive ID
  const [nextId, setNextId] = useState(0); // ID progressivo locale / Local progressive ID

  // Gestione cambiamento input / Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Estrae nome e valore / Extract name and value
    // Aggiorna il campo corrispondente in formData / Update the corresponding field in formData
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gestione submit form / Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita ricaricamento pagina / Prevent page reload

    // Controlla che tutti i campi siano compilati / Check all fields are filled
    if (!formData.titolo || !formData.descrizione || !formData.immagine) {
      alert("Per favore, compila tutti i campi."); // Alert in italiano / Alert in Italian
      return;
    }

    // Crea nuovo oggetto card con ID univoco / Create new card object with unique ID
    const newCard = {
      id: nextId,
      titolo: formData.titolo,
      descrizione: formData.descrizione,
      immagine: formData.immagine,
    };

    // Aggiunge la nuova card all’elenco / Add the new card to the list
    addCard(newCard);
    // Incrementa l’ID per la prossima card / Increment ID for next card
    setNextId(nextId + 1);

    // Reset del form / Reset the form
    setFormData({
      titolo: "",
      descrizione: "",
      immagine: "",
    });
  };

  return (
    <div className="p-4">
      {/* Form per inserire nuova card / Form to add a new card */}
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 mb-4 bg-custom-dark-background p-3 rounded text-light "
        style={{ width: "20rem" }}
      >
        {/* Campo titolo / Title input field */}
        <div className="mb-3">
          <label htmlFor="titoloInput" className="form-label">
            Titolo
          </label>
          <input
            type="text"
            className="form-control"
            id="titoloInput"
            name="titolo"
            placeholder="Titolo"
            value={formData.titolo}
            onChange={handleInputChange}
          />
        </div>

        {/* Campo descrizione / Description input field */}
        <div className="mb-3">
          <label htmlFor="descrizioneInput" className="form-label">
            Descrizione
          </label>
          <input
            type="text"
            className="form-control"
            id="descrizioneInput"
            name="descrizione"
            placeholder="Descrizione"
            value={formData.descrizione}
            onChange={handleInputChange}
          />
        </div>

        {/* Campo URL immagine / Image URL input field */}
        <div className="mb-3">
          <label htmlFor="immagineInput" className="form-label">
            URL Immagine
          </label>
          <input
            type="text"
            className="form-control"
            id="immagineInput"
            name="immagine"
            placeholder="Percorso o URL dell’immagine"
            value={formData.immagine}
            onChange={handleInputChange}
          />
        </div>

        {/* Bottone invio / Submit button */}
        <button type="submit" className="btn btn-primary">
          Aggiungi Card
        </button>
      </form>
    </div>
  );
}

// Esporta componente / Export component
export default CardForm;
