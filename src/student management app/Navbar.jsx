import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"


const Navbar = () => {

  return (
    <>
    <nav>
    <div id='main'>
      <div id="h1"><h1 >Navbar</h1></div>
      <div>
      <Link to="/studenthome" class='Link'>Home</Link> 
      </div>
      <div>
      <Link to="/studentpage" class='Link'>Student Page</Link> 
      </div>
      <div>
      <Link to="/faculty" class='Link'>Faculty</Link>
      </div>
      <div>
      <Link to="/studentList" class='Link'>Student List</Link> 
      </div>
    </div>
    </nav>
    </>
  )
}

export default Navbar
