import React, { Component } from 'react'

export const GigCard = (info) => {

  const { index, location, state, lat, lng, order, notes, gasPrice, venue, distance_from_last, cost_from_last, editGig, deleteGig } = info

  const gig = {index: index,
               location: location,
               state: state,
               lat: lat,
               lng: lng,
               venue: venue,
               distance_from_last: distance_from_last,
               cost_from_last: cost_from_last,
               order: order,
               notes: notes,
               gasPrice: gasPrice
              }


  return (
    <div className="gig-card-overview">
      <div className="gig-card" onClick={() => editGig(gig)}>
        <h5 className="gig-card-number">{order}.</h5>
        <h5 className="gig-card-text gig-card-location">{location}</h5>
        <h5 className="gig-card-text gig-card-venue">{venue}</h5>
        <h5 className="gig-card-text gig-card-distance">{GigCardEvaluateDistance(distance_from_last)}</h5>
        <h5 className="gig-card-text gig-card-cost">{GigCardEvaluateCost(cost_from_last)}</h5>
      </div>
      <section className="gig-card-delete" onClick={() => deleteGig(gig)}>
        <h6 className="gig-card-delete-text">Delete</h6>
      </section>
    </div>
  )
}

const GigCardEvaluateDistance = (value) => {
  if(!value || value == 0) {
    return 'N/A'
  } else {
    return `${value} miles`
  }
}

const GigCardEvaluateCost = (value) => {
  if(!value || value == 0) {
    return 'N/A'
  } else {
    return `$${value}`
  }
}
