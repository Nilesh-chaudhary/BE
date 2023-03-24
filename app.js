// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// configurations
app.use(express.json());
dotenv.config();

// constants
const PORT = process.env.PORT || 3000;

// database connection
mongoose.set("strictQuery", false);
mongoose
  .connect("")
  .then(() => console.log("DATABASE : CONNECTED"))
  .catch((err) => {
    console.log(err);
  });

// routes
app.get("/", (req, res) => {
  res.json({ server: "running" }).status(200).end();
});

// plug
app.listen(PORT, () => {
  console.log(`PORT : ${PORT}\nLINK : http://localhost:${PORT}`);
});
