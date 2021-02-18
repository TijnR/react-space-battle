import React from 'react'
import background from './assets/images/background.png'

const backgroundStyles = {
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  objectFit: 'cover',
  zIndex: '-1',
}

function Background() {
  return <img src={background} style={backgroundStyles} alt="background"></img>
}

export default Background
