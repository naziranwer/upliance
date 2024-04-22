import React, { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
  Button,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const ShowIdForm = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    const newUserId = newName !== "" ? generateUniqueId() : "";
    setUserId(newUserId);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h5" gutterBottom sx={{textAlign:"center"}}>
          User Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="User ID"
              variant="outlined"
              value={userId}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={{ display: 'block', margin: '0 auto',marginTop:"10px" }}>
          Submit
        </Button>
      </Paper>
    </Container>
  );
};

export default ShowIdForm;
