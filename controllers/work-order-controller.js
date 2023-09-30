const { Op } = require("sequelize");
const Task = require("../models/task-model");
const User = require("../models/user-model");
const WorkOrder = require("../models/work-order-model");

const getWorkOrders = async (req, res, next) => {
  const workOrders = await WorkOrder.findAll();
  let constructedWO = [];
  for (let workOrder of workOrders) {
    const {
      id,
      workOrderName,
      userId,
      workorderlookupId,
      createdAt,
      updatedAt,
    } = workOrder;
    const user = await User.findByPk(userId);
    const { user: userName, title: userTitle } = user;
    const availableTasks = await Task.findAll({
      where: {
        userId: {
          [Op.ne]: userId
        }
      }
    })
    console.log("🚀 ~ file: work-order-controller.js:27 ~ getWorkOrders ~ availableTasks:", availableTasks);
    if (constructedWO?.length === 0) {
      constructedWO.push({
        id,
        userId,
        userName,
        userTitle,
        workOrderName,
        workorderlookupId,
        workOrderDispatchCount: 1,
        createdAt,
        updatedAt,
        availableTasks,
      });
    } else {
      const existingWorkOrder = constructedWO.find(
        (workOrder) =>
          workOrder.workorderlookupId === workorderlookupId &&
          workOrder.userId === userId
      );
      if (existingWorkOrder) {
        constructedWO = constructedWO.map((value) => {
          if (value.workorderlookupId === workorderlookupId) {
            value.workOrderDispatchCount = value.workOrderDispatchCount + 1;
          }
          return {
            ...value,
          };
        });
      } else {
        constructedWO.push({
          id,
          userId,
          userName,
          userTitle,
          workOrderName,
          workorderlookupId,
          workOrderDispatchCount: 1,
          createdAt,
          updatedAt,
          availableTasks
        });
      }
    }
  }
  res.render("users/work-order", {
    docTitle: "Work Orders",
    path: "/work-order",
    workOrders: constructedWO,
  });
};

const postAddWorkOrder = async (req, res, next) => {
  const {
    body: { user_id, work_order_look_up_id, work_order_name },
  } = req;
  try {
    await WorkOrder.create({
      workOrderName: work_order_name,
      userId: user_id,
      workorderlookupId: work_order_look_up_id,
    });
    res.redirect("/work-order");
  } catch (e) {
    console.log(
      "🚀 ~ file: work-order-controller.js:33 ~ postAddWorkOrder ~ e:",
      e
    );
    res.redirect("/work-order");
  }
};

const postDeleteWorkOrder = async (req, res, next) => {
  const {
    body: { work_order_user_id, work_order_lookup_id },
  } = req;
  try {
    const userWorkOrders = await WorkOrder.findAll({
      where: {
        workorderlookupId: work_order_lookup_id,
        userId: work_order_user_id,
      },
    });
    await userWorkOrders[0].destroy();
    res.redirect("/work-order");
  } catch (e) {
    console.log(
      "🚀 ~ file: work-order-controller.js:99 ~ postDeleteWorkOrder ~ e:",
      e
    );
    res.redirect("/work-order");
  }
};

module.exports = {
  getWorkOrders,
  postAddWorkOrder,
  postDeleteWorkOrder,
};
