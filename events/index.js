const express=require('express')
const app=express()
const axios=require('axios')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/events',(req,res)=>{
    const event=req.body
     console.log("event is triggered")

    axios.post('http://localhost:5000/events',event)  // for post 
    axios.post('http://localhost:5050/events',event)  // for comments
    axios.post('http://localhost:7000/events',event)  // for validation_flag service
    // axios.post('http://localhost:8000/events',event)
    
    res.send({status:"OK"})
})

app.listen(6000,()=>{
    console.log('server is listening on port 6000')
})
