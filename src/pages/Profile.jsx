import { Chat, Groups, People } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState(0);
  let routes = useRef(["", "followers", "following"]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
    navigate(`/profile/${routes.current[newValue]}`);
  };

  useEffect(() => {
    if (location) {
      const pathSegments = location.pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1]; 
      setTab(routes.current.indexOf(lastSegment));
    }
  }, [location, routes]);

  return (
    <Box sx={{ position: "relative", mx: "30%" }}>
      <Box sx={{ w: 1, pt: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: "white",
                color: "#d0d0d0",
                border: "1px solid #d0d0d0",
              }}
            >
              A
            </Avatar>
          </Grid>
          <Grid item xs={9} sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Arjun Reddy</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
            <Box>
              <Typography
                color="secondary"
                sx={{ mr: 3, fontSize: 16 }}
                variant="p"
              >
                Posts: 512
              </Typography>
              <Typography
                color="secondary"
                sx={{ mr: 3, fontSize: 16 }}
                variant="p"
              >
                Followers: 511
              </Typography>
              <Typography
                color="secondary"
                sx={{ mr: 3, fontSize: 16 }}
                variant="p"
              >
                Following: 511
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4 }} />
        <Tabs
          value={tab}
          onChange={handleTabChange}
          sx={{ width: 1, px: 2 }}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          TabIndicatorProps={{
            sx: {
              top: 0,
            },
          }}
        >
          <Tab
            icon={<Chat />}
            iconPosition="start"
            label="Post"
            sx={{ color: "#d0d0d0", fontSize: 12 }}
          />
          <Tab
            icon={<Groups />}
            iconPosition="start"
            label="Followers"
            sx={{ color: "#d0d0d0", fontSize: 12 }}
          />
          <Tab
            icon={<People />}
            iconPosition="start"
            label="Following"
            sx={{ color: "#d0d0d0", fontSize: 12 }}
          />
        </Tabs>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Profile;
