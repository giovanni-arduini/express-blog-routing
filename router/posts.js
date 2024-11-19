const express = require("express");
const router = express.Router();
const posts = require("../data/posts.js");

// Non c'è più l'istanza dell'applicativo app, ma router!

// Qui salvo tutte le rotte!
// CRUD

//index
router.get("/", (req, res) => {
  console.log("Ecco la lista dei post");
  res.json(posts);
});

//show
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Ecco il post con id ${id}`);
});

//store
router.post("/", (req, res) => {
  res.send("Crea un nuovo post!");
});

//update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Aggiorna il post con id ${id}`);
});

//modify
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Modifica il post con id ${id}`);
});

//destroy
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Elimina il post con id ${id}`);
});

module.exports = router;
