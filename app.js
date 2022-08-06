const express = require("express");
const dotenv = require("dotenv");
const { mongoConnect } = require("./util/database");
const session = require("express-session");
const { setCors } = require("./util/middleware");
const MongoDBStore = require("connect-mongodb-session")(session);

const articleRoutes = require("./routes/article");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const app = express();
dotenv.config();
const store = new MongoDBStore({
  uri: process.env.CONNECTION_STRING,
});
// to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// express session middleware
app.use(
  session({ secret: "my secret", resave: false, saveUninitialized: false })
);
// to allow all the connections
app.use(setCors);

// application routes
app.use("/api", articleRoutes);
app.use("/api", userRoutes);
app.use("/api", authRoutes);

mongoConnect(() => {
  app.listen(process.env.PORT);
});
