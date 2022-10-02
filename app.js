const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser')
const cors = require('cors');
const formRoute = require('./routes/form')
const bookSlotRoute = require('./routes/bookSlot')
const enquiryFormRoute = require('./routes/enquiryForm')


const uri = "mongodb+srv://RestApi:Nitin123@cluster0.fmc3i.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(uri,(err)=>{
    if(!err){
        console.log("success")
    }else {
        console.log("Error Connecting")
    }
})

const app = express()
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

const Port = process.env.Port || 3000;

app.listen(Port, () => {
    console.log(`server is running on port ${Port}`)
})

app.use('/api/form', formRoute);
app.use('/api/bookSlot', bookSlotRoute);
app.use('/api/enquiryForm', enquiryFormRoute);










