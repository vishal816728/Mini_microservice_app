import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
    const [posts,setPosts]=useState({})
    const fetchposts=async ()=>{
          const res=await axios.get('http://localhost:7000/posts')

          setPosts(res.data)
    }
    useEffect(()=>{
          fetchposts()
          // console
    },[])

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
       {Object.values(posts).map(post=>
        <div className='card' key={post.id}>
             <div className='card-body'>
                 <h3>{post.title}</h3>
                 {/* <CommentList postId={post.id} /> */}
                 <CommentList comments={post.comments} />
                 <CommentCreate postId={post.id}/>
             </div>
        </div>
       )}
    </div>
  )
}

export default PostList