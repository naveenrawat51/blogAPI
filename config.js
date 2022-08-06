const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  connection_str: process.env.CONNECTION_STRING,
  jwt_secret: process.env.JWT_SECRET,
  port: process.env.PORT,
};
