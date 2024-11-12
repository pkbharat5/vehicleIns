import exp from 'express';
import mongoose from 'mongoose';
import { adminApi } from './APIs/adminApi.js';
import { sellerApi } from './APIs/sellerApi.js';
import { userApi } from './APIs/userApi.js';
import {loginRoute} from "./APIs/loginApi.js"
import { registerRoute } from './APIs/registration.js';
import cors from 'cors'
import { config } from 'dotenv';
config();

const app=exp();
const port=process.env.PORT || 3000;

app.listen(port,()=>console.log(`server on port ${port}`))

app.use(cors({
    origin:'http://localhost:5174'
}))

mongoose.connect(process.env.DB_URL)
.then(()=>console.log("DB Connection success"))
.catch(err=>console.log("err in db connection",err));

app.use(exp.json())

app.use('/api',loginRoute)
app.use('/api',registerRoute)
app.use('/admin-api',adminApi);
app.use('/user-api',userApi);
app.use('/seller-api',sellerApi);



app.use((err,req,res,next)=>{
    console.log("err is",err)
    res.send({message:"erro",error:err})
})