const express = require("express");
const app = express();
const port = 8080;

const catData = {
  joseph: {
    age: 4,
    // TODO: fill
  },
};

app.get("/cat-data", (req, res) => {});

app.post("/email-subscribe", (req, res) => {});

app.post("/contact", (req, res) => {});

app.listen(port, () => {
  console.log(`Joseph The Cat API listening on port ${port}`);
});
