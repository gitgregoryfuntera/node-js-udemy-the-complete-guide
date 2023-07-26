const getTasks = async (req, res, next) => {
  const tasks = [];
  res.render("users/task", {
    tasks,
    docTitle: "Tasks",
    path: "/task",
  });
};

module.exports = {
  getTasks,
};
