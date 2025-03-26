const User = require("../models/user");
const URL = require("../models/url");
const { v4: uuidv4 } = require('uuid');
const {setUserId} = require("../services/auth.js")
async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });
  console.log(user);
  return res.redirect("/login")
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email, password });
    if (!user) {
        console.log("error")
        return res.render('login', {
            error: "invalid username or password"
        });
    }
    const sessionId = uuidv4();
    setUserId(sessionId, user);
    res.cookie("uid", sessionId);
    return res.redirect("/")
}
module.exports = { handleUserSignup, handleUserLogin };
