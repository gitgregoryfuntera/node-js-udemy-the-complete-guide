const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user-controller");
const taskController = require("../controllers/task-controller");
const workOrderController = require("../controllers/work-order-controller");

router.get("/", userController.getUsers);
router.get("/task", taskController.getTasks);
router.get("/work-order", workOrderController.getWorkOrders);
router.post("/work-order", workOrderController.postAddWorkOrder);
router.get("/users/:userId", userController.getUser)
router.get("/users/:userId", userController.getUser)

module.exports = router;
