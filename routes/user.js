const express = require('express')
const router = express.Router();
const {handleUserSignup} = require('../controllers/user')

router.get('/signup', (req,res)=>{
    res.render('signup')
})
router.post('/', handleUserSignup)

module.exports = router