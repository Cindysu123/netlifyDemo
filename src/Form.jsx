import { Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form() {
    const [contactSelect, setContactSelect] = useState('')

  return (
    <form
      name="contactUsForm"
      id="contactUsForm"
      method="POST"
      data-netlify="true"
      className='contact-form needs-validation'
      netlify-honeypot="bot-field" 
    >
      <input type="hidden" name="form-name" value="contactUsForm" />
      <TextField
        name="name"
        className='contact-textfield'
        label="Full Name"
        type='text'
        variant='outlined'
        fullWidth
        required
      /> 
      <TextField
        name="email"
        className='contact-textfield'
        label="Email"
        type='text'
        variant='outlined'
        fullWidth
        required
      /> 
      <TextField
        name="company"
        className='contact-textfield'
        label="Compay Name"
        type='text'
        variant='outlined'
        fullWidth
        required
      /> 
      <FormControl fullWidth className='contact-textfield' required>
        <InputLabel id="contact-select">How can we help you?</InputLabel>
        <Select
          labelId='contact-select'
          value={contactSelect}
          label="How can we help you?"
          name="request"
          onChange={e => setContactSelect(e.target.value)}
        >
          <MenuItem value={'information'}>I want more information</MenuItem>
          <MenuItem value={'quote'}>I want to request a quote</MenuItem>
          <MenuItem value={'ripplego-tester'}>I want to become a RippleGo Beta Tester</MenuItem>
          <MenuItem value={'ripplego-demo'}>I want to request a RippleGo demo</MenuItem>
          <MenuItem value={'other'}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextareaAutosize
        name="message"
        className='contact-textfield mui-textarea'
        label="Your Message"
        type='text'
        placeholder='How can we help you?'
        minRows={5}
        required
      /> 
      <p hidden>
        <label>
          <b>Dummy <span className="text-danger">*</span></b>
          <input name="bot-field"/>
        </label>
      </p>

      <Button
        className='mt-4'
        type='submit'
        variant='contained'
        color='warning'
        fullWidth
      >
        Submit
      </Button>
    </form>
  )
}

// export default function Form() {
//     return (
//         <form 
//         method='POST' 
//         name='contactform' 
//         className='contactForm'>

//         <input 
//             type='hidden'
//             name='form-name'
//             value='contactForm' />

//         <input 
//             type='text' 
//             name='name' 
//             placeholder='Enter your name' />

//         <input 
//             type='email' 
//             name='email' 
//             placeholder='Enter your email' />

//         <textarea 
//             name='message' 
//             placeholder='Messaage'></textarea>

//         <button type='submit'>Submit</button>
//         </form>
//     )
// }