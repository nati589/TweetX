import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { setAuthenticated, setUser } from "../utils/authCookies";

export default function Header() {
  const customBoxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  const location = useLocation();
  const [route, setRoute] = useState();
  const navigate = useNavigate()
  let routes = useRef(["login", "signup"]);

  useEffect(() => {
    if (location) {
      const pathSegments = location.pathname.split("/");
      const lastSegment = pathSegments[pathSegments.length - 1];
      setRoute(lastSegment);
    }
  }, [location, routes]);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/login')
      setUser(null)
      setAuthenticated(false)
    })
  }
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
              <Button onClick={() => handleSignOut()}>Sign Out</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
