import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const validationSchema = Yup.object().shape({
  post: Yup.string().required("Post cannot be empty"),
});

const initialValues = {
  post: "",
};

function AddTweetForm() {
  const customBoxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
  const [addPost, setAddPost] = useState(false);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Handle form submission logic here
    setSubmitting(false);

    addDoc(collection(db, "post"), {
    //   displayName: values.fullName,
    //   email: values.email,
    //   profilePhoto: "",
      //   uid: userCredential.user.uid,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));
    // resetForm();
  };

  return (
    <Box>
      {addPost && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Card
              elevation={0}
              sx={{
                boxShadow: customBoxShadow,
                p: 4,
                borderRadius: 4,
                my: 4,
                width: 1,
                position: "relative",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Avatar
                    sx={{
                      width: 56,
                      height: 56,
                      bgcolor: "white",
                      color: "#d0d0d0",
                      border: "1px solid #d0d0d0",
                    }}
                  >
                    A
                  </Avatar>
                </Grid>
                <Grid item xs={10}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 1 / 2,
                      py: 2,
                      mr: 2,
                    }}
                  >
                    <Typography variant="h6">Arjun Reddy</Typography>
                    <Typography
                      variant="p"
                      color="secondary"
                      sx={{ alignSelf: "flex-end" }}
                    >
                      Now
                    </Typography>
                  </Box>
                  <Box sx={{ mr: 4, wordBreak: "break-word" }}>
                    <Box mt={2}>
                      <Field
                        as={TextField}
                        type="text"
                        id="post"
                        name="post"
                        sx={{ bgcolor: "#f0f0f0" }}
                        fullWidth
                        placeholder="Write a message..."
                      />
                      <ErrorMessage name="post" component="div" />
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mr: 4, mt: 2  }}
                  >
                    <Button variant="contained" sx={{color: 'white'}} type="submit" onClick={() => setAddPost(prev => !prev)}>
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Box
                sx={{
                  position: "absolute",
                  right: "-4%",
                  top: "45%",
                  width: 50,
                  height: 50,
                  bgcolor: "#fe748d",
                  borderRadius: 10,
                }}
              ></Box>
            </Card>
          </Form>
        </Formik>
      )}

      {!addPost && (
        <Button
          variant="contained"
          sx={{ color: "white", px: 4, py: 1, borderRadius: 2, fontSize: 14 }}
          onClick={() => setAddPost((prev) => !prev)}
        >
          Write
        </Button>
      )}
    </Box>
  );
}
export default AddTweetForm;
