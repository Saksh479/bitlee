const nanoid = require('nanoid');
const url = require('../models/url');
async function handleGenerateShortUrl(req,res){
    const shortUrl = nanoid(8)
    const redirectUrl = req.body.url ? req.body.url : (()=>{
       return  res.status(400).json({error:'url is required'})
    });
    await url.create({
        shortId: shortUrl,
        redirectId: redirectUrl,
        visitHistory: []
    })
}