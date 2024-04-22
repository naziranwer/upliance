import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AppBar, Toolbar, Button, Typography, IconButton, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { auth } from "../services/firebase";
import { USER_LOGO } from "../services/constants";


const Header = () => {
  const navigate = useNavigate();
  const user=localStorage.getItem("user");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        localStorage.setItem("user",JSON.stringify({uid: uid, email: email, displayName: displayName }));
        navigate("/dashboard");
      } else {
        // User is signed out
        localStorage.removeItem("user");
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppBar position="static"  >
      <Toolbar>
        <Avatar src={USER_LOGO} alt="User Avatar" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:"5px" }}>
          My App
        </Typography>
        {user && (
          <Button color="inherit" onClick={handleSignOut}>
            Sign Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
