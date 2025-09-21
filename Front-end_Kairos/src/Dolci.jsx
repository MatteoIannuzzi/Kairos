import React from "react";

// Array di prodotti
const prodottiDolci = [
  {
    id: "Dolci",
    categoria: "Dolci",
    nome: "Crepes",
    prezzo: "4,50 €",
    descrizione:
      "...Nutella, Cioc. Bianco, Lotus, Pistacchio, Albicocca, Frutti di Bosco, Crema ",
  },
  {
    categoria: "Dolci",
    nome: "Pancake",
    prezzo: "4,50 €",
    descrizione:
      "...Nutella, Cioc. Bianco, Lotus, Pistacchio, Albicocca, Frutti di Bosco, Crema ",
  },
  {
    categoria: "Dolci",
    nome: "Wafel",
    prezzo: "4,50 €",
    descrizione:
      "...Nutella, Cioc. Bianco, Lotus, Pistacchio, Albicocca, Frutti di Bosco, Crema ",
  },
  {
    categoria: "Dolci",
    nome: "Krapen",
    prezzo: "2,50 €",
    descrizione:
      "...Nutella, Cioc. Bianco, Lotus, Pistacchio, Albicocca, Frutti di Bosco, Crema ",
  },

  {
    id: "Vasetti",
    categoria: "Vasetti",
    nome: "Tiramisu",
    prezzo: "5,00 €",
    descrizione:
      "Pan di spanga, Crema al Mascarpone, Uova Pastorizzate, Caffe, Cacao",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Kinder Bueno",
    prezzo: "5,00 €",
    descrizione: "Base biscotto, Crema al Formaggio, Kinder Bueno",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Bounty",
    prezzo: "5,00 €",
    descrizione: "Base biscotto, Crema al Formaggio, Bounty",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Nutella biscuits",
    prezzo: "5,00 €",
    descrizione: "Base biscotto, Crema al Formaggio, Nutella biscuits",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Lotus",
    prezzo: "5,00 €",
    descrizione: "Base biscotto, Crema al Formaggio, Lotus",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Pistacchio",
    prezzo: "5,00 €",
    descrizione:
      "Base biscotto, Crema al Formaggio, Granella di Pistacchio, Pistacchio",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Amarena",
    prezzo: "5,00 €",
    descrizione:
      "Base biscotto, Crema al Formaggio, Cioc Fondente, Nocciole, Amarena ",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Frutti di bosco",
    prezzo: "5,00 €",
    descrizione: "Base biscotto, Crema al Formaggio, Frutti di bosco ",
  },
  {
    categoria: "Vasetti",
    nome: "Cheesecake Oreo",
    prezzo: "5,00 €",
    descrizione: "Base biscotto, Crema al Formaggio, Oreo ",
  },
];

function Dolci() {
  const categorie = ["Dolci", "Vasetti", "Gelati"];

  return (
    <div className="m-2 custom-grid">
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
            {prodottiDolci
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

export default Dolci;
