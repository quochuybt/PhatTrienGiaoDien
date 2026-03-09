import React,{ useEffect, useState } from 'react'

function StatusState() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
      useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data);
                })
                .catch((error) => {
                    setError(error.message)
                })
                .finally(() => {
                    setLoading(false);
                });
     }, []);
    
      return (
        <div>
            {loading?(console.log("Loading...")):error?(console.log(`Error: ${error}`)):users.map((user) => (
            <div key={user.id} >
              <p >{user.name}</p>
              <p >{user.email}</p>
            </div>
          ))}
        </div>
      );
}

export default StatusState