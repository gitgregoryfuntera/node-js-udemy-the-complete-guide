const fs = require("fs");

const routesHandler = (req, res) => {
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
                <input type="text" name="message" placeholder="enter message here..."/>
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

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
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
};


module.exports = {
    routesHandler
}