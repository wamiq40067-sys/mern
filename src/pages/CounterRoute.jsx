import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CounterRoute = () => {
    const[count,setCount] = useState(0);
  return (
    <>
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount(count-1)}>decrease</button>
      <br/>
      <br/>
      <Link to="/">back to Home</Link>
    </div>
    </>
  )
}

export default CounterRoute
