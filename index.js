const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes);

app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
