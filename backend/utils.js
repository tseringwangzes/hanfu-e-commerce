//import { config } from "dotenv";
// const {config} = require("dotenv");
// var JWT_SECRET = "somethingsecret";
// console.log(config.JWT_SECRET);

const generateToken= (user)=>{
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email:user.email,
        isAdmin: user.isAdmin,

    },
    config.JWT_SECRET
  
    );

};
module.exports = generateToken;