const express = require("express");
const articleRoutes = require("./routes/article");
const { mongoConnect } = require("./util/database");

const app = express();
// to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", articleRoutes);

mongoConnect(() => {
  app.listen(4000);
});
