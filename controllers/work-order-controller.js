const WorkOrder = require("../models/work-order-model");

const getWorkOrders = async (req, res, next) => {
  res.render("users/work-order", {
    docTitle: "Work Orders",
    path: "/work-order",
  });
};

const postAddWorkOrder = async (req, res, next) => {
  const {
    body: { user_id, work_order_id, work_order_name },
  } = req;
  console.log(
    "🚀 ~ file: work-order-controller.js:11 ~ postAddWorkOrder ~ work_order_name:",
    work_order_name
  );
  console.log(
    "🚀 ~ file: work-order-controller.js:11 ~ postAddWorkOrder ~ work_order_id:",
    work_order_id
  );
  console.log(
    "🚀 ~ file: work-order-controller.js:11 ~ postAddWorkOrder ~ user_id:",
    user_id
  );
  await WorkOrder.saveUsersWorkOrder({
    workOrderId: work_order_id,
    userId: user_id,
    workOrderName: work_order_name,
  });
  res.render("users/work-order", {
    docTitle: "Work Orders",
    path: "/work-order",
  });
};

module.exports = {
  getWorkOrders,
  postAddWorkOrder,
};
