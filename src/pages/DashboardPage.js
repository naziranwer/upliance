import React, { useState } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import Counter from "../components/Counter";
import UserDataForm from "../components/UserDataForm";
import RichTextEditor from "../components/RichTextEditor";
import ShowIdForm from "../components/showIdForm";
import Header from "../components/Header";

const DashboardPage = () => {
  const [savedData, setSavedData] = useState(JSON.parse(localStorage.getItem('formData')) || {});
  console.log('saved data in dashboard',savedData);
  // Function to update form data and save to localStorage
  const updateSaveData = (data) => {
    setSavedData(data);
    localStorage.setItem('formData', JSON.stringify(data));
  };

  return (
    <>
    <Header/>
    <Container maxWidth="lg" style={{ marginTop: "2rem",padding:"0px 20px 50px 20px"}}>
      <Typography variant="h4" style={{ textAlign: "center", marginBottom: "2rem" }} gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "1.5rem", minHeight: "200px", backgroundColor: "#fff", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)" } }}>
            <Counter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "1.5rem", minHeight: "200px", backgroundColor: "#fff", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)" } }}>
            <RichTextEditor savedData={savedData}  />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "1.5rem", minHeight: "200px", backgroundColor: "#fff", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)" } }}>
            <ShowIdForm />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "1.5rem", minHeight: "200px", backgroundColor: "#fff", transition: "transform 0.2s", "&:hover": { transform: "scale(1.05)" } }}>
            <UserDataForm  updateSaveData={updateSaveData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default DashboardPage;

