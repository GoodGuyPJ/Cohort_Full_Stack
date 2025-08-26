import React, { useContext } from 'react'

import { UserContext } from './UserContextEx'

const UserProfileusercontextex = () => {

  const {user} = useContext(UserContext)

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name} </p>
    </div>
  )
}

export default UserProfileusercontextex
