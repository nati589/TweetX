import { Box, Button } from "@mui/material";
import React from "react";
import AuthImage from "../assets/authimage.png";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: 1 }}>
      <Button
        variant="outlined"
        sx={{
          color: "#000",
          borderColor: "#000",
          ml: 11,
          mt: -4,
          px: 6,
          borderRadius: 2,
        }}
        onClick={() => navigate("/signup")}
      >
        Create Account
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: 1,
        }}
      >
        <Box sx={{ flex: "1" }}>
          <LoginForm />
        </Box>
        <Box sx={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <img
            src={AuthImage}
            alt="Authentication"
            style={{ maxWidth: "85%", justifyItems: "flex-end" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
