import React from 'react'

export const GigCard = (info) => {

  const { index,
          order,
          venue,
          location,
          state,
          lat,
          lng,
          gasPrice,
          distance_from_last,
          cost_from_last,
          notes,
          editGig,
          deleteGig } = info

  const gig = {index: index,
               order: order,
               venue: venue,
               location: location,
               state: state,
               lat: lat,
               lng: lng,
               gasPrice: gasPrice,
               distance_from_last: distance_from_last,
               cost_from_last: cost_from_last,
               notes: notes,
              }


  return (
    <div className="gig-card-overview">
      <div className="gig-card"
        onClick={() => editGig(gig)}>
        <h5 className="gig-card-number">{order}.</h5>
        <h5 className="gig-card-text gig-card-location">{location}</h5>
        <h5 className="gig-card-text gig-card-venue">{venue}</h5>
        <h5 className="gig-card-text gig-card-distance">
          {GigCardEvaluateDistance(distance_from_last)}
        </h5>
        <h5 className="gig-card-text gig-card-cost">
          {GigCardEvaluateCost(cost_from_last)}
        </h5>
      </div>
      <section className="gig-card-delete"
               onClick={() => deleteGig(gig)}>
        <h6 className="gig-card-delete-text">Delete</h6>
      </section>
    </div>
  )
}

const GigCardEvaluateDistance = (value) => {
  if(!value || value === 0) {
    return 'N/A'
  } else {
    return `${value} miles`
  }
}

const GigCardEvaluateCost = (value) => {
  if(!value || value === 0) {
    return 'N/A'
  } else {
    return `$${value}`
  }
}
