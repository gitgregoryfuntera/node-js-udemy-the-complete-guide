const express = require("express");
const PORT = 8080;

const app = express();

app.use((req, res, next) => {
  console.log(`middleware`);
  next();
});

app.use((req, res, next) => {
  console.log(`middleware another`);
  res.send(`<h1>Hello from Node</h1>`);
});

app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
