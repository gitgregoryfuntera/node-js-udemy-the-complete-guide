const http = require("http");
const { routesHandler } = require("./routes");

const PORT = 3000;

const server = http.createServer(routesHandler);

server.listen(PORT);
