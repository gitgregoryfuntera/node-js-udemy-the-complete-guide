const User = require("../models/user-model");

const getUsers = async (req, res, next) => {
  const users = await User.fetchAll();
  res.render("users/index", {
    users: users,
    docTitle: "Users",
    hasUsers: users.length > 0,
    path: "/",
    userPath: true,
  });
};

const getUser = async (req, res, next) => {
  const { params: { userId } } = req
  console.log("🚀 ~ file: user-controller.js:16 ~ getUser ~ userId:", userId);
  res.redirect('/')
}

const getAddUser = (req, res, next) => {
  res.render("admin/add-user", {
    docTitle: "Add User",
    path: "/admin/add-user",
  });
};

const getEditUser = (req, res, next) => {
  res.render("admin/edit-user", {
    docTitle: "Edit User",
    path: "/admin/edit-user",
  });
};

const getUserList = async (req, res, next) => {
  const users = await User.fetchAll();
  res.render("admin/user-list", {
    docTitle: "User List",
    users: users,
    path: "/admin/user-list",
  });
};

const postAddUser = async (req, res, next) => {
  const {
    body: { user, title, age },
  } = req;
  const userModel = new User(user, title, age);
  userModel.save();
  res.redirect("/");
};

module.exports = {
  getAddUser,
  postAddUser,
  getUsers,
  getUser,
  getEditUser,
  getUserList,
};
