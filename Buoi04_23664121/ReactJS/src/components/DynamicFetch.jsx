import React, { useEffect,useState } from 'react'

function DynamicFetch() {
    const [id,setId] = useState(1)
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data)=>setUser(data))
        .catch((e)=>{console.log(e)})
    },[id])

  return (
    <div>
        <label htmlFor="numberInput">Nhập số:</label>
        <input id="numberInput" type="number" onChange={(e) => setId(e.target.value)} value={id}/>
        <p>Name: {user.name}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
    </div>
  )
}

export default DynamicFetch