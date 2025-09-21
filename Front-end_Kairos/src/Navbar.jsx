import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "./ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormUser from "./FormUser"; // assicurati di importarlo

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false); // stato del menu
  const [showLogin, setShowLogin] = useState(false); // stato dropdown login

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          onClick={handleToggle}
          style={{ border: "none", background: "transparent" }}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
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
            <li className="nav-item">
              <HashLink
                smooth
                to="/#topHome"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <Link
                to="/caffetteria"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Caffetteria
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aperitivi"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Aperitivi
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dolci"
                className="nav-link text-white"
                onClick={() => setIsOpen(false)}
              >
                Dolci
              </Link>
            </li>
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

            {/* Link Accedi con dropdown */}
            <li
              className="nav-item"
              onMouseEnter={() => setShowLogin(true)}
              onMouseLeave={() => setShowLogin(false)}
              style={{ position: "relative" }}
            >
              <Link
                to="#"
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
              >
                Accedi
              </Link>
              {showLogin && (
                <div className="login-dropdown box-custom-satin-glass">
                  <FormUser />
                </div>
              )}
            </li>
          </ul>

          {/* Bottone tema */}
          <button
            onClick={toggleTheme}
            className="btn d-flex align-items-center"
            style={{ border: "none", background: "transparent" }}
            aria-label="Cambia tema"
          >
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
