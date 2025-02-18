const express = require("express");
const urlRoute = require("./routes/url");
const {mongooseConnectionHandler} = require('./connect')
const app = express();
const port = 8001;
app.use("/url", urlRoute);

app.listen(port, () => console.log(`App listening at ${port}`));
