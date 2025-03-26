const express = require('express')
const router = express.Router();
const URL = require("../models/url") 

router.get('/',async(req,res)=>{
    if(!req.user) return res.redirect("/login")
    const user = req.user
    const allUrls = await URL.find({createdBy: req.user._id}) 
    res.render('home',{
      allUrls,
      user
    })
  })


router.get('/signup', (req,res)=>{
    return res.render('signup')
 });

router.get('/login', (req,res)=>{
    return res.render('login')
});

router.get('/logout', (req, res) => {
  res.clearCookie('uid'); 
  res.redirect('/login'); 
});

router.get("/:shortId", async (req, res) => {
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

module.exports = router