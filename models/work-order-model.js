// const fs = require("fs");
// const path = require("path");
// const pathUtils = require("../util/path");
// const filePath = path.join(pathUtils, "data", "users-work-orders.json");

// class WorkOrder {
//   static async getWorkOrders() {
//     try {
//       const data = await fs.promises.readFile(filePath, "utf-8");
//       return JSON.parse(data) || [];
//     } catch (e) {
//       console.log(e);
//       return [];
//     }
//   }

//   static async deleteWorkOrderById({ workOrderId }) {
//     try {
//       const data = await fs.promises.readFile(filePath, "utf-8");
//       const userWorkOrders = JSON.parse(data) || [];
//       const filteredUserWorkOrders = userWorkOrders?.filter(
//         (workOrder) => workOrder.workOrderId !== workOrderId
//       );
//       fs.writeFile(filePath, JSON.stringify(filteredUserWorkOrders), (err) => {
//         throw Error(err);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   static async deleteWorkOrderByUserId({ userId }) {
//     try {
//       const data = await fs.promises.readFile(filePath, "utf-8");
//       const userWorkOrders = JSON.parse(data) || [];
//       const filteredUserWorkOrders = userWorkOrders?.filter(
//         (workOrder) => workOrder.userId !== userId
//       );
//       fs.writeFile(filePath, JSON.stringify(filteredUserWorkOrders), (err) => {
//         throw Error(err);
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   static async saveUsersWorkOrder({ workOrderId, userId, workOrderName }) {
//     let usersWorkOrders = [];
//     try {
//       const data = await fs.promises.readFile(filePath, "utf-8");
//       usersWorkOrders = JSON.parse(data) || [];
//       const existingWorkOrderIndex = usersWorkOrders.findIndex(
//         (workOrder) =>
//           workOrder.workOrderId === workOrderId && workOrder.userId === userId
//       );
//       const tempUsersWorkOrders = [...usersWorkOrders];
//       if (existingWorkOrderIndex >= 0) {
//         const existingWorkOrder = usersWorkOrders[existingWorkOrderIndex];
//         const modifiedExistingWorkOrder = {
//           ...existingWorkOrder,
//           dispatchCount: existingWorkOrder.dispatchCount + 1,
//         };
//         tempUsersWorkOrders[existingWorkOrderIndex] = modifiedExistingWorkOrder;
//       } else {
//         tempUsersWorkOrders.push({
//           workOrderId,
//           userId,
//           workOrderName,
//           dispatchCount: 1,
//         });
//       }
//       fs.writeFile(filePath, JSON.stringify(tempUsersWorkOrders), (err) =>
//         console.log(err)
//       );
//     } catch (e) {
//       usersWorkOrders.push({
//         workOrderId,
//         userId,
//         workOrderName,
//         dispatchCount: 1,
//       });
//       fs.writeFile(filePath, JSON.stringify(usersWorkOrders), (err) =>
//         console.log(err)
//       );
//     }
//   }
// }

// module.exports = WorkOrder;

const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

const WorkOrder = sequelize.define("workorder", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement,
    primaryKey,
    allowNull: false
  },
  workOrderName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }

})

module.exports = WorkOrder