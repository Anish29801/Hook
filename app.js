const express = require('express');
const app = express();
require("dotenv").config();

const createTag = require('./tagCreater.js');

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to the Nodejs Server")
})

app.post("/",(req,res)=>{
    const id = req.body.id;
    console.log(id);
});

module.exports = app;
