const users = [];

class User {
  constructor(user) {
    this.user = user;
  }

  save() {
    users.push(this);
  }

  static fetchAll() {
    return users;
  }
}

module.exports = User;
