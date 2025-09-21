import { useEffect } from "react";

// Componente Richiesta che si occupa di caricare dati da un server esterno
function Richiesta({ setCards, endpoint = "/prodotti" }) {
  // passo l'endpoint come prop cosi posso cambiarlo in base alle esigenze
  // useEffect esegue il codice al montaggio del componente (simile a componentDidMount)
  useEffect(() => {
    // Effettua una richiesta HTTP GET all'endpoint specificato
    fetch(`http://localhost:3001${endpoint}`)
      // Converte la risposta in formato JSON
      .then((res) => res.json())
      // Aggiorna lo stato cards nel componente padre con i dati ricevuti
      .then((data) => setCards(data))
      // Gestisce eventuali errori nella richiesta e li stampa in console
      .catch((err) => console.log("Errore nel caricamento dati:", err));
  }, [setCards, endpoint]); // Le dipendenze sono setCards e endpoit, esegue l'effetto solo se cambiano

  // Questo componente non rende nulla visivamente
  return null;
}
export default Richiesta;
