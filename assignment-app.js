const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
  const { url, method, body } = req;
  const users = ["john1", "john2"];
  if (url === "/") {
    res.setHeader(`Content-Type`, "text/html");
    res.write(
      `<html>
                <head>
                    <title>Assignment App1s</title>
                </head>
                <body>
                    <h1>Home Page</h1>
                    <form method="POST" action="/create-users">
                        <input type="text" name="user"/>
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>`
    );
    return res.end();
  }

  if (url === "/users") {
    res.setHeader(`Content-Type`, "text/html");
    res.write(
      `<html>
                <head>
                    <title>Assignment App</title>
                </head>
                <body>
                    <ul>
                        ${users.map((user) => {
                          return `<li>${user}</li>`;
                        })}
                    </ul>
                </body>
            </html>`
    );
    return res.end();
  }

  if (url === "/create-users" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log("🚀 ~ file: assignment-app.js:56 ~ req.on ~ user:", user);
      res.statusCode = "302";
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
});

server.listen(PORT, () => {
  console.log(`server is listening to port: ${PORT}`);
});
