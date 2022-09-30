const express=require("express")
const {randomBytes}=require('crypto')
const cors=require('cors')
const app=express()
const axios=require('axios')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const commentsByPostId={}

app.get("/posts/:id/comments",(req,res)=>{
     res.send(commentsByPostId[req.params.id] || [] )
})

app.post("/posts/:id/comments",async (req,res)=>{
     const commentId=randomBytes(4).toString('hex')
     var comment=req.body.comment 
     //   comment=comment.tolowerCase()
     const comments=commentsByPostId[req.params.id] || [];
     comments.push({id:commentId,comment})

     commentsByPostId[req.params.id]=comments
     
     await axios.post('http://localhost:6000/events',{
          type:"commentCreated",
          data:{
               id:commentId,
               comment,
               postId:req.params.id
          }
     })
     res.status(201).send(comments)
})

app.post('/events',async (req,res)=>{
     console.log("received Event",req.body.type)
     res.send({})
 })

 
app.listen(5050,()=>{
    console.log("Comment server is listening on 5050")
})