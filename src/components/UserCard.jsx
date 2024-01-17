import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

function UserCard({ following }) {
  return (
    <Card
      elevation={0}
      sx={{
        px: 4,
        py: 2,
        borderRadius: 4,
        my: 2,
        width: 1,
        position: "relative",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              bgcolor: "white",
              color: "#d0d0d0",
              border: "1px solid #d0d0d0",
            }}
          >
            H
          </Avatar>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              px: 1 / 2,
              py: 0,
              mr: 2,
            }}
          >
            <Typography variant="h6">Title</Typography>
            <Typography variant="p" color="secondary">
              Datetime
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
          {!following && (
            <Button
              variant="contained"
              sx={{
                color: "white",
                px: 4,
                py: 1,
                borderRadius: 1,
                fontSize: 10,
                textTransform: "none",
              }}
              disableElevation={true}
            >
              Follow
            </Button>
          )}
          {following && (
            <Button
              sx={{
                textTransform: "none",
                color: "black",
                px: 4,
                py: 1,
                borderRadius: 1,
                fontSize: 14,
              }}
              disableElevation={true}
            >
              Following
            </Button>
          )}
        </Grid>
      </Grid>
    </Card>
  );
}

export default UserCard;
