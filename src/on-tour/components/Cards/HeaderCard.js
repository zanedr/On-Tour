import React from 'react'

export const HeaderCard = (info) => {
  return (
    <div className="header-card">
      <h5 className="header-card-text">{info[0]}</h5>
      <h5 className="header-card-text">{info[1]}</h5>
      <h5 className="header-card-text">{info[2]}</h5>
      <h5 className="header-card-text">{info[3]}</h5>
    </div>
  )
}
