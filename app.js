console.log("Hello node!");

const express = require("express");
const app = expredss();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("root");
  res.send("Hello world!");
});
