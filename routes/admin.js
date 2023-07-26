const { Router } = require("express");
const router = Router();
const userController = require('../controllers/user-controller')

router.get(`/add-user`, userController.getAddUser);

router.post(`/add-user`, userController.postAddUser);

router.get(`/edit-user`, userController.getEditUser);

router.get(`/user-list`, userController.getUserList);

module.exports = { router }