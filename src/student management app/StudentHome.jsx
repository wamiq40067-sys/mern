import React, { useState } from 'react'
import "../styles/Home1.css"

const StudentHome = () => {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username,password);
    }
  return (
    <>
    <div id="form">
    <h1 id="h11">Home</h1>  
    <form onSubmit={handleSubmit}>
        <div id="username">
          <input 
        type="username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'/>
        </div>
        <div id="password">
        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'/>
        </div>
        <div id="submit">
        <button type='submit'>submit</button>
        </div>
    </form>
        </div>
    
    </>
  )
}

export default StudentHome
