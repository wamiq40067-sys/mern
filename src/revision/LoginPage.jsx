import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../styles/loginpage.css"

const LoginPage = ({users,setCurrentUser}) => { // we add props here
    const[email,setEmail] = useState(""); // email
    const[password,setPassword] = useState(""); // password
    const Navigate = useNavigate(); // for navigation
    const handleSubmit = (e) => {
        e.preventDefault();
        const found = users.find((u) => 
            u.email === email && u.password === password    //comparing
        );
        if(found){
            setCurrentUser(found);                      // storing the current user value to dashboard
            Navigate('/dashboardpage/homepage');       //navigating to home in dashboard
        } else {
            alert("Invalid credentials");
        }
    }
  return (
    <div id="login">
      <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div id='email'>
          <input
            type="email" //email
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />{" "}
        </div>
        <div id='password'>
          <input
            type="password"
            value={password} //password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" id='submit'>Submit</button>
      </form>
      <Link to="/signuppage" id='link'>Sign Up</Link>
        </div>
     </div>
  );
}

export default LoginPage
