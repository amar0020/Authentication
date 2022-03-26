const express = require("express");
const connect = require("./config/db");
const postcontroller = require("./controller/post.controller");

const {register,login} = require("./controller/auth.controller")


const app = express()

app.use(express.json());

app.use("/post", postcontroller)

app.post("/register",register);
app.post("/login",login);




app.listen(4000, async ()=>{
    try{
        await connect()
        console.log("listening f")
    }
    catch(err){
        console.log(err.message)
    }
})

 