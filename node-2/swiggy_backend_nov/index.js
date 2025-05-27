import express from 'express';
const app = express();
import mongoose from 'mongoose';

import {restRoutes} from "./routes/restaurant.routes.js"

mongoose.connect('mongodb+srv://samarthvohraindia:9UqwtaJa0xZD5yKC@cluster0.ocvb4za.mongodb.net/')
.then(()=>{
    console.log("DB CONNECEED");
})
.catch((err)=>{
    console.log("DB NOT CONNECEED" , err);
})

app.get('/' , (req,res)=>{
    res.send("HELLO FROM ROOT ROUTE")
})

restRoutes(app);

const PORT = 8000;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AAT PORT :${PORT}`);
})

// mongodb+srv://samarthvohraindia:9UqwtaJa0xZD5yKCcluster0.ocvb4za.mongodb.net/

















