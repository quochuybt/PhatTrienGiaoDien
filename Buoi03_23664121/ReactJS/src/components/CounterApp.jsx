import React , {useState} from 'react'
import './CounterApp.css'

function CounterApp() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const countType =  {  color: count > 10 ? 'red' : 'black' };

  return (
    <div className='counter-container'>
        <h1>Counter App</h1>
        <div className='display-box'><h2 style={countType}>{count}</h2></div>
        <div className='btn-group'>
            <button onClick={increment} className="btn btn-plus">+</button>
            <button onClick={decrement} className="btn btn-minus" disabled={count === 0}>-</button>
            <button onClick={reset} className="btn btn-reset">Reset</button>
        </div>
    </div>
  )
}

export default CounterApp