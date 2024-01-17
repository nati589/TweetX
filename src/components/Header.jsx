import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  const customBoxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  return (
    <Box sx={{ flexGrow: 1, mb: 14 }}>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ boxShadow: customBoxShadow, bgcolor: 'white' }}
      >
        <Toolbar sx={{ ml: 8, mr: 32 }}>
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: 25 }}
          >
            TweetX
          </Typography>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "#fe748d" : "#d0d0d0",
                marginRight: 40,
              };
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Feed</Typography>
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "#fe748d" : "#d0d0d0",
                marginRight: 40,
              };
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Users</Typography>
          </NavLink>
          <NavLink
            to="/profile/"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "#fe748d" : "#d0d0d0",
                marginRight: 40,
              };
            }}
          >
            <Typography sx={{ fontWeight: "bold" }}>Profile</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
