import React from 'react'
import { ReactComponent as ShipIcon } from '../assets/ships/pixel-ship.svg'

const shipContainerStyles = {
  width: 60,
  height: 60,
  position: 'absolute',
}

function Ship() {
  const setPosition = (el) => {
    document.addEventListener('mousemove', (e) => {
      el.style.top = e.pageY - 30 + 'px'
      el.style.left = e.pageX - 30 + 'px'
    })
  }

  return (
    <div ref={(el) => setPosition(el)} style={shipContainerStyles}>
      <ShipIcon />
    </div>
  )
}

export default Ship
