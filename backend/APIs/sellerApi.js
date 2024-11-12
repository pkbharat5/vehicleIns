import { Router } from "express";
export const sellerApi=Router()
import expressAsyncHandler from "express-async-handler";
import {Seller} from "../models/SellerModel.js"



sellerApi.get('/sellers',expressAsyncHandler(async(req,res)=>{
    const sellersList=await Seller.find();
    res.send({message:"Sellers",payload:sellersList})
}))
