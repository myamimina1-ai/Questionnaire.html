import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.post("/analyze", (req, res) => {
  const responses = req.body.responses;

  const result = "Analyse IA : " + responses.join(", ");

  res.json({ result });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
