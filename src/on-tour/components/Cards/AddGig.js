import React, { Component } from 'react'

export const AddGig = (command) => {
  const { addLocation } = command
  return (
    <div onClick={(e) => addLocation()} id="add-gig-container">
      <h5 className="add-gig">Add a gig</h5>
    </div>
  )
}
