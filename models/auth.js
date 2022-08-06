const { getDb } = require("../util/database");

class User {
  constructor(username, phone, email, password) {
    this.username = username;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => result)
      .catch((err) => {
        console.log(err);
      });
  }

  isUserExists(email) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ email: email })
      .then((user) => user)
      .catch((err) => {
        console.log(err);
      });
  }

  static findUser(email) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ email: email })
      .then((user) => user)
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
