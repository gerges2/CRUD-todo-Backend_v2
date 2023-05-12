const test=(req,res,next)=>{
    console.log(`${req.PORT}-- ${req.method}--${req.url}-- ${new Date()}`)
next();
}


module.exports=test