import React from "react";

function Footer() {
  return (
    <>
      <footer
        id="contatti"
        className="box-custom-satin-glass footer-style text-white fw-bold"
      >
        <div className="container">
          <div className="row">
            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com/kairosbar14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/barkairos?igsh=YWVzNW5ieWUxYjF1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
            <div className="col-md-4">
              <h2 className="pb-2">Dalla Domenica al Venerdì: 06:00 - 00:30</h2>
              <h2>Il Sabato: 06:00 - 01:00</h2>
            </div>
            <div className="col-md-4 "></div>
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
export default Footer;
