const nanoid = require('nanoid');
const {URL} = require('../models/url');
async function handleGenerateShortUrl(req,res){
    const shortUrl = nanoid(8)
    const redirectUrl = req.body.url ? req.body.url : (()=>{
       return  res.status(400).json({error:'url is required'})
    });
    await URL.create({
        shortId: shortUrl,
        redirectId: redirectUrl,
        visitHistory: []
    })
    return res.json({id: shortId})
}

module.exports = handleGenerateShortUrl