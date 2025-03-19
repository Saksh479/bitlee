const URL = require('../models/url');
async function handleGenerateShortUrl(req,res){
    const { nanoid } = await import('nanoid');
    const shortUrl = nanoid(8)
    const body = req.body
    console.log(body)
    const redirectUrl = body.url ? body.url : (()=>{
       return  res.status(400).json({error:'url is required'})
    });
    await URL.create({
        shortId: shortUrl,
        redirectId: redirectUrl,
        visitHistory: []
    })
    
    return res.json({ id: shortUrl, link: `http://localhost:8001/${shortUrl}` });
}


async function handleGetAnalytics(shortId){
    const result = await URL.findOne({shortId: shortId})
    const clicks = result.visitHistory.length 
    return clicks;
}

module.exports = { handleGenerateShortUrl, handleGetAnalytics };
