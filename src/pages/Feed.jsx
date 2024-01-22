import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import TweetCard from "../components/TweetCard";
import AddTweetForm from "../components/AddTweetForm";


function Feed() {
  
  useEffect(() => {
    // userFetch();
  }, []);

  return (
    <Box sx={{ position: "relative", mx: "30%" }}>
      <AddTweetForm />
      <Typography
        color="whitesmoke"
        variant="h1"
        sx={{
          w: 1,
          position: "absolute",
          top: -25,
          zIndex: -1,
          fontSize: 110,
        }}
      >
        NewsFeed
      </Typography>
      <Box sx={{ w: 1, pt: 1 }}>
       
          <TweetCard shadow={true}  />
       
      </Box>
    </Box>
  );
}

export default Feed;
