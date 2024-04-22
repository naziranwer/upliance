import React, { useRef, useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { TextField, Button, Typography, Link, Container, CssBaseline, Avatar, Grid, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { checkValidData } from "../services/constants";
import { auth } from "../services/firebase";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errormsg, setErrorMsg] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    // form data validation
    console.log('submit button is clicked');
    const msg = checkValidData(emailRef.current.value, passwordRef.current.value);
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        //   navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div style={{margin:0,padding:0}}>
      
      <Header/>
      <Container component="main" maxWidth="xs" sx={{marginTop:"50px"}}>
        <CssBaseline />
        <div>
          <Avatar sx={{ m: 'auto', bgcolor: "secondary.main", }}>
            <LockOutlinedIcon sx={{textAlign:"center"}} />
            
          </Avatar>
          <Typography component="h1" variant="h5" sx={{textAlign:"center"}}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </Typography>
          <Box component="form" onSubmit={(e) => e.preventDefault()} noValidate sx={{ mt: 1 }}>
            {!isSignInForm && (
              <TextField
                margin="normal"
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            )}
            <TextField
              inputRef={emailRef}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or Mobile Number"
              autoComplete="email"
            />
            <TextField
              inputRef={passwordRef}
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            {errormsg && <Typography color="error">{errormsg}</Typography>}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={toggleForm} variant="body2" style={{ cursor: "pointer" }}>
                  {isSignInForm ? "New to App? Sign Up Now" : "Already Registered? Sign In Now"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Login;
