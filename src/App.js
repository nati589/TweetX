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
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { auth } from "./config/firebase";
import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import AuthComponent from "./components/AuthComponent";
import { onAuthStateChanged } from "firebase/auth";
import { setAuthenticated, setUser } from "./utils/authCookies";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setAuthenticated(true);
      } else {
        setUser(null)
        setAuthenticated(false);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Feed />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/" element={<PostList />} />
            <Route path="/profile/followers" element={<FollowerList />} />
            <Route path="/profile/following" element={<FollowingList />} />
          </Route>
        </Route>
        <Route element={<AuthComponent />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
