import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

function TweetCard() {
  const customBoxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";

  return (
    <Card
      elevation={0}
      sx={{
        boxShadow: customBoxShadow,
        p: 4,
        borderRadius: 4,
        my: 4,
        width: 1,
        position: "relative",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar sx={{ width: 56, height: 56, bgcolor: 'white', color: '#d0d0d0', border: '1px solid #d0d0d0' }}>H</Avatar>
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 1 / 2,
              py: 2,
              mr: 2,
            }}
          >
            <Typography variant="h6">Title</Typography>
            <Typography variant="p" color='secondary' sx={{ alignSelf: "flex-end" }}>
              Datetime
            </Typography>
          </Box>
          <Box sx={{ mr: 4, wordBreak: 'break-word'}}>
            <Typography variant="p">
              contentcontentcontentcontentcontentcontentcontentcontentcontentcklkjljl
              ontentcontentcontentcontentcontentcontentcontentcontentconnjnkljkljkljkl
              tentcontentcontent
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{position: 'absolute', right: '-4%', top: '45%', width: 50, height: 50, bgcolor: "#fe748d", borderRadius: 10}}></Box>
    </Card>
  );
}

export default TweetCard;
