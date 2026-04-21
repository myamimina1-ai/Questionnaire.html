const express = require("express");

const path = require("path");


const app = express();


// Middleware

app.use(express.json());

app.use(express.static(__dirname));


// PAGE PRINCIPALE

app.get("/", (req, res) => {

res.sendFile(path.join(__dirname, "Questionnaire_Collaborateurs_ZCMC.html"));

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
