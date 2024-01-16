import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router";
import Feed from "./pages/Feed";
import Users from "./pages/Users";
import Profile from "./pages/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
