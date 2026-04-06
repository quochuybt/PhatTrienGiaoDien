import React from 'react'
import { useRecoilState } from 'recoil'
import { CouterAtom } from '../recoil/CouterAtom'

const ComponentB = () => {
    const [counter, setCouter] = useRecoilState(CouterAtom)

    function handleInc() {
        setCouter(counter+1)
    }
    function handleDec() {
        setCouter(counter -1)
    }
    
  return (
    <div>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </div>
  )
}

export default ComponentB
