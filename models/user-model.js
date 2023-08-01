const fs = require("fs");
const path = require("path");
const pathUtils = require("../util/path");
const filePath = path.join(pathUtils, "data", "users.json");

class User {
  constructor(user, title, age) {
    this.user = user;
    this.title = title;
    this.age = age;
  }

  async save() {
    let users = [];
    this.id = new Date().getTime().toString()
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

  static async fetchAll() {
    try {
      const data = await fs.promises.readFile(filePath, "utf-8");
      return JSON.parse(data) || [];
    } catch (e) {
      return [];
    }
  }
}

module.exports = User;
