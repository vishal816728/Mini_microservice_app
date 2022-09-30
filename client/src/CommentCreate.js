import React from 'react'
import {useState} from "react"
import axios from 'axios'

const CommentCreate = (props) => {
    const [content,setContent]=useState('')

    async function onSubmit(e){
           e.preventDefault()
           const res=await axios.post(`http://localhost:5050/posts/${props.postId}/comments`,{
            comment:content
           })
        setContent('')
        console.log(res)
        console.log("comment created successfully")
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
                <label>New Comment</label>
                <input className='form-control' value={content} onChange={e=>setContent(e.target.value)}/>
            </div>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate