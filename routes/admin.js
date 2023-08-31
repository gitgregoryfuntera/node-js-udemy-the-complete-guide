const { Router } = require("express");
const router = Router();
const userController = require('../controllers/user-controller')

router.post(`/delete-user`, userController.postDeleteUser);

router.get(`/add-user`, userController.getAddUser);

router.post(`/add-user`, userController.postAddUser);

router.get(`/edit-user/:userId`, userController.getEditUser);

router.post(`/edit-user/`, userController.postEditUser);

router.get(`/user-list`, userController.getUserList);

module.exports = { router }