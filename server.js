const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/send", require("./routes/contactRouter"));

app.use(express.static(path.join(__dirname, "client", "build")));

app.use((err, req, res, next) => {
  console.error(err);
  return res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
