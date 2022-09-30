import React from "react"
import {useState} from "react"
import axios from "axios"

function PostCreate(){
    const [title,setTitle]=useState('')

    async function submissionfunction(e){
           e.preventDefault()
           console.log(title)

           await axios.post('http://localhost:5000/posts',{
            title
           })

           setTitle('')
    }

    return(
        <>
            <form onSubmit={submissionfunction}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control m-2" 
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default PostCreate;