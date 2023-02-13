import React from 'react'
import MouseTracker from './MouseTracker'

const DisplayMouse = () => {
  return (
    <MouseTracker 
    render={({x,y}) => (
        <h1>The mouse position is ({x}, {y})</h1>
    )}
    />
  )
}

export default DisplayMouse;