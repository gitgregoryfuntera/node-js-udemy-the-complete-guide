const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user-controller");
router.get(`/`, userController.getUsers);

module.exports = router;
