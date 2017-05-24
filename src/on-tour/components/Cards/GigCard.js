import React, { Component } from 'react'

export const GigCard = (info) => {

  const { index, location, venue, distance_from_last, cost_from_last } = info

  return (
    <div className="gig-card">
      <h5 className="gig-card-number">{index}.</h5>
      <h5 className="gig-card-text">{location}</h5>
      <h5 className="gig-card-text">{venue}</h5>
      <h5 className="gig-card-text">{distance_from_last}</h5>
      <h5 className="gig-card-text">{cost_from_last}</h5>
    </div>
  )
}
