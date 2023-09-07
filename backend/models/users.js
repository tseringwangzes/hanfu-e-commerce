const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        index: true,
        unique: true,
    },
    password: String,
});
module.exports  = mongoose.model('User',userschema);
