const express= require ("express");
const userRouter=require("./router/user");
const postRouter=require("./router/post");
const PORT=process.env.PORT || 5400
const app= express();
app.use(express.json())
app.use((req,res,next)=>{
    console.log(`${req.PORT}-- ${req.method}--${req.url}-- ${new Date()}`)
next();
})
//الطريقة دي اسمها  middlware application level

app.use("/user",(req,res,next)=>{
    const login=true
    // const login=false
     login?next():res.send("plz login massage by middele ware")
})


app.use("/post",(req,res,next)=>{
    // const login=true
    const login=false
     login?next():next(new Error("plz login massage by middele ware"))
})


app.use(["/user",'/users'],userRouter)
app.use(["/post"],postRouter)
app.listen(PORT,(err)=>{
if ( !err){ console.log("done listening")}
})


app.use((err, req, res, next)=>{
    console.log(err.message)
    res.send(err.message)
})