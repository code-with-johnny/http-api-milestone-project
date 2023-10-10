import express from "express";
import cors from "cors";
import catData from "./cat-data.json" assert { type: "json" };
const app = express();
const port = 8080;

app.use(cors());

app.get("/cat-data", (req, res) => {
  return res.send(catData);
});

app.post("/email-subscribe", (req, res) => {});

app.post("/contact", (req, res) => {});

app.listen(port, () => {
  console.log(`Joseph The Cat API listening on port ${port}`);
});
