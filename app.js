const express = require("express");
const adminRoutes = require("./routes/admin");
const { mongoConnect } = require("./util/database");

const app = express();
// to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/admin", adminRoutes);

mongoConnect(() => {
  app.listen(4000);
});
