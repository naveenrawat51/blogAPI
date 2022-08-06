const User = require("../models/user");

exports.createUser = (req, res, next) => {
  const username = req.body.username;
  const phone = req.body.phone;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User(username, phone, email, password);

  user
    .save()
    .then((result) => {
      res.send(200);
    })
    .catch((err) => {
      console.log("Error Occured!!");
    });
};
