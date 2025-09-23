import React from "react";
// Importa React dal pacchetto react
// Import React from the react package

// Array di prodotti
// Array of products
const prodottiAperitivi = [
  {
    id: "Spritzeria",
    categoria: "Spritzeria",
    nome: "Aperol Spritz",
    prezzo: "5,00 €",
    descrizione: "Aperol, Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Campari Spritz",
    prezzo: "5,00 €",
    descrizione: "Campari, Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Martini Royale",
    prezzo: "5,00 €",
    descrizione: "Martini Bianco, Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Strega Spritz",
    prezzo: "5,00 €",
    descrizione: "Bitter 900 Giallo, Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Lemon Spritz",
    prezzo: "5,00 €",
    descrizione: "Limoncè bitter, Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Sarti Spritz",
    prezzo: "5,00 €",
    descrizione: "Sarti(Pompelmo e frutto della passione), Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Midori Spritz",
    prezzo: "5,00 €",
    descrizione: "Midori, Prosecco, Soda",
  },
  {
    categoria: "Spritzeria",
    nome: "Hugo Spritz",
    prezzo: "5,00 €",
    descrizione: "Fiori di Sambuco, Prosecco, Soda",
  },

  {
    id: "Analcolici",
    categoria: "Analcolici",
    nome: "Shirley Temple",
    prezzo: "3,50 €",
    descrizione: "Ginger ale, granatina, ciliegia",
  },
  {
    categoria: "Analcolici",
    nome: "Virgin Mojito",
    prezzo: "4,00 €",
    descrizione: "Menta, lime, zucchero di canna, soda",
  },
  {
    categoria: "Analcolici",
    nome: "Virgin Piña Colada",
    prezzo: "4,50 €",
    descrizione: "Ananas, cocco, latte di cocco",
  },
  {
    categoria: "Analcolici",
    nome: "Sunrise Analcolico",
    prezzo: "4,00 €",
    descrizione: "Succo d'arancia, granatina, ghiaccio",
  },

  {
    id: "Drink",
    categoria: "Drink",
    nome: "Negroni",
    prezzo: "6,00 €",
    descrizione: "Gin, Vermouth rosso, Campari",
  },
  {
    categoria: "Drink",
    nome: "Margarita",
    prezzo: "6,00 €",
    descrizione: "Tequila, Triple sec, Succo di lime",
  },
  {
    categoria: "Drink",
    nome: "Old Fashioned",
    prezzo: "6,50 €",
    descrizione: "Whiskey, Zucchero, Angostura",
  },
  {
    categoria: "Drink",
    nome: "Daiquiri",
    prezzo: "5,50 €",
    descrizione: "Rum bianco, Succo di lime, Zucchero",
  },
  {
    categoria: "Drink",
    nome: "Mojito",
    prezzo: "5,50 €",
    descrizione: "Rum bianco, Menta, Lime, Zucchero di canna, Soda",
  },
];

// Funzione componente Aperitivi
// Aperitivi component function
function Aperitivi() {
  // Definisce le categorie da mostrare nella sidebar
  // Define the categories to display in the sidebar
  const categorie = ["Spritzeria", "Analcolici", "Drink"];

  return (
    <div className="m-2 custom-grid">
      {/* Sidebar */}
      {/* Sidebar */}
      <div className="custom-sidebar box-custom-satin-glass">
        <ul className="list-unstyled lista-side">
          {categorie.map((cat) => (
            <li key={cat}>
              <a href={`#${cat}`}>
                <button
                  className="bt-custom fs-4 text-white text-decoration-none fs-6 fw-bold"
                  type="button"
                  style={{ width: "100%" }}
                >
                  {cat}
                </button>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenuto principale */}
      {/* Main content */}
      <div className="custom-main box-custom-satin-glass">
        {categorie.map((categoria) => (
          <React.Fragment key={categoria}>
            <h1
              className="text-white h1 fw-bold mb-0"
              style={{ padding: "1rem" }}
              id={categoria}
            >
              {categoria}
            </h1>
            {prodottiAperitivi
              .filter((p) => p.categoria === categoria)
              .map((p) => (
                <div
                  key={p.nome}
                  className="main-content-menu box-custom-satin-glass text-white"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: "0.75rem",
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="d-flex w-100 justify-content-between align-items-baseline">
                    <h2 className="fs-5 fw-semibold mb-0">{p.nome}</h2>
                    <div className="prezzo mb-0">{p.prezzo}</div>
                  </div>
                  <p className="mb-0">{p.descrizione}</p>
                </div>
              ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Esporta il componente Aperitivi
// Export the Aperitivi component
export default Aperitivi;
