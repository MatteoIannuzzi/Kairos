import React from "react"; // Importa React / Import React

// Componente Footer / Footer component
function Footer() {
  return (
    <>
      {/* Footer principale / Main footer */}
      <footer
        id="contatti" // ID per scroll o link / ID for scroll or links
        className="box-custom-satin-glass footer-style text-white fw-bold"
      >
        <div className="container">
          <div className="row">
            {/* Lista icone social / Social icons list */}
            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com/kairosbar14" // Link Facebook / Facebook link
                  target="_blank" // Apri in nuova finestra / Open in new tab
                  rel="noopener noreferrer" // Sicurezza / Security
                >
                  <i className="bi bi-facebook"></i>{" "}
                  {/* Icona Facebook / Facebook icon */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/barkairos?igsh=YWVzNW5ieWUxYjF1" // Link Instagram / Instagram link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>{" "}
                  {/* Icona Instagram / Instagram icon */}
                </a>
              </li>
            </ul>

            {/* Orari apertura / Opening hours */}
            <div className="col-md-4">
              <h2 className="pb-2">Dalla Domenica al Venerdì: 06:00 - 00:30</h2>
              <h2>Il Sabato: 06:00 - 01:00</h2>
            </div>

            {/* Colonna vuota per layout / Empty column for layout */}
            <div className="col-md-4 "></div>

            {/* Indirizzo e contatti / Address and contacts */}
            <div className="col-md-4 ">
              <h2 className="pb-2">
                Viale Spinelli 40/42 82018 San Giorgio del Sannio
              </h2>
              <h2>0824 279290</h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

// Esporta il componente Footer / Export Footer component
export default Footer;
