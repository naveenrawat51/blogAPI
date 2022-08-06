const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config");

exports.setCors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,PATCH,DELETE,OPTIONS"
  );
  next();
};

exports.generateAccessToken = (user) => {
  const { username, email, phone } = user;
  return jwt.sign({ username, email, phone }, jwt_secret, {
    expiresIn: "20h",
  });
};
