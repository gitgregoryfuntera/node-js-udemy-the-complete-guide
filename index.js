const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const notFoundController = require('./controllers/error-controller')
const PORT = 8080;

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes.router);

app.use(userRoutes);

app.use(express.static(path.join(__dirname, 'public')))

app.use(notFoundController.getNotFound);

app.listen(PORT, () => {
  console.log(`App is listening to PORT: ${PORT}`);
});
