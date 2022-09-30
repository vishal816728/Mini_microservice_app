const express=require('express')
const cors=require('cors')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
const posts={}

// // how our post will look like it is quick example exactly what we are creating from the posts
// // post==={
// //     'jsjdi23':{
// //         id:'jsjdi23',
// //         title:'post title',
// //         comments:[
// //             {id:'23kjjl23',content:"Kls ksld cdk sldk"}
// //         ]
// //     }
// // }

// app.get('/posts',(req,res)=>{
//     res.send(posts)
// })

// app.post('/events',(req,res)=>{
//     const {type,data}=req.body

//     if(type==='postCreated'){
//         const {id,title}=data
//         posts[id]={
//             id,
//             title,
//             comments:[],
//             status:'Approved'
//         }
//     }

//     if(type==='commentCreated'){
//        const {id,comment,postId}=data
//        const post=posts[postId]
//        post.comments.push({id,comment})
//     }
//     console.log(posts)const express=require('express')
// const cors=require('cors')
// const app=express()

// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.use(cors())
// const posts={}

// // how our post will look like it is quick example exactly what we are creating from the posts
// // post==={
// //     'jsjdi23':{
// //         id:'jsjdi23',
// //         title:'post title',
// //         comments:[
// //             {id:'23kjjl23',content:"Kls ksld cdk sldk"}
// //         ]
// //     }
// // }

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/events',(req,res)=>{
    const {type,data}=req.body

    if(type==='postCreated'){
        const {id,title}=data
        posts[id]={
            id,
            title,
            comments:[]
        }
        res.send({})
    }

    if(type==='commentCreated'){
       const {id,comment,postId,status}=data
       const post=posts[postId]
       if(!comment.includes('orange')){
           post.comments.push({id,comment,status})
       }else{
        console.log("Comment will not be added")
        res.send({message:"The Orange is not allowed for comments please choose another word or don't comment"})
       }
    }
    console.log(posts) 
})


app.listen(7000,()=>{
    console.log('query service is listening on 7000')
})

// const express=require('express')
// const cors=require('cors')
// const app=express()

// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.use(cors())
// var Allposts={}


// app.get('/posts',(req,res)=>{
//     res.send(posts)
// })

// app.post('/events',(req,res)=>{
//     const {posts}=req.body

//     const Allposts=posts
//     res.send({})
// })

// app.listen(7000,()=>{
//     console.log('query service is listening on 7000')
// })