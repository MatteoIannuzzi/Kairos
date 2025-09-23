import React from "react"; // Importa React / Import React

// Componente FacebookPost / FacebookPost component
function FacebookPost() {
  return (
    // Contenitore principale con effetto glass / Main container with glass effect
    <div className="box-custom-satin-glass box-facebook box-if">
      {/* Iframe per incorporare post Facebook / Iframe to embed Facebook post */}
      <div>
        <iframe
          className="if-fb"
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkairosbar14%2Fposts%2Fpfbid02HB5S7pHaQMw8r6fbERChdun7T8JsPDvMGWYCQDvvt1gkH5bMbgJLqNjfiUi1oofFl&show_text=true&width=450"
          allowFullScreen={true} // Permette fullscreen / Allow fullscreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" // Permessi per interazioni / Permissions for interactions
          title="Post di Facebook" // Titolo iframe / Iframe title
        ></iframe>
      </div>

      {/* Box di testo con titolo e descrizione / Text box with title and description */}
      <div className="box-text">
        <h2 className="mb-3 text-white display-4 fw-bold ">
          Buon Compleanno Kairòs
        </h2>
        <p className="lead text-white">Scarica subito le tuo foto!</p>
      </div>
    </div>
  );
}

// Esporta il componente / Export component
export default FacebookPost;
