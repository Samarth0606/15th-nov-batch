import bcrypt from "bcrypt";
import UserModel from "../models/User.models.js";

export async function register(req,res){
    try{
       let {firstName,email,password} = req.body;
        UserModel.findOne({email}).then((data)=>{
            if(data){
                return res.status(409).json({message: "User alredy exist"})
            }
            else{
                UserModel.create({
                    firstName,
                    email,
                    password: bcrypt.hashSync(password, 10)
                }).then((newUser)=>{
                    console.log(newUser , "newUser");
                    return res.status(201).json(newUser)
                })
            }
        })
      
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}


export async function login(req,res){
    try{
       let {email,password} = req.body;
        UserModel.findOne({email}).then((data)=>{
            if(!data){
                return res.status(404).json({message: "User is not registered"})
            }
            let validatePassword = bcrypt.compareSync(password, data.password);
            if(!validatePassword){
                return res.status(500).json({message: "INVALID CREDENTIALS"})
            }
            res.status(200).send({
                user:{
                    email: data.email,
                    firstName: data.firstName
                }
            })
        })
      
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}