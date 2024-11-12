import { Router } from "express";
export const userApi=Router()
import expressAsyncHandler from 'express-async-handler'
import {User} from '../models/UserModel.js'
import {verifyToken} from '../middlewares/verigyToken.js'


userApi.get('/users',expressAsyncHandler(async(req,res)=>{
    const usersList=await User.find()
    res.send({message:"Users",payload:usersList})
}))


userApi.get('/protected',verifyToken,expressAsyncHandler((req,res)=>{
    res.send({message:"this the private info"})
})
)