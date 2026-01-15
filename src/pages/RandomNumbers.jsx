import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RandomNumbers = () => {
    const[numbers,setNumbers] = useState(Math.floor(0));
    const generateRandom = () => {
        setNumbers(Math.floor(Math.random() * 100))
    }
  return (
    <>
    <div>
      <h1>Click the button to generate Random Number:{numbers}</h1>
      <button onClick={generateRandom}>generate</button>
      <br/>
      <br/>
      <Link to="/">Back to Home</Link>
    </div>
    </>
  )
}

export default RandomNumbers
