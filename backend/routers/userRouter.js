const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const User = require ("../models/users");


const userrouter = express.Router();
userrouter.get('/createadmin', expressAsyncHandler(async(req, res)=>{
    try{
        const users = new User({
            name: 'admin',
            email: 'admin@example.com',
            password:'admin',
            isAdmin: true,
        });
        const createduser = await users.save();
        res.send(createduser);
    } catch(err) {
        res.status(500).send({mesaage: err.message});
    }
   
}));
userrouter.post('/signin', expressAsyncHandler( async(req, res) =>{
    console.log(req.body.email);
      const signinuser = await User.findOne({
        email: req.body.email,
        // password: req.body.password,
    });
      if(!signinuser){
        res.status(401).send({
            message: 'Invalid Email or Password',
        });
    } else{
        res.send({
            _id: signinuser._id,
            name: signinuser.name,
            email: signinuser.email,
        })
    }
// console.log(req.body.email);
//     try{
//         const users = new User({
//             name: 'a',
//             email: req.body.email,
//             password:req.body.password,
//             isAdmin: false,
//         });
//         const createduser = await users.save();
//         res.send(createduser);
//     } catch(err) {
//         res.status(500).send({mesaage: err.message});
//     }
    // const signinuser = await User.findOne({
    //     email: req.body.email,
    //     password: req.body.password,
    // });
    // console.log(signinuser);
    // if(!signinuser){
    //     res.status(401).send({
    //         message: 'Invalid Email or Password',
    //     });
    // } else{
    //     res.send({
    //         _id: signinuser._id,
    //         name: signinuser.name,
    //         email: signinuser.email,
    //         isAdmin: signinuser.isAdmin,
    //     })
    // }
}));
module.exports= userrouter;