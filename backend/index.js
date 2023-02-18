require("dotenv").config();
require("./src/v1/database/database.config").connect();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
var fileupload = require("express-fileupload");
app.use(fileupload());
const port = process.env.PORT || 4000;
const version = "v1";
const auth = require("./src/v1/routes/auth.route");
const update = require("./src/v1/routes/update.route");
var cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public", { maxAge: 3600000 }));
app.use(function (req, res, next) {
  res.setHeader("x-powered-by", "sanjeevni@1.1");
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Server up" });
});
app.use("/api/auth/", auth);
app.use('/api/update/', update);
// app.use('/api/profile/', profile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
