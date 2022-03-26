
const jwt = require("jsonwebtoken");
require('dotenv').config()

// const verify = (token)=>{
//     return 

// })}


const authentication = async (req,res,next)=>{

    if(!req.headers.authorization)
        return res.send({message : "Authorization token not found or incorrect"});
    
    if(!req.headers.authorization.startsWith("Bearer "))
        return res.send({message : "Authorization token not found or incorrect"});

    const token = req.headers.authorization.trim().split(" ")[1]
    
    try
    {   let decoded;
        decoded =  jwt.verify(token, process.env.mysecret, (err,decoded) => {
            if(err) {res.send(err)}    
            else { return decoded}
    })}

    catch(err){
        res.send(err.message);
    }
    next()
}

module.exports = authentication















module.exports = authentication