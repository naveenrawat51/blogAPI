const express = require("express");
const { port } = require("./config");
const { mongoConnect } = require("./util/database");
const { setCors } = require("./util/middleware");

const articleRoutes = require("./routes/article");
const userRoutes = require("./routes/auth");
const app = express();

// to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// to allow all the connections
app.use(setCors);

// application routes
app.use("/api", articleRoutes);
app.use("/api", userRoutes);

mongoConnect(() => {
  app.listen(port);
});
