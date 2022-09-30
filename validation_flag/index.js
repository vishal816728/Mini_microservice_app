const express=require('express')
const cors=require('cors')
const app=express()
const axios=require('axios')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const posts={}

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/events',async(req,res)=>{
    const {type,data}=req.body
    
    // if(type=='commentCreated'){
    //     const status=data.comment.includes('orange') ?'rejected':"approved"

    //     await axios.post('http:localhost:7000/events',{
    //    type:'CommentMode',
    //    data:{
    //     id:data.id,
    //     postId:data.postId,
    //     status,
    //     comment:data.comment
    //    }

    //     })
    // }
   
    res.send({})
})

app.listen(8000,()=>{
    console.log('query service is listening on 8000')
})