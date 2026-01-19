import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button type="primary" >Day la cai nut</Button>
      <Button type="danger" >Day la cai nut</Button>
      <Button type="success" >Day la cai nut</Button>
    </>
  )
}

export default App
