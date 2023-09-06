const User = require("../models/user-model");

const getUsers = async (req, res, next) => {
  try {
    const results = await User.findAll();
    res.render("users/index", {
      users: results,
      docTitle: "Users",
      hasUsers: results.length > 0,
      path: "/",
      userPath: true,
    });
  } catch (e) {
    console.log("🚀 ~ file: user-controller.js:8 ~ getUsers ~ e:", e);
    res.render("users/index", {
      users: [],
      docTitle: "Users",
      hasUsers: false,
      path: "/",
      userPath: true,
    });
  }
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
  await User.deleteById(id);
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
  try {
    await User.create({
      user,
      title,
      age,
    });
    res.redirect("/");
  } catch (e) {
    console.log("🚀 ~ file: user-controller.js:83 ~ postAddUser ~ e:", e);
  }
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
