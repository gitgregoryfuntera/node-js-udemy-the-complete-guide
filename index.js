const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const { sequelize } = require("./util/database");
const User = require("./models/user-model");
const WorkOrder = require("./models/work-order-model");
const WorkOrderLookups = require("./models/work-order-lookup-model");
const Task = require("./models/task-model");
const TaskItem = require("./models/task-item-model");

const PORT = 8080;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());

app.use("/admin", adminRoutes.router);

app.use(userRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404", {
    docTitle: "Page Not Found",
    path: "/404",
  });
});

User.hasOne(WorkOrder);
WorkOrder.belongsTo(User);

WorkOrderLookups.hasOne(WorkOrder);
WorkOrder.belongsTo(WorkOrderLookups);

Task.belongsTo(User)
User.hasMany(Task)
Task.belongsToMany(WorkOrderLookups, { through: TaskItem })
Task.belongsToMany(User, { through: TaskItem })

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`App is listening to PORT: ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("🚀 ~ file: index.js:36 ~ sequelize.sync ~ e:", e);
  });
