const express = require("express");
const app = express();
const PORT = 3002;
app.listen(PORT, (req, res) => {
  console.log(`server run on port :${PORT}`);
});

app.post("/insert", (req, res) => {
  console.log(req.body);
  res.send("hii");
});
