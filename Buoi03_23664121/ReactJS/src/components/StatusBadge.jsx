import React ,{useState} from 'react'
import './StatusBadge.css'

function StatusBadge() {
    const [status, setStatus] = useState('offline');
    const colorChange = { color: status === 'online' ? 'green' : status === 'offline' ? 'gray' : 'red' };
  return (
    <div className='status-container'>
        <h1 style={colorChange}>Trạng thái người dùng</h1>
        <div className='status-group'>
            <button onClick={() => setStatus('online')} className="btn-status btn-online">Online</button>
            <button onClick={() => setStatus('offline')} className="btn-status btn-offline">Offline</button>
            <button onClick={() => setStatus('busy')} className="btn-status btn-busy">Busy</button>
        </div>
    </div>
  )
}

export default StatusBadge