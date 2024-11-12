import mongoose from "mongoose";

const ProductModel=mongoose.Schema(
    {
        ProductName:{
            type:String,
            required:true
        }  ,
        ProductPrice:{
            type:Number,
            required:true
        }  ,
        ExpiryDate:{
            type:Date,
            required:true
        }  
       
         
         
    })

    //create user model

    export const Product=mongoose.model('products',ProductModel)

