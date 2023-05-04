const fs = require('fs')
path_file=process.env.path_file||'data.json';
function parse2(data){
    const newArr = data.reduce((prev, elm, index, array) => {
    const [key , value]=elm.split("=")
    prev[key] = value //{0:"test"}
    return prev}, {})
    return newArr
}// parse data from string to array

function cheackFile(path){
if (fs.existsSync(path)){console.log(fs.existsSync(path))}
else {
    fs.writeFileSync(path,JSON.stringify([]))
    console.log("done")
}
}

function createid(arr){//arr is array of object
    let dataId = arr.length 
    return (arr [dataId-1].id)+1
}

function showErr(err){
    if (err) { console.error(err);}
}

cheackFile(path_file)
let read_data= JSON.parse( fs.readFileSync(path_file,"utf8"))

function add(item){
    const todo={
        id:createid(read_data),
        title:item.title,
        body :item.body,
        cheacked: false
    }
    read_data.push(todo)
    fs.writeFileSync('data.json', JSON.stringify(read_data), showErr);
}

function edit(item, id){
    read_data= update(item,id,read_data)
    fs.writeFileSync('data.json', JSON.stringify(read_data), err2(err));
}
function remove(id){
    const newArr = read_data.filter(elm => elm.id !=id)
    fs.writeFileSync('data.json', JSON.stringify(newArr), showErr);
}
function checked(id, check_bol){
    read_data= update2(id,read_data,check_bol)
    fs.writeFileSync('data.json', JSON.stringify(read_data), showErr);
}

function show (type){
    let data= JSON.parse( fs.readFileSync(path_file,"utf8"))
    switch (type) {
        case 'check':    elm => elm % 2 == 0
            let newArr= data.filter(elm => { if(elm.cheacked== true) return elm })
            return newArr
            break;
        case 'uncheck':
            let newArr2= data.filter(elm => { if(elm.cheacked== false) return elm })
            return newArr2
            break;
        case 'all':
            return data
            break;
        default: 
            console.log("plz select true option")
            break;
    }
}

function update(item,id,read_data){
let i=item
const newArr = read_data.map((elm, index, array)=>{
    if(elm.id==id){
        elm.title=i.title
        elm.body=i.body
    }
    console.log(elm)
    return elm
})

return newArr
}
function update2(id,read_data,bol){
    const newArr = read_data.map((elm, index, array)=>{
        if(elm.id==id){elm.cheacked=bol}
        console.log(elm)
        return elm
    
    })

    return newArr
}

module.exports={
add,edit,remove,parse2 ,checked,show
}