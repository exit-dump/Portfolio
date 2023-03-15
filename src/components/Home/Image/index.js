import React from 'react'
import LogoM from '../../../assets/images/logo-a8.png'
import './index.scss'

function Image() {
  return (
    <div className='container'>
      <img src={LogoM} alt='programmer' className='img' />
    </div>
  )
}

export default Image