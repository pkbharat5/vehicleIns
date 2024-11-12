import { Router } from 'express';
import { Admin } from '../models/AdminModel.js';
import { User } from '../models/UserModel.js';
import { Seller } from '../models/SellerModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
const {compare}=bcryptjs;
const {sign}=jwt;
import { config } from 'dotenv';
config();

export const loginRoute=Router()


//route for login of user,seller &admin
loginRoute.post("/login",async(req,res)=>{
    //get cred obj
    const credObj=req.body;
    //for admin type
    if(credObj.userType ==='admin'){
        const result=await Admin.findOne({username:credObj.username});
        //if user found
        if(result !==null){
            //compare passwords
            let isEqual=await compare(credObj.password,result.password);
            if (isEqual ==true){
                //create jwt token
                const jwt=sign({usrname:credObj.username},process.env.SECRET_KEY,{
                    expiresIn:"1h",
                });
                //send res
                res.send({message:"login success", token: jwt,payload:result,userType:'admin'});
            }else{
                res.send({message:"Invalid password"});
            }
        }else{
            res.send({message:"Invalid username"});
        }

    }
    //for user type
    if(credObj.userType==='user'){
        const result=await User.findOne({username:credObj.username});
        //if user found
        if(result !==null){
            //compare passwords
            let isEqual=await compare(credObj.password,result.password);
            if (isEqual ==true){
                //create jwt token
                const jwt=sign({usrname:credObj.username},process.env.SECRET_KEY,{
                    expiresIn:"1h",
                });
                //send res
                res.send({message:"login success", token: jwt,payload:result,userType:'user'});
            }else{
                res.send({message:"Invalid password"});
            }
        }else{
            res.send({message:"Invalid username"});
        }
    }
    //for seller type
    if(credObj.userType==='seller'){
        const result=await Seller.findOne({username:credObj.username});
        //if user found
        if(result !==null){
            //compare passwords
            let isEqual=await compare(credObj.password,result.password);
            if (isEqual ==true){
                //create jwt token
                const jwt=sign({usrname:credObj.username},process.env.SECRET_KEY,{
                    expiresIn:"1h",
                });
                //send res
                res.send({message:"login success", token: jwt,payload:result,userType:'seller'});
            }else{
                res.send({message:"Invalid password"});
            }
        }else{
            res.send({message:"Invalid username"});
        }
    }
})










// import {Router} from 'express';
// export const loginRoute=Router();
// import { Admin } from '../models/AdminModel.js';
// import bcryptjs from 'bcryptjs';
// const {compare} =bcryptjs;
// import jwt from 'jsonwebtoken';
// import { Seller } from '../models/SellerModel.js';
// import { User } from '../models/UserModel.js';
// const {sign}=jwt;



// loginRoute.post("/login",async(req,res)=>{
//     //get cred obj
//     const credObj=req.body;
    
//     //for admin type
//     if(credObj.userType==='admin'){
//         const result=await Admin.findOne({username:credObj.username})
//         if(result!==null){
//             //compare passwords
//             let isEqual= await compare(credObj.password, result.password);
//             if(isEqual===true){
//                 const jwt=sign({username:credObj.username},"abcdef",{
//                     expiresIn:"1h",
//                 });
//                 res.send({message:"login Success",token:jwt,payload:result,userType:"admin"});
//                 }
//                 else{
//                     res.send({message:"Invalid Password"});
//                 }
//             } else{
//                 res.send({message:"Invalid Username"});
//             }
//     }
//     //for user type
//     if(credObj.userType==='user'){
//         const result=await User.findOne({username:credObj.username})
//         if(result!==null){
//             //compare passwords
//             let isEqual= await compare(credObj.password, result.password);
//             if(isEqual===true){
//                 const jwt=sign({username:credObj.username},"abcdef",{
//                     expiresIn:"1h",
//                 });
//                 res.send({message:"login Success",token:jwt,payload:result,userType:"user"});
//                 }
//                 else{
//                     res.send({message:"Invalid Password"});
//                 }
//             } else{
//                 res.send({message:"Invalid Username"});
//             }}
//     //for seller typer
//     if(credObj.userType==='seller'){
//         const result=await Seller.findOne({username:credObj.username})
//         if(result!==null){
//             //compare passwords
//             let isEqual= await compare(credObj.password, result.password);
//             if(isEqual===true){
//                 const jwt=sign({username:credObj.username},"abcdef",{
//                     expiresIn:"1h",
//                 });
//                 res.send({message:"login Success",token:jwt,payload:result,userType:"seller"});
//                 }
//                 else{
//                     res.send({message:"Invalid Password"});
//                 }
//             } else{
//                 res.send({message:"Invalid Username"});
//             }
//     }

// })