import React from 'react'
import { useRecoilState } from 'recoil'
import { UserAtom } from '../recoil/UserAtom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user , setUser] = useRecoilState(UserAtom)
    const navigate = useNavigate()
    function handleClick() {
        setUser({...user,login:true})
        navigate("/logout")
    }
  return (
    <div>
        <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
