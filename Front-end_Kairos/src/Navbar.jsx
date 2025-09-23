import React, { useState } from "react";
// Importa Link da react-router-dom per navigazione interna / Import Link from react-router-dom for internal navigation
import { Link } from "react-router-dom";
// Importa HashLink per scroll animato verso sezioni specifiche / Import HashLink for smooth scrolling to specific sections
import { HashLink } from "react-router-hash-link";
// Importa il contesto del tema personalizzato / Import custom theme context
import { useTheme } from "./ThemeContext";
// Importa Bootstrap CSS / Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Importa Bootstrap JS bundle / Import Bootstrap JS bundle
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Importa le icone di Bootstrap / Import Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
// Importa il componente FormUser per il login / Import FormUser component for login
import FormUser from "./FormUser"; // assicurati di importarlo / make sure it is imported

const Navbar = () => {
  // Recupera il tema e la funzione toggle dal contesto / Get theme and toggle function from context
  const { theme, toggleTheme } = useTheme();
  // Stato del menu hamburger aperto/chiuso / State for hamburger menu open/close
  const [isOpen, setIsOpen] = useState(false);
  // Stato per mostrare/nascondere dropdown login / State for showing/hiding login dropdown
  const [showLogin, setShowLogin] = useState(false);

  // Funzione per aprire/chiudere il menu / Function to open/close the menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Navbar principale / Main navbar
    <nav className="navbar navbar-expand-sm box-custom-satin-glass shadow-sm px-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/Kairos_foto/Kairos_logo.jpg"
            alt="Logo Bar Kairos"
            className="logo"
          />
        </Link>

        {/* Bottone Hamburger / Close */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          type="button"
          onClick={handleToggle} // Al click alterna il menu / On click toggle menu
          style={{ border: "none", background: "transparent" }}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {/* Icona X se aperto, icona hamburger se chiuso / X icon if open, hamburger icon if closed */}
          {isOpen ? (
            <i className="bi bi-x-lg fs-2 text-white" />
          ) : (
            <i className="bi bi-list fs-2 text-white" />
          )}
        </button>

        {/* Link navbar */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""} ${
            theme === "dark" ? "dark-navbar-collapse" : ""
          }`}
          id="mainNavbar"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Link Home con scroll animato / Home link with smooth scroll */}
            <li className="nav-item">
              <HashLink
                smooth
                to="/#topHome"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)} // Chiude il menu al click / Close menu on click
              >
                Home
              </HashLink>
            </li>

            {/* Link Caffetteria / Caffetteria link */}
            <li className="nav-item">
              <Link
                to="/caffetteria"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Caffetteria
              </Link>
            </li>

            {/* Link Aperitivi / Aperitivi link */}
            <li className="nav-item">
              <Link
                to="/aperitivi"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Aperitivi
              </Link>
            </li>

            {/* Link Dolci / Dolci link */}
            <li className="nav-item">
              <Link
                to="/dolci"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Dolci
              </Link>
            </li>

            {/* Link Contatti con scroll animato / Contacts link with smooth scroll */}
            <li className="nav-item">
              <HashLink
                smooth
                to="/#contatti"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </HashLink>
            </li>

            {/* Link Accedi con dropdown / Login link with dropdown */}
            <li
              className="nav-item"
              onMouseEnter={() => setShowLogin(true)} // Mostra dropdown al passaggio / Show dropdown on hover
              onMouseLeave={() => setShowLogin(false)} // Nasconde dropdown quando esci / Hide dropdown on mouse leave
              style={{ position: "relative" }}
            >
              <Link
                to="#"
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
              >
                Accedi
              </Link>
              {/* Dropdown login / Login dropdown */}
              {showLogin && (
                <div className="login-dropdown box-custom-satin-glass">
                  <FormUser />
                </div>
              )}
            </li>
          </ul>

          {/* Bottone cambio tema / Theme toggle button */}
          <button
            onClick={toggleTheme} // Alterna tema chiaro/scuro / Toggle light/dark theme
            className="btn d-flex align-items-center"
            style={{ border: "none", background: "transparent" }}
            aria-label="Cambia tema"
          >
            {/* Icona Sole se dark, Luna se light / Sun icon if dark, Moon icon if light */}
            {theme === "dark" ? (
              <i className="bi bi-sun fs-4" title="Tema chiaro" />
            ) : (
              <i className="bi bi-moon fs-4" title="Tema scuro" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
