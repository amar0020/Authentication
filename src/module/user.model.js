const mongoose = require("mongoose");

const bcrypt = require("bcrypt")

const userSchema= mongoose.Schema({
    name:{type:String, required:true,minLength:2,maxLength:25},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}

},
{
    timestamps:true,
    versionKey:false
})

userSchema.pre("save", function (next){
    const hash = bcrypt.hashSync(this.password,8);
    this.password = hash;
    return next();
})


userSchema.method.checkPassword = (password)=>{
    return bcrypt.compareSync(password,this.password)
}
const User = mongoose.model("user",userSchema)

module.exports = User