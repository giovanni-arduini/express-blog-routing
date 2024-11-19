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
router.get("/:slug", (req, res) => {
  const slug = req.params.slug;
  console.log(`Ecco il post con slug ${slug}`);
  const post = posts.find((p) => p.slug === slug);
  res.json(post);
});

//store
router.post("/", (req, res) => {
  res.send("Crea un nuovo post!");
});

//update
router.put("/:slug", (req, res) => {
  const slug = req.params.slug;
  res.send(`Aggiorna il post con slug ${slug}`);
});

//modify
router.patch("/:slug", (req, res) => {
  const slug = req.params.slug;
  res.send(`Modifica il post con slug ${slug}`);
});

//destroy
router.delete("/:slug", (req, res) => {
  const slug = req.params.slug;
  res.send(`Elimina il post con slug ${slug}`);
});

module.exports = router;
