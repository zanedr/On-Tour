import React, { Component } from 'react'

export const GigCard = (info) => {

  const { index, location, order, notes, venue, distance_from_last, cost_from_last, editGig, deleteGig } = info

  const gig = {index: index,
               location: location,
               venue: venue,
               distance_from_last: distance_from_last,
               cost_from_last: cost_from_last,
               order: order,
               notes: notes}


  return (
    <div className="gig-card-overview">
      <div className="gig-card" onClick={() => editGig(gig)}>
        <h5 className="gig-card-number">{order}.</h5>
        <h5 className="gig-card-text">{location}</h5>
        <h5 className="gig-card-text">{venue}</h5>
        <h5 className="gig-card-text">{distance_from_last} miles</h5>
        <h5 className="gig-card-text">{cost_from_last}</h5>
      </div>
      <section className="gig-card-delete" onClick={() => deleteGig(gig)}>
        <h6 className="gig-card-delete-text">Delete</h6>
      </section>
    </div>
  )
}
