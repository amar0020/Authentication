const User = require("../module/user.model");

const jwt = require("jsonwebtoken");
require('dotenv').config()
const newtoken= (user)=>{
    return jwt.sign({user},process.env.mysecret)
}





const register = async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})

        if(user){
            return res.send({message:"email already exists"})
        }

        const newuser = await User.create(req.body)

        const token = newtoken(newuser) 

        return res.send({newuser,token})

       
    }
    catch(err){
        res.send("error")
    }
}

const login = async (req,res)=>{
    try{
        const data= await User.findOne({email:req.body.email});

        const match= User.checkPassword(req.body.password)

        if(!match){
            res.send("Wrong email or password")
        }
        if(!User.checkPassword){
            res.send("wrong emial or password")
        }

        const token = newtoken(newuser)

        return res.send({data,token})
            
    }
    catch{
        res.send("error")
    }
}


module.exports = {register,login}