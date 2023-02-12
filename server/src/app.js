import express from 'express'
import apiRoute,{apiProtected} from "./routes/api.js"
import mongoose from "mongoose";
import AuthMiddleware from './middlewares/AuthMiddleware.js';
import { DB_CONNECT } from './utils/constant.js';
import cors from 'cors'
const app=express();


mongoose.connect(DB_CONNECT,{useNewUrlParser:true},(e)=>console.log(e));

const port=8000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.json())
app.use("/api/",apiRoute)
app.use("/api/", AuthMiddleware,apiProtected);

app.listen(port,()=>console.log("server is running"));