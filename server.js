const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("./client/dist"));

app.get("/api", (req, res) => {
  res.send("hello");
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send("Listenned");
});

app.listen(4000, () => {
  console.log("Serveur listening on port 4000");
});
