const express = require("express");
const bodyParser = require("body-parser")
const adminRoutes = require("./routes/admin")
const userRoutes = require("./routes/user")
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded())

app.use(adminRoutes)

app.use(userRoutes)

app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
