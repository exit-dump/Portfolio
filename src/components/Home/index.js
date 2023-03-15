import { Link } from 'react-router-dom'
import './index.scss';
import LogoTitle from '../../assets/images/logo-a3.png'
import LogoTit from '../../assets/images/logo-a7.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Image from './Image';

function Home() {
  useEffect(()=>{
    setTimeout(()=>{setLetterClass('text-animate-hover')},3000)
  })
  const[letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['k','h','i','l']
  const omArray=['a','c','o','b']
  const jobArray=['W','e','b','','d','e','v','e','l','o','p','e','r','.']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span> 
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> 
            <img src={LogoTitle} alt="developer" style={{
            height:50, width:50, 
            }}/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <img src={LogoTit} alt="developer" style={{
            height:50, width:50,
            }}/>
            <AnimatedLetters letterClass={letterClass} strArray={omArray} idx={20} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
            <br />
          </h1>
          <h2 style={{fontSize:14}}>Frontend Developer / Javascript wizard</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Image />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home