import React from 'react'
import { Link,Outlet } from 'react-router-dom'  //outlet used for keeping the navbar
import "../styles/Dashboard.css"

const DashboardPage = ({setCurrentUser}) => {
    const handleLogOut = () => {
        setCurrentUser(null);       //this is for logout
    }
  return (
    <>
    <div id="body">
      <h1 id='navbar'>Navbar</h1>                                   
      <Link to="/dashboardpage/homepage" className="links">      
        Home                                                   
      </Link>
      <Link to="/dashboardpage/profilepage" className="links">
        profile                                                     {/*dashboard is root for these*/}
      </Link>
      <Link to="/dashboardpage/userlistpage" className="links">
        Users
      </Link>
      <Link to="/" className="links" onClick={handleLogOut}>
        logout
      </Link>
    </div>
      <Outlet/>                                 {/*for child rendering */}
    </>
  );
}

export default DashboardPage
