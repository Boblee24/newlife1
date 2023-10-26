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
            <strong>Time:</strong> 8:00 AM 
          </p>
          <p>
            <strong>Location:</strong> Healing Cathedral, NCC Nnanta Street Rumuodara Port-Harcourt
          </p>
        </div>
        <div className="service-item">
          <h3>Wednesday Bible Study</h3>
          <p>
            <strong>Time:</strong> 6:00 PM
          </p>
          <p>
            <strong>Location:</strong> Healing Cathedral, NCC Nnanta Street Rumuodara Port-Harcourt
          </p>
        </div>
        <div className="service-item">
          <h3>Friday Revival Service</h3>
          <p>
            <strong>Time:</strong> 6:00 PM
          </p>
          <p>
            <strong>Location:</strong> Healing Cathedral, NCC Nnanta Street Rumuodara Port-Harcourt
          </p>
        </div>
      </div>
    </div>
  )
}

export default Serviceinfo