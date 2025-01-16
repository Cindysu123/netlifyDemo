// src/Form.jsx
import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Contact Form
      </Typography>
      {/* Add 'netlify' and 'name' attributes */}
      <form
        name="contact-form"
        method="POST"
        data-netlify="true" // This tells Netlify to handle the form submission
        netlify-honeypot="bot-field" // Optional: Anti-spam field (Netlify can ignore this field during form submission)
        onSubmit={(e) => e.preventDefault()} // Prevent default submission to control the form behavior
      >
        <Grid container spacing={2}>
          {/* This is a hidden field for anti-spam (bot protection) */}
          <input type="hidden" name="form-name" value="contact-form" />
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
