const userAuth=(req,res,next)=>{
  
  const token="xyz";
  const isAdminAuth=token==="xydz";
  if(!isAdminAuth){
    throw new Error("invalid token")
  }
next()
 
}
  


module.exports={userAuth}