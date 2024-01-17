import { Box } from '@mui/material'
import React from 'react'
import TweetCard from './TweetCard'

function PostList() {
  return (
    <Box>
        <TweetCard shadow={false} />
        <TweetCard shadow={false}/>
        <TweetCard shadow={false}/>
        <TweetCard shadow={false}/>
    </Box>
  )
}

export default PostList