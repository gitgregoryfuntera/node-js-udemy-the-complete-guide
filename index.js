const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const handlebars = require('express-handlebars')
const PORT = 8080;

const app = express();

app.engine('hbs', handlebars())
app.set('view engine', 'hbs')
// app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes.router);

app.use(userRoutes);

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render('404')
});

app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
