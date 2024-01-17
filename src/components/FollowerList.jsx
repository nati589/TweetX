import { Box } from '@mui/material'
import React from 'react'
import UserCard from './UserCard'

function FollowerList() {
  return (
    <Box>
        <UserCard following={false}/>
        <UserCard following={false}/>
        <UserCard following={false}/>
        <UserCard following={false}/>
    </Box>
  )
}

export default FollowerList