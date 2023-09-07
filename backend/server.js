const express = require("express");
const bodyParser = require("body-parser");
const data = require('./data');
const cors = require('cors');
const mongoose = require('mongoose');
const userrouter  = require("./routers/userRouter.js");
// const config  = require("./config");
// const DB = process.env.MONGODB_URL;
// console.log(config.MONGODB_URL);
// mongoose.connect(config.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// }).then(()=>
//     console.log("connected to mongodb"))
// .catch((err)=>{
//     console.log(err.reason);
// });
mongoose.connect("mongodb+srv://tsering:Tongspon@dep.uewq1ll.mongodb.net/shophere?retryWrites=true&w=majority").then(()=>
        console.log("connected to mongodb"))
    .catch((err)=>{
        console.log(err.reason);
    });

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api/users',userrouter);
app.get("/api/products", (req, res) =>{
    res.send(data.products);
});
app.get('/api/products/:id',(req, res)=>{
    const product = data.products.find(x=>x._id === req.params.id);
    if(product){
        res.send(product);
    } else{
        res.status(404).send({meassage: 'product not found'});
    }

})

app.use((err, req, res, next) =>{
    const status = err.name && err.name ==='ValidationError'? 400: 500;
    res.status(status).send({message:err.message});
});

app.listen(5000,()=>{
    console.log('server at http://localhost:5000');
});