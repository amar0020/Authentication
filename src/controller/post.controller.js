const express = require("express");

const router = express.Router();

const authentication = require("../middleware/authentication")

const Post= require("../module/post.model")






router.post("",authentication, (req,res)=>{
    try
    {  

    const data = Post.create(req.body)

    res.send(data)

    }

    catch(err){
        res.send(err.message);
    }
})

router.patch("/:id",authentication, async (res,req)=>{
    const data = await Post.findByIdAndUpdate(id, {title:"otherbook"})
})

router.patch("/:id",authentication, async (res,req)=>{
    const data = await Post.findByIdAndDelete(id)
})

router








module.exports = router