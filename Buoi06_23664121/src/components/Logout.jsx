import React from 'react'
import { useRecoilState } from 'recoil'
import { UserAtom } from '../recoil/UserAtom'

const Logout = () => {
    const [user, setUser] = useRecoilState(UserAtom)
    function handleClick() {
        setUser({...user,login:false})
    }
  return (
    <div>
        <h1>{user.userName}</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
