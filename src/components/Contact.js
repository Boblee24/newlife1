import React from 'react'

const Contact = () => {
  return (
    <div className='contact section' id='contact'>
      <h2>Contact Us</h2>
      <p className='contact-description'>
        We'd love to hear from you! If you have any questions, prayer requests, or would like to get in touch with us, please use the contact form below or reach out using the provided contact details.
      </p>
      <div className='contact-details'>
        <p>
          <strong>Church Address:</strong> [Church Address]
        </p>
        <p>
          <strong>Phone:</strong> [Phone Number]
        </p>
        <p>
          <strong>Email:</strong> [Email Address]
        </p>
      </div>
      {/* <div className='contact-form'> */}
        {/* Add a contact form component here */}
        {/* <input type='text' placeholder='Your Name' className='input-field' /> */}
        {/* <input type='email' placeholder='Your Email' className='input-field' />
        <textarea placeholder='Your Message' className='input-field message' />
        <button className='submit-button'>Submit</button>
      </div> */}
    </div>
  )
}

export default Contact