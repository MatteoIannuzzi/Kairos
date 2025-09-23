// Importa componenti utilizzati in Home / Import components used in Home
import Richiesta from "./Richiesta"; // Componente che carica dati dal server / Component that fetches data from server
import FacebookPost from "./FacebookPost"; // Componente post Facebook / Facebook post component
import MainContent from "./MainContent"; // Componente per visualizzare le card / Component to display cards
import CardForm from "./CardForm"; // Componente form per aggiungere card / Form component to add cards
import Footer from "./Footer"; // Componente footer / Footer component

// Componente principale Home / Main Home component
function Home({ cards, addCard, setCards }) {
  return (
    <>
      {/* Richiesta dati dal server / Fetch data from server */}
      <Richiesta setCards={setCards} />

      {/* Ancora per scroll alla top della Home / Anchor for scrolling to top of Home */}
      <div id="topHome"></div>

      {/* Contenuto principale / Main content */}
      <main>
        {/* Sezione Post Facebook / Facebook post section */}
        <section>
          <FacebookPost />
        </section>

        {/* Sezione con tutte le card / Section with all cards */}
        <section>
          {cards.map((item, index) => (
            <MainContent
              key={item.id || index} // Chiave unica per React / Unique key for React
              id={item.id || index} // ID per scroll o riferimento / ID for scroll or reference
              titolo={item.titolo} // Titolo card / Card title
              descrizione={item.descrizione} // Descrizione card / Card description
              immagine={item.immagine} // Immagine card / Card image
            />
          ))}
        </section>

        {/* Sezione form per aggiungere card / Form section to add cards */}
        <section>
          <CardForm addCard={addCard} />
          {/* FormUser rimosso da qui perché ora sta in Navbar / FormUser removed because now it's in Navbar */}
        </section>
      </main>

      {/* Footer / Footer */}
      <Footer />
    </>
  );
}

// Esporta il componente Home / Export Home component
export default Home;
