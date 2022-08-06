const express = require("express");
const articleRoutes = require("./routes/article");
const userRoutes = require("./routes/user");
const { mongoConnect } = require("./util/database");

const app = express();
// to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use((req, res, next) => {
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
});

app.use("/api", articleRoutes);
app.use("/api", userRoutes);

mongoConnect(() => {
  app.listen(4000);
});
