import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" color="primary" sx={{ flexGrow: 1 }}>
            TweetX
          </Typography>
          <Button color="secondary">Feed</Button>
          <Button color="secondary">Users</Button>
          <Button color="secondary">Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
