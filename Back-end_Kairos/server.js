const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://matteoiannuzzi03:Qwertyui@cluster0.ahiyazx.mongodb.net/menuKairos?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function main() {
  try {
    await client.connect();
    console.log("Connesso a MongoDB Atlas");

    const db = client.db("menuKairos");
    const prodottiCollection = db.collection("Prodotti"); // attenzione alla maiuscola

    // Rotta GET per prendere tutti i prodotti
    app.get("/prodotti", async (req, res) => {
      const prodotti = await prodottiCollection.find().toArray();
      res.json(prodotti);
    });

    // Rotta POST per aggiungere un prodotto
    app.post("/prodotti", async (req, res) => {
      const nuovoProdotto = req.body;
      const result = await prodottiCollection.insertOne(nuovoProdotto);
      res.json(result);
    });

    app.listen(3001, () => {
      console.log("API in ascolto su http://localhost:3001");
    });
  } catch (err) {
    console.error(err);
  }
}

main().catch(console.error);
