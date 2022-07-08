require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

//connexion à la bdd
mongoose.connect(process.env.VINTED_ORION22);

const app = express();
app.use(express.json());
app.use(cors());

//import des routes users et offers
const usersRoutes = require("./routes/users");
app.use(usersRoutes);
const offersRoutes = require("./routes/offers");
app.use(offersRoutes);

app.all("*", (req, res) => {
  res.status(400).json("Route introuvable");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started ! 🤙");
});
