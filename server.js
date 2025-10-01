const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
