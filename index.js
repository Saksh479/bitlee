const express = require("express");
const cookieParser = require('cookie-parser')
const staticRoutes = require("./routes/staticRouter.js");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user.js");
const path = require("path");
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth')

const mongooseConnectionHandler = require("./connect.js");


const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use("/",checkAuth ,staticRoutes);
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);

const port = 8000;
mongooseConnectionHandler("mongodb://127.0.0.1:27017/URLs").then(
  console.log("Mongo DB connected")
);


app.listen(port, () => console.log(`App listening at ${port}`));
