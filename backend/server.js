const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("backend is running");
});

app.listen(5000, () => {
  console.log("server running at http://localhost:3000");
});


