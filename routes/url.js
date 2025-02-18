const express = require('express');
const {handleGenerateShortUrl} = require('../controllers/url');
const {handleGetAnalytics} = require('../controllers/url');
const router = express.Router()


//post /url - generate short url example.com/random-id
//get /:id - redirects the user to the og url
// get url/analytics/:id returns the clicks

router.post('/',handleGenerateShortUrl) 
router.get('/analytics/:shortId',async (req,res)=>{
    const shortId = req.params.shortId
    const clicks = await handleGetAnalytics(shortId)
    res.json({clicks})
})

module.exports = router