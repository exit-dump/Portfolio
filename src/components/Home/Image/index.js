import React from 'react'
import LogoM from '/Windows/System32/react-portfolio/src/assets/images/logo-a8.png'
import './index.scss'

function Image() {
  return (
    <div className='container'>
      <img src={LogoM} alt="Random picture of coding/software development" className='img' />
    </div>
  )
}

export default Image