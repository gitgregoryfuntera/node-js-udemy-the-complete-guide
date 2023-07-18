const path = require('path')
const { Router } = require("express");
const router = Router();
const userController = require('../controllers/user-controller')

router.get(`/add-user`, userController.getAddUser);

router.post(`/add-user`, userController.postAddUser);

module.exports = { router }
