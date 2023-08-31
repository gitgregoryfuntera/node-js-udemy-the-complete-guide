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
  const {
    params: { userId },
  } = req;
  const userData = await User.fetchById(userId);
  res.render("users/user-details", {
    docTitle: `${userData.user}`,
    user: userData,
    path: `/users/user-details`,
  });
};

const getAddUser = (req, res, next) => {
  res.render("admin/add-user", {
    docTitle: "Add User",
    path: "/admin/add-user",
  });
};

const getEditUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  const userData = await User.fetchById(userId);
  res.render("admin/edit-user", {
    docTitle: "Edit User",
    path: "/admin/edit-user",
    user: userData,
  });
};

const postEditUser = async (req, res, next) => {
  const {
    body: { id, user, title, age },
  } = req;
  const userModel = new User(id, user, title, age);
  await userModel.update();
  res.redirect("/");
};

const postDeleteUser = async (req, res, next) => {
  const {
    body: { id },
  } = req;
  await User.deleteById(id)
  res.redirect("/");
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
  const userModel = new User(null, user, title, age);
  await userModel.save();
  res.redirect("/");
};

module.exports = {
  getAddUser,
  postAddUser,
  postDeleteUser,
  getUsers,
  getUser,
  getEditUser,
  postEditUser,
  getUserList,
};