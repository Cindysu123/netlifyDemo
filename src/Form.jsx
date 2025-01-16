export default function Form() {
    return (
        <form noValidate className="needs-validation" id="contactForm" name="contactForm" method="POST"
            netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="contactForm" />
            <div className="form-group">
                <label className="display-block">
                    <h6 className="contact-label">Full Name <span className="text-danger">*</span></h6>
                    <input onChange={handleChange} className="form-control" type="text" name="name" required />
                    <div className="invalid-feedback">
                        Please enter your full name.
                    </div>
                </label>
            </div>
            <div className="form-group">
                <label className="display-block">
                    <h6 className="contact-label">Email <span className="text-danger">*</span></h6>
                    <input onChange={handleChange} className="form-control" type="email" aria-describedby="emailHelp" name="email" required />
                    <div className="invalid-feedback">
                        Please enter a valid email.
                    </div>
                </label>
            </div>
            <div className="form-group">
                <label className="display-block">
                    <h6 className="contact-label">Phone <span className="text-danger">*</span></h6>
                    <input onChange={handleChange} className="form-control" type="tel" aria-describedby="phonelHelp" name="phone" required />
                    <div className="invalid-feedback">
                        Please enter a valid phone number.
                    </div>
                </label>
            </div>
            <div className="form-group">
                <label className="display-block">
                    <h6 className="contact-label">Company Name {requiredCompany && <span className="text-danger">*</span>}</h6>
                    <input onChange={handleChange} className="form-control" type="company" aria-describedby="companyHelp" name="company" required={requiredCompany} />
                    <div className="invalid-feedback">
                        Please enter a company name.
                    </div>
                </label>
            </div>
            <div className="form-group">
                <label className="display-block">
                    <h6 className="contact-label">How can we help you? <span className="text-danger">*</span></h6>
                    <select defaultValue="" onBlur={handleChange} className="custom-select" name="request" required>
                        <option disabled value="">-- Select an option --</option>
                        <option value="I want more information">I want more information</option>
                        <option value="I want to request a quote">I want to request a quote</option>
                        <option value="I want to become a RippleGo Beta Tester">I want to become a RippleGo Beta Tester</option>
                        <option value="I want to request a RippleGo demo">I want to request a RippleGo demo</option>
                        <option value="Other">Other</option>
                    </select>
                    <div className="invalid-feedback">
                        Please select an option.
                    </div>
                </label>
            </div>
            <div className="form-group">
                <label className="display-block">
                    <h6 className="contact-label">Your Message <span className="text-danger">*</span></h6>
                    <textarea onChange={handleChange} name="message" className="form-control" rows="5" required></textarea>
                    <div className="invalid-feedback">
                        Please enter a message.
                    </div>
                </label>
            </div>
            <button type='submit'>Submit</button>
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