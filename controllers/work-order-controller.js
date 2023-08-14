const User = require("../models/user-model");
const WorkOrder = require("../models/work-order-model");

const getWorkOrders = async (req, res, next) => {
  const workOrders = await WorkOrder.getWorkOrders()
  let userWorkOrders = []
  for(let workOrder of workOrders) {
    const userDetail = await User.fetchById(workOrder.userId)
    userWorkOrders.push({
      ...userDetail,
      ...workOrder
    })
  }

  res.render("users/work-order", {
    docTitle: "Work Orders",
    path: "/work-order",
    workOrders: userWorkOrders,
  });
};

const postAddWorkOrder = async (req, res, next) => {
  const {
    body: { user_id, work_order_id, work_order_name },
  } = req;
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
