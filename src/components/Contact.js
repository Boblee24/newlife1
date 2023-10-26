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
          <strong>Church Address:</strong> Healing Cathedral, NCC Nnanta Street Rumuodara Port-Harcourt
        </p>
        <div className='number'>
          <strong>Phone:</strong> <span className='hello'><span className='soji' >08066250651</span><span className='soji' >08032637724</span><span className='soji'>07033441420</span></span>
        </div>
        <p>
          <strong>Email:</strong> newlifechristiancenter01@gmail.com
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