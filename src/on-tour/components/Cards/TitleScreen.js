import React from 'react'

export const TitleScreen = (scene) => {
  return (
    <div id="main-div" onClick={(e) => {scene('initialInfo')}}>
      <h1 id="main-title">On Tour</h1>
      <h6 id="main-subtext">- click to start -</h6>
    </div>
  )
}
