import React from "react";

// Array di prodotti / Array of products
const prodottiCaffetteria = [
  {
    id: "Caffé",
    categoria: "Caffè",
    nome: "Caffè",
    prezzo: "1,20 €",
    descrizione:
      "...espresso, macchiato, schiumato, latte intero, senza lattosio,soia",
  },
  {
    categoria: "Caffè",
    nome: "Marocchino",
    prezzo: "—",
    descrizione: "...cacao, cannella",
  },
  {
    categoria: "Caffè",
    nome: "Decaffeinato",
    prezzo: "—",
    descrizione: "...macchiato,schiumato",
  },
  {
    categoria: "Caffè",
    nome: "Corretto",
    prezzo: "—",
    descrizione: "....espresso,decaffeinato",
  },
  {
    categoria: "Caffè",
    nome: "Cappuccino",
    prezzo: "—",
    descrizione: "...espresso,decaffeinato,latte intero,senza lattosio,soia",
  },
  {
    categoria: "Caffè",
    nome: "Latte Macchiato",
    prezzo: "—",
    descrizione: "...espresso,decaffeinato,latte intero,senza lattosio,soia",
  },
  {
    categoria: "Caffè",
    nome: "Latte Bianco",
    prezzo: "—",
    descrizione: "...latte intero,senza lattosio,soia",
  },
  {
    categoria: "Caffè",
    nome: "Caffe Goloso",
    prezzo: "—",
    descrizione: "...Nocciola, Pistacchio, Nutella, Cioccolato bianco, Lotus",
  },
  {
    id: "Orzo",
    categoria: "Orzo",
    nome: "Orzo",
    prezzo: "—",
    descrizione: "...macchiato, schiumato, latte intero, senza lattosio,soia",
  },
  {
    categoria: "Orzo",
    nome: "Orzo Marocchino",
    prezzo: "—",
    descrizione: "...cacao, cannella",
  },
  {
    categoria: "Orzo",
    nome: "Orzo Corretto",
    prezzo: "—",
    descrizione: "...Alcolici Vari",
  },
  {
    categoria: "Orzo",
    nome: "Orzo Cappuccino",
    prezzo: "—",
    descrizione: "...latte intero,senza lattosio,soia",
  },
  {
    categoria: "Orzo",
    nome: "Orzo Latte Macchiato",
    prezzo: "—",
    descrizione: "...latte intero,senza lattosio,soia",
  },
  {
    id: "Ginseng",
    categoria: "Ginseng",
    nome: "Ginseng",
    prezzo: "—",
    descrizione: "...macchiato, schiumato, latte intero, senza lattosio,soia",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Light",
    prezzo: "—",
    descrizione: "...macchiato, schiumato, latte intero, senza lattosio,soia",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Rosso",
    prezzo: "—",
    descrizione: "...macchiato, schiumato, latte intero, senza lattosio,soia",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Matcha",
    prezzo: "—",
    descrizione: "...macchiato, schiumato, latte intero, senza lattosio,soia",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Marocchino",
    prezzo: "—",
    descrizione: "...cacao, cannella",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Corretto",
    prezzo: "—",
    descrizione: "...Alcolici Vari",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Cappuccino",
    prezzo: "—",
    descrizione: "...latte intero,senza lattosio,soia",
  },
  {
    categoria: "Ginseng",
    nome: "Ginseng Latte Macchiato",
    prezzo: "—",
    descrizione: "...latte intero,senza lattosio,soia",
  },
];

function Caffetteria() {
  return (
    <div className="m-2 custom-grid">
      {/* Sidebar / Sidebar */}
      <div className="custom-sidebar box-custom-satin-glass ">
        <ul className="list-unstyled lista-side">
          {/* Pulsanti per le categorie / Buttons for categories */}
          <li>
            <a href="#Caffè">
              <button
                className="bt-custom fs-4 text-white text-decoration-none fs-6 fw-bold"
                type="button"
                style={{ width: "100%" }}
              >
                Caffè
              </button>
            </a>
          </li>
          <li>
            <a href="#Orzo">
              <button
                className="bt-custom fs-4 text-white text-decoration-none fs-6 fw-bold"
                type="button"
                style={{ width: "100%" }}
              >
                Orzo
              </button>
            </a>
          </li>
          <li>
            <a href="#Ginseng">
              <button
                className="bt-custom fs-4 text-white text-decoration-none fs-6 fw-bold"
                type="button"
                style={{ width: "100%" }}
              >
                Ginseng
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Contenuto principale / Main content */}
      <div className="custom-main box-custom-satin-glass ">
        {/* Avvisi aggiunte / Notices for extras */}
        <div className="fs-6 fw-bold mb-0 text-white aggiunte text-end">
          <h1>A tutte le varianti di latte si aggiungono 0,20€</h1>
          <h1>All'aggiunta di panna si aggiungono 0,50€</h1>
        </div>

        {/* Sezioni con map / Sections with map */}
        {["Caffè", "Orzo", "Ginseng"].map((categoria) => (
          <React.Fragment key={categoria}>
            {/* Titolo categoria / Category title */}
            <h1
              className="text-white h1 fw-bold mb-0"
              style={{ padding: "1rem" }}
              id={categoria}
            >
              {categoria}
            </h1>

            {/* Prodotti filtrati per categoria / Products filtered by category */}
            {prodottiCaffetteria
              .filter((p) => p.categoria === categoria)
              .map((p, i) => (
                <div
                  key={i}
                  className="main-content-menu box-custom-satin-glass text-white"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: "0.75rem",
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  <div className="d-flex w-100 justify-content-between align-items-baseline">
                    {/* Nome prodotto / Product name */}
                    <h2 className="fs-5 fw-semibold mb-0">{p.nome}</h2>
                    {/* Prezzo prodotto / Product price */}
                    <div className="prezzo mb-0">{p.prezzo}</div>
                  </div>
                  {/* Descrizione prodotto / Product description */}
                  <p className="mb-0">{p.descrizione}</p>
                </div>
              ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Caffetteria;
