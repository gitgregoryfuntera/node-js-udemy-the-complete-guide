const http = require("http");
const fs = require("fs")

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { headers, method, url } = req;

  if (url === "/") {
    res.setHeader(`Content-Type`, "text/html");
    res.write(
      `<html>
          <head>
            <title>Enter Message</title>
          </head>
          <body>
            <form action="/message" method="POST">
              <input type="text" placeholder="enter message here..."/>
              </br>
              </br>
              <button type="submit">submit</button>
            </form>
          </body>
       </html>
      `
    );
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY TXT')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
        <head>
        <title>My First Title</title></head>
        <body>
            <h1>Hello from Node JS</h1>
        </body>
    </html>`);
  res.end();
});

server.listen(PORT);
