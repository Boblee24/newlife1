import React from 'react'
import soft1 from '../newlife/image9.jpg'; // Import the image|
import soft2 from '../newlife/latest2.jpg'; // Import the image|
// import soft2 from '../newlife/youth1.jpg'; // Import the image

const Ministries = () => {
  return (
    <div className='ministries section' id='ministries'>
      <h2>MINISTRIES</h2>
      <p className='head'>
        At Newlife Christian Center, we offer a variety of ministries to meet the spiritual needs of our diverse community. Get involved and grow in your faith through our ministries:
      </p>
      <div className="ministries-list">
        {/* <div className="ministry-item">
          <img className='ministry-image' src={soft1} alt='soft1'/>
          <h3>Youth Ministry</h3>
          <p>
            Our youth ministry is dedicated to nurturing the faith of the next generation.
          </p>
        </div> */}
        <div className="ministry-item">
          <img className='ministry-image' src={soft1} alt='soft1'/>
          <h3>Monthly Rival Week Service</h3>
          <p>
            Second Week; Monday through Friday
          </p>
        </div>
        <div className="ministry-item">
          <img className='ministry-image' src={soft2} alt='soft2'/>
          <h3>Discipleship Class</h3>
          <p>
          Join us to deepen your faith and connect with fellow believers. Explore Christ's teachings in an interactive, welcoming environment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ministries