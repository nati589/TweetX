import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function Header() {
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  const customBoxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        elevation={1}
        sx={{ boxShadow: customBoxShadow }}
      >
        <Toolbar sx={{ ml: 8, mr: 16 }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            TweetX
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography color="primary" sx={{ fontWeight: "bold" }}>
              Feed
            </Typography>
          </Link>
          <Button color="secondary">Users</Button>
          <Button color="secondary">Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
