const express=require("express");
const { userAuth } = require("./auth");

const app=express();

app.use("/user",(req,res,next)=>{
  console.log(1);
  next()
  
},(req,res,next)=>{
  console.log(2);
  next()
  
},(req,res,next)=>{
  console.log(3);
  next()
},(req,res)=>{
  console.log(4);
  
  res.send("hiiii")
})


app.get("/admin",userAuth,(req,res)=>{
 
    res.send("data send!!")

  
})

 
app.use("/",(err,req,res,next)=>{
  res.send("error : "+err.message)
})


app.listen(3000,()=>{
  console.log("server listening to the port 3000...! ");
  
})