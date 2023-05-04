const express= require ("express");
const userRouter=require("./router/user");
const PORT=process.env.PORT || 5400
const app= express();
app.use(express.json())
app.use(["/user",'/users'],userRouter)
app.listen(PORT,(err)=>{
if ( !err){ console.log("done listening")}
})