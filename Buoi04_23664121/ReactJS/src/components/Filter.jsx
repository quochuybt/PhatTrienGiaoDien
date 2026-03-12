import React, { useEffect, useState } from 'react'


const Filter = () => {
    const [search , setSearch] = useState("")
    const [posts, setPost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res)=>res.json())
            .then((data)=>setPost(data))
    },[])
    const filterPost = posts.filter((post)=>
         post.title.toLowerCase().includes(search.toLowerCase()))
    
  return (
    
    <div>
        <input type="text" value={search}  onChange={(e)=>{setSearch(e.target.value)}} />
        {filterPost.map((post)=>{
            return (
                <div key={post.id}>
                    <p >{post.title}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Filter