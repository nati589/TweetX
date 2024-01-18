import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box sx={{ width: "50%", ml: 11 }}>
      <Typography variant="h4" mb={6} color="grey" sx={{ fontWeight: "bold" }}>
        Login
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box mt={2}>
            <Field
              as={TextField}
              type="email"
              id="email"
              name="email"
              sx={{ bgcolor: "#f0f0f0" }}
              fullWidth
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </Box>

          <Box mt={2}>
            <Field
              as={TextField}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              sx={{ bgcolor: "#f0f0f0" }}
              fullWidth
              placeholder="Password"
              endadornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <ErrorMessage name="password" component="div" />
          </Box>

          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/login" style={{ color: "#000", textDecoration: "none" }}>
              Forgot Password ?
            </Link>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ color: "white" }}
            >
              Login
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default LoginForm;
