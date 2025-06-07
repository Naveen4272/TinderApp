const express=require("express");

const app=express();

app.use("/hello/123",(req,res)=>{
  res.send("hello123")
})

app.use("/hello",(req,res)=>{
  res.send("hello world")
})

app.get("/user",(req,res)=>{
  res.send("user")
})
app.post("/user",(req,res)=>{
  res.send("user data")
})




app.use("/",(req,res)=>{
  res.send("hi")
})
app.listen(3000,()=>{
  console.log("server listening to the port 3000...! ");
  
})