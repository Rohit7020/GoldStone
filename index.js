let express=require("express")
let https=require("https")
let cors=require("cors")
let app=express()
app.use(cors())

let fs=require('fs')
let mongoose=require("mongoose")
const port=5000
mongoose.connect("mongodb://127.0.0.1:27017/goldstone",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connection OK")
}).catch((err)=>{
    console.log("404 error in connection")
})
let goldstonesch=new mongoose.Schema({
    name: String,
    email:String,
    gender:String,
    status:String
});
let Goldstone=mongoose.model("goldstone",goldstonesch)
app.get('/getData',async (req,res)=>{
    let data= await Goldstone.find()
    res.json(data)
})
app.get('/fetchdata',(req,res)=>{
    https.get("https://gorest.co.in/public-api/users",async (response)=>{
    let data=" ";
    response.on("data",(goldstone)=>{
        data+=goldstone
    })
    response.on("end",()=>{
        let x=JSON.parse(data)
        for (let i=0;i<x.data.length;i++){
            Goldstone.insertMany(x.data[i]).then(console.log('completed'))
        }
    });
})
res.end('fetch data is stored in db')
})
app.listen(5000)