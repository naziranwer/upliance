import React, { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const UserDataForm = ({ updateSaveData }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, address, email, phone } = formData;
    if (!name || !address || !email || !phone) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    const id = uuidv4();
    console.log('id generated0',id)
    setFormData(prevFormData => ({ ...prevFormData, id }));

    updateSaveData({...formData,id})
    alert("User data saved successfully!");
    setFormData({
      id: "",
      name: "",
      address: "",
      email: "",
      phone: "",
    })
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (Object.values(formData).some((value) => value !== "")) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [formData]);

  return (
    <div>
      <Typography variant="h5" sx={{textAlign:"center"}}>User Data Form</Typography>
      <form>
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ display: 'block', margin: '0 auto' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UserDataForm;
