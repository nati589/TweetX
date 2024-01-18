import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const customBoxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  const location = useLocation();
  const [route, setRoute] = useState();
  let routes = useRef(["login", "signup"]);

  useEffect(() => {
    if (location) {
      const pathSegments = location.pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1];
      setRoute(lastSegment);
    }
  }, [location, routes]);
  return (
    <Box sx={{ flexGrow: 1, mb: 14 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          boxShadow: routes.current.includes(route) ? "" : customBoxShadow,
          bgcolor: "white",
        }}
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
          {routes.current.includes(route) ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
