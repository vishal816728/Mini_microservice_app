const express=require('express')
const {randomBytes}=require('crypto')
const cors=require('cors')
const axios=require('axios')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const  posts={}
app.get("/posts",(req,res)=>{
     res.send(posts)
})


app.post("/posts",async (req,res)=>{
    const id=randomBytes(4).toString('hex') 
    const title=req.body.title

    posts[id]={
        id,title 
    }

    await axios.post('http://localhost:6000/events',{type:"postCreated",data:{id,title}})
 
    res.status(201).send(posts[id])
})

app.post('/events',async (req,res)=>{
    console.log("received Event",req.body.type)
    res.send({})
})

app.listen(5000,()=>{
      console.log("server is listening on 5000")
})