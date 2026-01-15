import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <>
    <div>
        <h1>Home</h1>
        <Link to="/counterroute">Go to Counter</Link>  <br/>
        <Link to="/randomnumbers">Go to Random Number Generator</Link> <br/>
        <Link to ="/about">Go to About</Link>   <br/>
        <Link to ="/contactUs">Go to Contact</Link><br/>

    </div>
      </>
  )
}

export default Home;
