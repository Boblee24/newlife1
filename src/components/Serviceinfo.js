import React from 'react'

const Serviceinfo = () => {
  return (
    <div className='serviceinfo section' id='serviceinfo'>
      <h2>Service Information</h2>
      <p className='service-note'>
        Join us for worship and fellowship as we gather to praise the Lord and grow in our faith.
      </p>
      <div className="service-details">
        <div className="service-item">
          <h3>Sunday Worship</h3>
          <p>
            <strong>Time:</strong> 9:00 AM and 11:00 AM
          </p>
          <p>
            <strong>Location:</strong> [Church Address]
          </p>
        </div>
        <div className="service-item">
          <h3>Wednesday Bible Study</h3>
          <p>
            <strong>Time:</strong> 7:00 PM
          </p>
          <p>
            <strong>Location:</strong> [Church Address]
          </p>
        </div>
      </div>
    </div>
  )
}

export default Serviceinfo