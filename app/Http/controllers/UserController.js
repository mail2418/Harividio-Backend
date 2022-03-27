const User = require("../../Models/Users");

const UserController = async(req,res)=>{
    try{
        const {username, email, password} = req.body;
        const newUser = new User({
            username,email,password
        })

        await newUser.save();
        res.json(newUser);
    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
}

module.exports = UserController;