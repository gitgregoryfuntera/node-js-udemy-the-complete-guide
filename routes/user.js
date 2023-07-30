const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user-controller");
const taskController = require("../controllers/task-controller");
const workOrderController = require("../controllers/work-order-controller");

router.get(`/`, userController.getUsers);
router.get("/task", taskController.getTasks);
router.get("/work-order", workOrderController.getWorkOrders);

module.exports = router;
