const users = [];

const getUsers = (req, res, next) => {
  res.render("user", {
    users: users,
    docTitle: "Users",
    hasUsers: users.length > 0,
    path: "/",
    userPath: true,
  });
};

const getAddUser = (req, res, next) => {
  res.render("add-user", {
    docTitle: "Add User",
    path: "/admin/add-user",
    addUserPath: true,
  });
};

const postAddUser = (req, res, next) => {
  const {
    body: { user },
  } = req;
  users.push({ user });
  res.redirect("/");
};

module.exports = {
  getAddUser,
  postAddUser,
  getUsers
};
