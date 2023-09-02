// const fs = require("fs");
// const path = require("path");
// const pathUtils = require("../util/path");
// const WorkOrder = require("./work-order-model");
// const filePath = path.join(pathUtils, "data", "users.json");
// const db = require("../util/database");
// class User {
//   constructor(id, user, title, age) {
//     this.id = id;
//     this.user = user;
//     this.title = title;
//     this.age = age;
//   }

//   async save() {
//     try {
//       await db.execute(
//         "INSERT INTO users (user, title, age) VALUES (?, ?, ?)",
//         [this.user, this.title, this.age]
//       );
//     } catch (e) {
//       console.log("🚀 ~ file: user-model.js:30 ~ User ~ save ~ e:", e);
//     }
//   }

//   async update() {
//     let users = [];
//     try {
//       const data = await fs.promises.readFile(filePath, "utf-8");
//       users = JSON.parse(data) || [];
//       const tempUsers = [...users].map((user) => {
//         if (user.id === this.id) {
//           user.user = this.user;
//           user.title = this.title;
//           user.age = this.age;
//         }
//         return user;
//       });
//       fs.writeFile(filePath, JSON.stringify(tempUsers), (err) =>
//         console.log(err)
//       );
//     } catch (e) {
//       users.push(this);
//       fs.writeFile(filePath, JSON.stringify(users), (err) => console.log(err));
//     }
//   }

//   static async fetchAll() {
//     try {
//       const [data, metadata] = await db.execute("SELECT * FROM users");
//       return data;
//     } catch (e) {
//       console.log("🚀 ~ file: user-model.js:59 ~ User ~ fetchAll ~ e:", e);
//       return [];
//     }
//   }

//   static async fetchById(id) {
//     try {
//       const [data, metadata] = await db.execute(
//         "SELECT * FROM users WHERE users.id = ?",
//         [id]
//       );
//       return data.at(0);
//     } catch (e) {
//       console.log("🚀 ~ file: user-model.js:62 ~ User ~ fetchById ~ e:", e);
//       return null;
//     }
//   }

//   static async deleteById(id) {
//     try {
//       const data = await fs.promises.readFile(filePath, "utf-8");
//       const users = JSON.parse(data) || [];
//       const modifiedData = users.filter((user) => user.id !== id);
//       fs.writeFile(filePath, JSON.stringify(modifiedData), (err) =>
//         console.log(err)
//       );
//       await WorkOrder.deleteWorkOrderByUserId({
//         userId: id,
//       }); // delete associated work order of the user
//     } catch (e) {
//       console.log(e);
//     }
//   }
// }

// module.exports = User;

const { DataTypes } = require("sequelize");

const { sequelize } = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User
