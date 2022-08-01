const express = require("express");
const adminRoutes = require("./routes/admin");

const app = express();
// to parse the body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(adminRoutes);

app.listen(3000);
