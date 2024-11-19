console.log("Hello node!");

const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./router/posts");

app.use(express.static("public"));

app.get("/", (req, res) => {
  //   console.log("root");
  res.send("Hello world!");
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log("Server is listening!");
});
