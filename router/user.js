//variables
const express= require ("express");
const helper=require("../healper.js")
const router=express.Router()

//route show data from json file
router.get('/',(req, res)=>{//check and uncheck
    const type = req.query// return object
    data= helper.show(type.type)//type.type refar to all and unchick and chick
    res.send("come with get method "+ JSON.stringify( data))
})

// route to show data  of id
router.get(['/:id','/:id'],(req,res)=>{
    const {id} =req.params
    //req.query
    res.send("come with get method by id "+id) 
})

//route add new row
router.post('/',(req,res)=>{
    helper.add(req.body)
    res.send("come with delete method by id "+JSON.stringify(helper.show("all"))) 
})  

//route edtions
router.put('/:id',(req,res)=>{
    const {id} =req.params
    const data= req.body
    Object.keys(data)[0]=='check'?helper.checked(id,data.check) :helper.edit(data,id)// if for check and uncheck and edit body and title
    let list_data=helper.show("all")
    res.send("come with delete method by id "+JSON.stringify( list_data)) 
})

//  delect 
router.delete('/:id',(req,res)=>{
    const {id} =req.params
    helper.remove(id)
    data=helper.show("all")
    res.send("come with delete method by id "+JSON.stringify( data)) 
})

module.exports = router