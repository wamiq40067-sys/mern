import React from 'react'

const ProfilePage = ({user}) => {
    if(!user){
        return <h2>no User logged in</h2>    // if user is not defined
    }
  return (
    <div>
      <h1>profile page</h1>
      <h2>name:{user.name}</h2>
      <h2>email:{user.email}</h2>
    </div>
  )
}

export default ProfilePage
