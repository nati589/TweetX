import { Box } from '@mui/material'
import React from 'react'
import UserCard from './UserCard'

function FollowingList() {
  return (
    <Box>
        <UserCard following={true}/>
        <UserCard following={true}/>
        <UserCard following={true}/>
        <UserCard following={true}/>
    </Box>
  )
}

export default FollowingList