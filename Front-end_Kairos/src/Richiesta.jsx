import { useEffect } from "react";

// Componente Richiesta che si occupa di caricare dati da un server esterno
// Richiesta component that loads data from an external server
function Richiesta({ setCards, endpoint = "/prodotti" }) {
  // passo l'endpoint come prop cosi posso cambiarlo in base alle esigenze
  // Pass the endpoint as a prop so it can be changed based on needs

  // useEffect esegue il codice al montaggio del componente (simile a componentDidMount)
  // useEffect runs code when the component mounts (similar to componentDidMount)
  useEffect(() => {
    // Effettua una richiesta HTTP GET all'endpoint specificato
    // Make an HTTP GET request to the specified endpoint
    fetch(`http://localhost:3001${endpoint}`)
      // Converte la risposta in formato JSON
      // Convert the response to JSON
      .then((res) => res.json())
      // Aggiorna lo stato cards nel componente padre con i dati ricevuti
      // Update the parent component's cards state with the received data
      .then((data) => setCards(data))
      // Gestisce eventuali errori nella richiesta e li stampa in console
      // Handle any errors in the request and log them to the console
      .catch((err) => console.log("Errore nel caricamento dati:", err));
  }, [setCards, endpoint]);
  // Le dipendenze sono setCards e endpoint, esegue l'effetto solo se cambiano
  // Dependencies are setCards and endpoint, the effect runs only if they change

  // Questo componente non rende nulla visivamente
  // This component does not render anything visually
  return null;
}

export default Richiesta;
