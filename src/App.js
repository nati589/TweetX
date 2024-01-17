import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router";
import Feed from "./pages/Feed";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import PostList from "./components/PostList";
import FollowerList from "./components/FollowerList";
import FollowingList from "./components/FollowingList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/" element={<PostList />}/>
          <Route path="/profile/followers" element={<FollowerList />}/>
          <Route path="/profile/following" element={<FollowingList />}/>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
