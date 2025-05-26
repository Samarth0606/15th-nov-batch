
// const express = require("express")
import express from "express"
const app = express();
import mongoose from 'mongoose';

// connect method returns you a promise
mongoose.connect('mongodb://127.0.0.1:27017/india')
.then(()=>{
    console.log("DB CONNECTED"); 
})
.catch((err)=>{
    console.log("DB not CONNECTED" , err);
})

// CRUD here

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT ${PORT}`);
})

