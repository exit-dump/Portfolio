import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react'
import { toast } from 'react-toastify'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(()=>{
    setTimeout(()=>{setLetterClass('text-animate-hover')},3000)
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_r72u30h',
      'template_yw698cg',
      form.current,
      '0vV0_L9VNFTNt4IM9')
      .then(
        () => {
          toast.success('Message sent Successfully')
          setTimeout(()=>window.location.reload(false), 3000)
        },
        () => {
          toast.error('Message could not be sent, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 style={{marginLeft:-20}}>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p style={{marginLeft:-23, fontSize:16, fontWeight:400}}>
          I am interested in Freelance opportunities as well as working in a challenging/Fast-paced and innovative Organization. However, if you have any other request or just want to chat about how good the weather is... Don't hesitate to contact me using the form below either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Akhil Jacob,
          <br />
          New Delhi 49,
          <br />
          India <br />
          <span>rsonofrome@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.558933,77.224167]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.558933,77.224167]}>
              <Popup className='popup-style'>A guy called Akhil is usually seen hanging around here, come over for a beer or a Coffee....</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact