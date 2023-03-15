import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
  const[letterClass,setLetterClass]=useState('text-animate')

  useEffect(()=>{
    setTimeout(()=>{setLetterClass('text-animate-hover')},3000)
  })

  return (
    <>
      <div className='container about-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t','','M','e']} idx={15} />
          </h1>
          <p style={{marginLeft:-20, fontSize:16, fontWeight:400}}>
              A detail-oriented and self-motivated Front end developer looking for a role/position in an Organization wherein I could devote my skills and effort for mutual growth and success. I genuinely enjoy working or playing around with the latest technologies all the while challenging myself with diverse problems and projects.
            </p>
            <p align="LEFT" style={{marginLeft:-20, fontSize:16, fontWeight:400}}>
              I'm nothing but an ambitious, goal-driven and curious Human Male who is yet to uncover the many teachings and mysteries of life and the world at large, drifting through a seemingly normal yet absoulutely fascinating period of time, within the greater meaning and extent of time and reality itself. Been walking, running and doing everything you can think of in between for about 8069 days, spent each one of them as bullish/optimistic as I could. Grateful to be where I am.
            </p>
            <p style={{marginLeft:-20, fontSize:16, fontWeight:400}}>
              If I would ever need to define myself in one word or couple of em it would probably be something along the lines of.. an avid hiker, philosopher, f1/motorsport fanatic,
              nomad, and tech-obsessed!!!
            </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>

          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default About 