import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static("."));

// Page principale
app.get("/", (req, res) => {
  res.sendFile(path.resolve("Questionnaire_Collaborateurs_ZCMC.html"));
});

// Analyse (simulation IA)
app.post("/analyze", (req, res) => {
  const responses = req.body.responses;

  const result = "Analyse IA : " + responses.join(", ");

  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running");
});
