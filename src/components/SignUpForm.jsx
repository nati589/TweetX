import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box sx={{ width: "50%", ml: 11 }}>
      <Typography variant="h4" mb={6} color="grey" sx={{ fontWeight: "bold" }}>
        Create Account
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
              type="text"
              id="fullName"
              name="fullName"
              sx={{ bgcolor: "#f0f0f0" }}
              fullWidth
              placeholder="Name"
            />
            <ErrorMessage name="fullName" component="div" />
          </Box>

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
              type="password"
              id="password"
              name="password"
              sx={{ bgcolor: "#f0f0f0" }}
              fullWidth
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
          </Box>

          <Box mt={2}>
            <Field
              as={TextField}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              sx={{ bgcolor: "#f0f0f0" }}
              fullWidth
              placeholder="Confirm Password"
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </Box>

          <Box mt={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ color: "white" }}
            >
              Sign Up
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignUpForm;
