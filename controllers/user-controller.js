const User = require('../models/user-model')

const getUsers = (req, res, next) => {
  const users = User.fetchAll()
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
  const userModel = new User(user)
  userModel.save()
  res.redirect("/");
};

module.exports = {
  getAddUser,
  postAddUser,
  getUsers
};
