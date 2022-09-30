import React from 'react'
import {useState,useEffect} from "react"
import axios from 'axios'

const CommentList = ({comments}) => {
    // const [comments,setComments]=useState()
    // const fetchComments=async()=>{
    //     const res=await axios.get(`http://localhost:5050/posts/${props.postId}/comments`)
    //     setComments(res.data)
    // }
    // useEffect(()=>{
    //      fetchComments()
    // },[])
  //  const [alertMessage,setAlertMessage]=useState()
   
  return (
    <div>
        {comments?
          comments.map(comment=>{
            return <ul><li key={comment.id}>{comment.comment}</li></ul>
          }) :""   
        }
    </div>
  )
}

export default CommentList