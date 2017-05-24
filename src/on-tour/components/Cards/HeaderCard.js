import React, { Component } from 'react'

export const HeaderCard = (info) => {
  console.log('info', info[0]);
  return (
    <div className="header-card">
      <h5 className="header-card-text">{info[0]}</h5>
      <h5 className="header-card-text">{info[1]}</h5>
      <h5 className="header-card-text">{info[2]}</h5>
      <h5 className="header-card-text">{info[3]}</h5>
    </div>
  )
}
