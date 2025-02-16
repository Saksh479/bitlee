const express = require('express');

const router = express.Router()

//post /url - generate short url example.com/random-id
//get /:id - redirects the user to the og url
// get url/analytics/:id returns the clicks

router.post('/',handleGenerateShortUrl)