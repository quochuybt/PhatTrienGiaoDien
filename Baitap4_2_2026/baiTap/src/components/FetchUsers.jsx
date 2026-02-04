import React, { useState } from 'react';

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch('https://698318939c3efeb892a462c2.mockapi.io/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));
  };

  return (
    <div className="card">
      <h3>1. Fetch API</h3>
      <button onClick={fetchData}>Load Users</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
};

export default FetchUsers;