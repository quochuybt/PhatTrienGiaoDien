import React from 'react'
import './Login.css'
function Login() {
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login