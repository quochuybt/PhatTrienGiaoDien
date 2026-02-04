import React, { useState } from 'react';

const AsyncAwaitUsers = () => {
  const [users, setUsers] = useState([]);

  const loadWithAsync = async () => {
    try {
      const response = await fetch('https://698318939c3efeb892a462c2.mockapi.io/users');
      const data = await response.json();
      setUsers(data);
    } catch {
      alert("Lỗi khi tải dữ liệu!");
    }
  };

  return (
    <div className="card">
      <h3>2. Async-Await</h3>
      <button onClick={loadWithAsync}>Load với Async/Await</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
};

export default AsyncAwaitUsers;