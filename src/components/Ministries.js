import React from 'react'
import soft1 from '../newlife/women.jpg'; // Import the image
// import soft2 from '../newlife/youth1.jpg'; // Import the image

const Ministries = () => {
  return (
    <div className='ministries section' id='ministries'>
      <h2>MINISTRIES</h2>
      <p className='head'>
        At Newlife Christian Center, we offer a variety of ministries to meet the spiritual needs of our diverse community. Get involved and grow in your faith through our ministries:
      </p>
      <div className="ministries-list">
        <div className="ministry-item">
          <img className='ministry-image' src={soft1} alt='soft1'/>
          <h3>Youth Ministry</h3>
          <p>
            Our youth ministry is dedicated to nurturing the faith of the next generation.
          </p>
        </div>
        <div className="ministry-item">
          <img className='ministry-image' src={soft1} alt='soft1'/>
          <h3>Children Ministry</h3>
          <p>
            Our Children ministry is dedicated to nurturing the faith of the next generation.
          </p>
        </div>
        <div className="ministry-item">
          <img className='ministry-image' src={soft1} alt='soft1'/>
          <h3>Women's Ministry</h3>
          <p>
            Join our women's ministry for fellowship, support, and spiritual growth. GRAN TURISMO
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ministries