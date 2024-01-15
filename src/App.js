import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { theme } from "./styles/theme";
import { Route, Routes } from "react-router";
import Feed from "./pages/Feed";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
