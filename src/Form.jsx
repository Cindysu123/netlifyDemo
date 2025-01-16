import { Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import React, { useState } from 'react';

// Utility function to encode form data
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Form() {
  const [contactSelect, setContactSelect] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission

    const formData = {
      'form-name': 'contactUsForm',
      name,
      email,
      company,
      message
    };

    // Submit form data using fetch
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(`Error: ${error}`));
  };

  return (
    <form
      name="contactUsForm"
      id="contactUsForm"
      method="POST"
      data-netlify="true"
      className="contact-form needs-validation"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}  // Form submission handled by handleSubmit
    >
      <input type="hidden" name="form-name" value="contactUsForm" />

      {/* Full Name Field */}
      <TextField
        name="name"
        className="contact-textfield"
        label="Full Name"
        type="text"
        variant="outlined"
        fullWidth
        required
        value={name}
        onChange={(e) => setName(e.target.value)}  // Handle name change
      />

      {/* Email Field */}
      <TextField
        name="email"
        className="contact-textfield"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}  // Handle email change
      />

      {/* Company Field */}
      <TextField
        name="company"
        className="contact-textfield"
        label="Company Name"
        type="text"
        variant="outlined"
        fullWidth
        required
        value={company}
        onChange={(e) => setCompany(e.target.value)}  // Handle company change
      />

      {/* Select Field */}
      <FormControl fullWidth className="contact-textfield" required>
        <InputLabel id="contact-select">How can we help you?</InputLabel>
        <Select
          labelId="contact-select"
          value={contactSelect}
          label="How can we help you?"
          onChange={(e) => setContactSelect(e.target.value)}  // Handle select change
        >
          <MenuItem value="information">I want more information</MenuItem>
          <MenuItem value="quote">I want to request a quote</MenuItem>
          <MenuItem value="ripplego-tester">I want to become a RippleGo Beta Tester</MenuItem>
          <MenuItem value="ripplego-demo">I want to request a RippleGo demo</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {/* Message Field */}
      <TextareaAutosize
        name="message"
        className="contact-textfield mui-textarea"
        placeholder="How can we help you?"
        minRows={5}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}  // Handle message change
      />

      {/* Bot Field (hidden for spam protection) */}
      <p hidden>
        <label>
          <b>Dummy <span className="text-danger">*</span></b>
          <input name="bot-field" />
        </label>
      </p>


      {/* Submit Button */}
      <Button
        className="mt-4"
        type="submit"
        variant="contained"
        color="warning"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
}