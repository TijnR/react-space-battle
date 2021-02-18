import React from 'react'
import { ReactComponent as ShipIcon } from '../assets/ships/pixel-ship.svg'
import Bullet from './Bullet'

const shipContainerStyles = {
  width: 60,
  height: 60,
  position: 'absolute',
}

const shipInnerContainerStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

function Ship() {
  const setPosition = (el) => {
    document.addEventListener('mousemove', (e) => {
      el.style.top = e.pageY - 30 + 'px'
      el.style.left = e.pageX - 30 + 'px'
    })
  }

  return (
    <>
      <div ref={(el) => setPosition(el)} style={shipContainerStyles}>
        <div style={shipInnerContainerStyles}>
          <Bullet />
          <ShipIcon />
        </div>
      </div>
    </>
  )
}

export default Ship
