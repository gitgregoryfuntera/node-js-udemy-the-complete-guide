const User = require("../models/user-model");
const WorkOrder = require("../models/work-order-model");

const getWorkOrders = async (req, res, next) => {
  // const workOrders = await WorkOrder.getWorkOrders();
  // let userWorkOrders = [];
  // for (let workOrder of workOrders) {
  //   const userDetail = await User.fetchById(workOrder.userId);
  //   userWorkOrders.push({
  //     ...userDetail,
  //     ...workOrder,
  //   });
  // }

  res.render("users/work-order", {
    docTitle: "Work Orders",
    path: "/work-order",
    workOrders: [],
  });
};

const postAddWorkOrder = async (req, res, next) => {
  const {
    body: { user_id, work_order_id, work_order_name },
  } = req;
  try {
    await WorkOrder.create({
      workOrderName: work_order_name,
      userId: user_id
    })
    res.redirect("/work-order");
  } catch(e) {
    console.log("🚀 ~ file: work-order-controller.js:33 ~ postAddWorkOrder ~ e:", e);
    res.redirect("/work-order");
  }
};

const postDeleteWorkOrder = async (req, res, next) => {
  const {
    body: { work_order_id },
  } = req;
  await WorkOrder.deleteWorkOrderById({
    workOrderId: work_order_id,
  });
  res.redirect("/work-order");
};

module.exports = {
  getWorkOrders,
  postAddWorkOrder,
  postDeleteWorkOrder,
};
