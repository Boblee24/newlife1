import React from 'react'
import aboutImage from '../newlife/image3-new.jpg'; // Import the image

const About = () => {
  return (
    <div className='about section' id='about'>
      <h2>About Us</h2>
      <div className='about-content'>
        <img src={aboutImage} className='about-image' alt='about'/>
        <div className='about-note'>
          <p>
            Newlife Christian Center is a welcoming and loving community dedicated to spreading God's love and grace. We have been serving our congregation and community for [X] years.
          </p>
          <p>
          New Life Christian Center's mission is to spread their faith, nurture spiritual growth, serve the community, provide pastoral care, support youth and families, engage in local and global outreach, advocate for justice, care for the marginalized, and foster a strong congregation.
          </p>
          <a href='/'>Our History</a>
        </div>
      </div>
    </div>
  )
}

export default About