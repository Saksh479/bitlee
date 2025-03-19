const express = require("express");
const urlRoute = require("./routes/url");
const path = require('path');
const mongooseConnectionHandler = require("./connect.js");
const URL = require("./models/url"); 
const app = express();
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
const port = 8001;
mongooseConnectionHandler("mongodb://127.0.0.1:27017/URLs").then(
  console.log("Mongo DB connected")
);
app.use("/url", urlRoute);
app.use('/user', userRoute)
app.get('/',async(req,res)=>{
  const allUrls = await URL.find({}) 
  res.render('home',{
    allUrls
  })
})
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId: shortId },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  console.log(entry);
  res.redirect(entry.redirectId);
});
app.listen(port, () => console.log(`App listening at ${port}`));
