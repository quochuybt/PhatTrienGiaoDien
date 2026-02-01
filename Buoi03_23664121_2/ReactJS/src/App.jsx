import { useState } from 'react'
import Bai1 from './pages/Bai1'
import Bai2 from './pages/Bai2'
import Bai3 from './pages/Bai3'
import Bai4 from './pages/Bai4'
import Bai5 from './pages/Bai5'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(1)

  return (
    <>
    <div className='btn-group-app'>
        <button className='btn btn1' onClick={() => setShowForm(1)}>Bài 1</button>
        <button className='btn btn2' onClick={()=> setShowForm(2)}>Bài 2</button>
        <button className='btn btn3' onClick={()=> setShowForm(3)}>Bài 3</button>
        <button className='btn btn4' onClick={()=> setShowForm(4)}>Bài 4</button>
        <button className='btn btn5'  onClick={()=> setShowForm(5)}>Bài 5</button>
      </div>
      <div className='display-screen'>
        {showForm === 1 && ( <Bai1/> )}
        {showForm === 2 && ( <Bai2/> )}
        {showForm === 3 && ( <Bai3/> )}
        {showForm === 4 && ( <Bai4/> )}
        {showForm === 5 && ( <Bai5/> )}

      </div>
    </>
  )
}

export default App
