import React from 'react'

const titleStyles = {
  color: 'white',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 100,
  margin: '0 auto',
  textAlign: 'center',
  fontFamily: 'Orbitron',
  fontSize: '60px',
}

function Title() {
  return <h1 style={titleStyles}>React Rocket Cursor</h1>
}

export default Title
