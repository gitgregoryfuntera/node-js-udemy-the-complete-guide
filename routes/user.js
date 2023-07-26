const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user-controller");
const taskController = require("../controllers/task-controller");
router.get(`/`, userController.getUsers);
router.get("/task", taskController.getTasks);

module.exports = router;
