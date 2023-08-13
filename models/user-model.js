const fs = require("fs");
const path = require("path");
const pathUtils = require("../util/path");
const WorkOrder = require("./work-order-model");
const filePath = path.join(pathUtils, "data", "users.json");

class User {
  constructor(id, user, title, age) {
    this.id = id;
    this.user = user;
    this.title = title;
    this.age = age;
  }

  async save() {
    let users = [];
    this.id = new Date().getTime().toString();
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      users = JSON.parse(data) || [];
      users.push(this);
      fs.writeFile(filePath, JSON.stringify(users), (err) => console.log(err));
    } catch (e) {
      users.push(this);
      fs.writeFile(filePath, JSON.stringify(users), (err) => console.log(err));
    }
  }

  async update() {
    let users = [];
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      users = JSON.parse(data) || [];
      const tempUsers = [...users].map((user) => {
        if (user.id === this.id) {
          user.user = this.user
          user.title = this.title
          user.age = this.age
        }
        return user
      })
      fs.writeFile(filePath, JSON.stringify(tempUsers), (err) => console.log(err));
    } catch (e) {
      users.push(this);
      fs.writeFile(filePath, JSON.stringify(users), (err) => console.log(err));
    }
  }

  static async fetchAll() {
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      return JSON.parse(data) || [];
    } catch (e) {
      return [];
    }
  }

  static async fetchById(id) {
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      const parsedData = JSON.parse(data) || [];
      return parsedData.find((d) => d.id === id);
    } catch (e) {
      return null;
    }
  }

  static async deleteById(id) {
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      const users = JSON.parse(data) || [];
      const modifiedData = users.filter((user) => user.id !== id)
      fs.writeFile(filePath, JSON.stringify(modifiedData), (err) => console.log(err));
      await WorkOrder.deleteWorkOrderByUserId({
        userId: id
      }) // delete associated work order of the user
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = User;
