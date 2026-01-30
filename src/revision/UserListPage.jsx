import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserListPage = () => {
    const[info,setInfo] = useState([]); // whenever printing info with map, use arrays instead of null
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data);
            setInfo(res.data);
        }) 
    },[]);
  return (
    <div>
      <h1>userListPage</h1>
     {info.map(infos => (
        <p key={infos.id}>{infos.name} and {infos.email}</p>
     ))}
    </div>
  )
}

export default UserListPage
