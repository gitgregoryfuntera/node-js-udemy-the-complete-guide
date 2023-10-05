const User = require("../models/user-model");
const WorkOrderLookups = require("../models/work-order-lookup-model");

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
  try {
    const result = await User.findByPk(userId);
    const workOrderLookups = await WorkOrderLookups.findAll()
    res.render("users/user-details", {
      docTitle: `${result?.user}`,
      workOrderLookups,
      user: result,
      path: `/users/user-details`,
    });
  } catch (e) {
    console.log("🚀 ~ file: user-controller.js:38 ~ getUser ~ e:", e);
  }
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
  const userData = await User.findByPk(userId);
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
  try {
    const userVal = await User.findByPk(id)
    if (userVal) {
      userVal.user = user
      userVal.title = title
      userVal.age = age
      const result = await userVal.save()
      console.log("🚀 ~ file: user-controller.js:71 ~ postEditUser ~ result:", result);
      res.redirect("/"); 
    }
  } catch(e) {
    console.log("🚀 ~ file: user-controller.js:67 ~ postEditUser ~ e:", e);
    res.redirect("/"); 
  }

};

const postDeleteUser = async (req, res, next) => {
  const {
    body: { id },
  } = req;
  const user = await User.findByPk(id)
  await user.destroy()
  res.redirect("/");
};

const getUserList = async (req, res, next) => {
  const users = await User.findAll()
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
