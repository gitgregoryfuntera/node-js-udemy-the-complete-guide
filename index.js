const http = require("http");
const express = require("express");
const PORT = 8080;

const app = express();

const server = http.createServer(app);

app.use((req, res, next) => {
    console.log(`middleware`)
    next()
})

app.use((req, res, next) => {
    console.log(`middleware another`)
    res.send(`<h1>Hello from Node</h1>`)
})

server.listen(PORT, () => {
  console.log(`server listens to port ${PORT}`);
});
