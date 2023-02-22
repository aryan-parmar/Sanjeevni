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
const get = require("./src/v1/routes/get.route");
const chat = require("./src/v1/routes/chat.route");
var cors = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public", { maxAge: 3600000 }));
app.use(function (req, res, next) {
  res.setHeader("x-powered-by", "sanjeevni@1.1");
  next();
});
app.use(cors({
    origin: ['http://192.168.1.8:3000', 'http://192.168.1.8:3001'],
    credentials: true
}))
// const allowedOrigins = [
//   "http:localhost:3000",
//   "http:localhost:3001",
// ];q   
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//   })
// );
app.get('/', (req, res) => {
  res.json({'message': 'Server up'});
})
app.use('/api/auth/', auth);
app.use('/api/update/', update);
app.use('/api/get/', get);
app.use('/api/chat/', chat);

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.8:${port}`);
});
