async function handleUserSignup (req,res){
    const {name,email,password} = req.body
    const userInfo = await User.create({
        name,
        email,
        password
    })
    return res.json(userInfo)
}