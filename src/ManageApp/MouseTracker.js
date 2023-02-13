
import React, { useState } from 'react'

const MouseTracker = ({render}) => {
    const [position, setPosition] = useState({x:0, y:0})
    const handleMouse = (e) => {
        setPosition({
            x:e.clientX,
            y:e.clientY
        })
    }
  return (
    <div onMouseOver={handleMouse}>
        {render(position)}
    </div>
  )
}

export default MouseTracker