import Richiesta from "./Richiesta";
import FacebookPost from "./FacebookPost";
import MainContent from "./MainContent";
import CardForm from "./CardForm";
import Footer from "./Footer";

function Home({ cards, addCard, setCards }) {
  return (
    <>
      <Richiesta setCards={setCards} />
      <div id="topHome"></div>
      <main>
        {/* Post Facebook */}
        <section>
          <FacebookPost />
        </section>
        <section>
          {cards.map((item, index) => (
            <MainContent
              key={item.id || index}
              id={item.id || index}
              titolo={item.titolo}
              descrizione={item.descrizione}
              immagine={item.immagine}
            />
          ))}
        </section>
        <section>
          <CardForm addCard={addCard} />
          {/* FormUser rimosso da qui perché ora sta in Navbar */}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
