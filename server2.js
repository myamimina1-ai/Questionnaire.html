import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static("."));

// PAGE PRINCIPALE
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../Questionnaire_Collaborateur.html"));
});
});

// ANALYSE
app.post("/analyze", (req, res) => {
const responses = req.body.responses;

const result = "Analyse IA : " + JSON.stringify(responses);

res.json({ result });
});

// LANCER SERVEUR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log("Serveur lancé sur le port " + PORT);
});
