import React, { Component } from 'react'
import Venue from './Venue'

const VenueList = props => {
  const venueItems = props.venues.map(venue => {
    return <Venue key={venue.id} venue={venue} />
  })

  return <ul>{venueItems}</ul>
}

export default VenueList
