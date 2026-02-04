import React, { useState } from 'react';
import axios from 'axios';

const AxiosUsers = () => {
  const [users, setUsers] = useState([]);

  const loadWithAxios = () => {
    axios.get('https://698318939c3efeb892a462c2.mockapi.io/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="card">
      <h3>3. Axios</h3>
      <button onClick={loadWithAxios}>
        Load với Axios
      </button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
      </ul>
    </div>
  );
};

export default AxiosUsers;