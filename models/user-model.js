const fs = require("fs");
const path = require("path");
const pathUtils = require("../util/path");
const filePath = path.join(pathUtils, "data", "users.json");

class User {
  constructor(user) {
    this.user = user;
  }

  save() {
    let users = [];
    fs.readFile(filePath, (err, file) => {
      try {
        users = JSON.parse(file) || [];
        users.push(this);
        fs.writeFile(filePath, JSON.stringify(users), (err) =>
          console.log(err)
        );
      } catch (err) {
        users.push(this);
        fs.writeFile(filePath, JSON.stringify(users), (err) =>
          console.log(err)
        );
      }
    });
  }

  static async fetchAll () {
    try {
      const data = await fs.promises.readFile(filePath, 'utf-8')
      return JSON.parse(data) || []
    } catch(e) {
      return []
    } 
  }
}

module.exports = User;
