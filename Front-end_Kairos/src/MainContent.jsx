// Componente che riceve dati come props e li visualizza in una card
// Component that receives data as props and displays it in a card
function MainContent({ id, titolo, descrizione, immagine }) {
  return (
    // Contenitore principale con un ID univoco
    // Main container with a unique ID
    <div className="contenitore" id={id}>
      {/* Box per l'immagine */}
      {/* Box for the image */}
      <div className="box box-1 box-custom-satin-glass">
        <img className="img-fluid" src={immagine} alt={titolo} />
      </div>

      {/* Box per il contenuto testuale */}
      {/* Box for textual content */}
      <div className="box box-custom-satin-glass">
        <div className="col-md-6">
          {/* Titolo della card */}
          {/* Card title */}
          <h2 className="mb-3 text-white display-4">{titolo}</h2>
          {/* Descrizione della card */}
          {/* Card description */}
          <p className="lead text-white">{descrizione}</p>
        </div>
      </div>
    </div>
  );
}

// Esporta il componente per poterlo usare altrove
// Export the component so it can be used elsewhere
export default MainContent;
