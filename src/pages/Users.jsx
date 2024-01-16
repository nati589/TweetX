import { Box, Divider } from '@mui/material'
import React from 'react'
import UserCard from '../components/UserCard'

function Users() {
  return (
    <Box sx={{ position: "relative", mx: "30%" }}>
      <Box sx={{ w: 1, pt: 1 }}>
        <UserCard />
        <Divider />
        <UserCard />
        <Divider />
        <UserCard />
        <Divider />
        <UserCard />
        <Divider />
        <UserCard />
        <Divider />
        <UserCard />
        <Divider />
        
      </Box>
    </Box>
  )
}

export default Users