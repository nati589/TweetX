import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TweetCard from "../components/TweetCard";

function Feed() {
  return (
    <Box sx={{ position: "relative", mx: "30%" }}>
      <Button
        variant="contained"
        sx={{ color: "white", px: 4, py: 1, borderRadius: 2, fontSize: 14 }}
      >
        Write
      </Button>
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
        <TweetCard shadow={true} />
        <TweetCard shadow={true} />
        <TweetCard shadow={true} />
        <TweetCard shadow={true} />
      </Box>
    </Box>
  );
}

export default Feed;
