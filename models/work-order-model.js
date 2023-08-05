const fs = require("fs");
const path = require("path");
const pathUtils = require("../util/path");
const filePath = path.join(pathUtils, "data", "users-work-orders.json");

class WorkOrder {
  static async saveUsersWorkOrder({ workOrderId, userId, workOrderName }) {
    let usersWorkOrders = [];
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      usersWorkOrders = JSON.parse(data) || [];
      const existingWorkOrderIndex = usersWorkOrders.findIndex(
        (workOrder) =>
          workOrder.workOrderId === workOrderId && workOrder.userId === userId
      );
      const tempUsersWorkOrders = [...usersWorkOrders];
      if (existingWorkOrderIndex >= 0) {
        const existingWorkOrder = usersWorkOrders[existingWorkOrderIndex];
        const modifiedExistingWorkOrder = {
          ...existingWorkOrder,
          dispatchCount: existingWorkOrder.dispatchCount + 1,
        };
        tempUsersWorkOrders[existingWorkOrderIndex] = modifiedExistingWorkOrder;
      } else {
        tempUsersWorkOrders.push({
          workOrderId,
          userId,
          workOrderName,
          dispatchCount: 1,
        });
      }
      fs.writeFile(filePath, JSON.stringify(tempUsersWorkOrders), (err) =>
        console.log(err)
      );
    } catch (e) {
      usersWorkOrders.push({
        workOrderId,
        userId,
        workOrderName,
        dispatchCount: 1,
      });
      fs.writeFile(filePath, JSON.stringify(usersWorkOrders), (err) =>
        console.log(err)
      );
    }
  }
}

module.exports = WorkOrder;
