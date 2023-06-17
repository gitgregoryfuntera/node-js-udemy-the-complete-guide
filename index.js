const express = require("express");
const PORT = 8080;

const app = express();

// app.use((req, res, next) => {
//   console.log('First Middleware')
//   next()
// })

// app.use((req, res, next) => {
//   console.log('Second Middleware')
//   res.send(`<h2>Second Middleware</h2>`)
// })

app.use(`/users`, (req, res, next) => {
  console.log(`users`);
  res.send(`<h1>Hello Users</h1>`);
});

app.use(`/`, (req, res, next) => {
  console.log(`home`);
  res.send(`<h1>Hello Home</h1>`);
});



app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
