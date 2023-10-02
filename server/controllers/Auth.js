import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import users from '../models/Auth.js'

export const signUp = async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const existinguser = await users.findOne({email});
        if(existinguser){
            return res.status(404).json({message:"User already Exist."})
        }
const hashedpassword = await bcrypt.hash(password,12)
const newuser = await users.create({name ,email,password:hashedpassword})
const token = jwt.sign({email:newuser.email , id:newuser._id},process.env.JWT_SECRET,{expiresIn:"1h"});
res.status(200).json({result:newuser,token})
    }
    catch(error){
        res.status(500).json("Something Went Wrong...")
    }
}

export const logIn = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const existinguser = await users.findOne({email});
        if(!existinguser){
            return res.status(404).json({message:"User doesn't Exist"})
        }
        const isPassword = await bcrypt.compare(password,existinguser.password)
        if(!isPassword){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token = jwt.sign({email:existinguser.email , id:existinguser._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.status(200).json({result:existinguser,token})
    }
    catch(error){
        res.status(500).json("Something Went Wrong...")
    }
}