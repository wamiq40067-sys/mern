import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = ({users,setUsers}) => {
    const[name,setName] = useState(""); // name
    const[email,setEmail] = useState(""); // email
    const[password,setPassword] = useState(""); // password
    const Navigate = useNavigate(); //Navigation
    const handleSubmit = (e) => {
        e.preventDefault(); // to prevent from rendering when clicking on submit button
        setUsers([...users,{name,email,password}]); // stores values from current component

        setName("");
        setEmail("");       // to reset the values
        setPassword("");

        Navigate('/'); // redirecting to login page
    };
  return (
    <div id="login">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <div id='email'>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div id="email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div id="password">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      <Link to="/" id='backtologin'>Back to Login</Link>
    </div>
  );
}

export default SignUpPage
