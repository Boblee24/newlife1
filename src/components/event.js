import React from 'react'

const Event = () => {
  return (
    <div className='event section' id='event'>
      <h2>Upcoming Events</h2>
  <div className="event-list">
    <div className="event-item">
      <h3>Community Picnic</h3>
      <p>
        Join us for a fun-filled day at the park on [Date] at [Location]. Bring your family and friends!
      </p>
    </div>
    <div className="event-item">
      <h3>Youth Camp</h3>
      <p>
        Join us for a fun-filled day at the park on [Date] at [Location]. Bring your family and friends!
      </p>
    </div>
    <div className="event-item">
      <h3>Prayer Meeting</h3>
      <p>
        Gather for a time of prayer and spiritual reflection on [Date] at [Location].
      </p>
    </div>
  </div>
    </div>
  )
}

export default Event