// Componente che riceve dati come props e li visualizza in una card
function MainContent({ id, titolo, descrizione, immagine }) {
  return (
    // Contenitore principale con un ID univoco
    <div className="contenitore" id={id}>
      {/* Box per l'immagine */}
      <div className="box box-1 box-custom-satin-glass">
        <img className="img-fluid" src={immagine} alt={titolo} />
      </div>
      {/* Box per il contenuto testuale */}
      <div className="box box-custom-satin-glass">
        <div className="col-md-6">
          {/* Titolo della card */}
          <h2 className="mb-3 text-white display-4">{titolo}</h2>
          {/* Descrizione della card */}
          <p className="lead text-white">{descrizione}</p>
        </div>
      </div>
    </div>
  );
}

export default MainContent; // Esporta il componente per poterlo usare altrove
