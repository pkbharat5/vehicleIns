import { Router } from "express";
export const ProductApi=Router()
import expressAsyncHandler from "express-async-handler";
import {ProductModel} from "../models/ProductModel.js"



ProductApi.post('/product',expressAsyncHandler(async(req,res)=>{
    const sellersList=await Seller.find();
    res.send({message:"Sellers",payload:sellersList})
}))
