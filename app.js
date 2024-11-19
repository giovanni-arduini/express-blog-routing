console.log("Hello node!");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  //   console.log("root");
  res.send("Hello world!");
});

// CRUD

//index
app.get("/posts", (req, res) => {
  res.send("Ecco la lista dei post");
});

//show
app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Ecco il post con id ${id}`);
});

//store

//update

//modify

//destroy

app.listen(port, () => {
  console.log("Server is listening!");
});
