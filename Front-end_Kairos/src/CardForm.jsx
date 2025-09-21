// Importa React e l'hook useState
import React, { useState } from "react";

// Componente che permette di creare e aggiungere una nuova card
function CardForm({ addCard }) {
  // Stato che contiene i dati del form: titolo, descrizione e immagine
  const [formData, setFormData] = useState({
    titolo: "",
    descrizione: "",
    immagine: "",
  });

  // Stato che tiene traccia dell'ID progressivo da assegnare alle nuove card
  const [nextId, setNextId] = useState(0); // id progressivo locale

  // Gestisce il cambiamento degli input del form
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Estrae nome e valore dal target
    // Aggiorna il campo corrispondente in formData
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il ricaricamento della pagina

    // Controlla che tutti i campi siano compilati
    if (!formData.titolo || !formData.descrizione || !formData.immagine) {
      alert("Per favore, compila tutti i campi.");
      return;
    }

    // Crea un nuovo oggetto card con ID univoco
    const newCard = {
      id: nextId,
      titolo: formData.titolo,
      descrizione: formData.descrizione,
      immagine: formData.immagine,
    };

    // Aggiunge la nuova card all'elenco
    addCard(newCard);
    // Incrementa l'ID per la prossima card
    setNextId(nextId + 1);

    // Reset del form
    setFormData({
      titolo: "",
      descrizione: "",
      immagine: "",
    });
  };

  return (
    <div className="p-4">
      {/* Form per inserire una nuova card */}
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 mb-4 bg-custom-dark-background p-3 rounded text-light "
        style={{ width: "20rem" }}
      >
        {/* Campo titolo */}
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

        {/* Campo descrizione */}
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

        {/* Campo URL immagine */}
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

        {/* Bottone per inviare il form */}
        <button type="submit" className="btn btn-primary">
          Aggiungi Card
        </button>
      </form>
    </div>
  );
}

// Esporta il componente
export default CardForm;
