const express = require("express");
const bodyParser = require("body-parser")
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded())

app.use(`/add-users`, (req, res, next) => {
  res.send(`
  <form method="POST" action="/users" >
    <input type="text" name="user"/>
    <button type="submit">Submit</button>
  </form>
  `);
});

app.use(`/users`, (req, res, next) => {
  res.send(`<h1>Hello Users</h1>`);
});

app.use(`/`, (req, res, next) => {
  res.send(`<h1>Hello Home</h1>`);
});

app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
