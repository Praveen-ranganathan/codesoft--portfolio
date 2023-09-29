import React from 'react'
import './intro.css'
import my from '../../assests/My.jpeg'
import btnImg from '../../assests/btnImg.png'
import { Typewriter } from 'react-simple-typewriter'
import {CiLinkedin} from 'react-icons/ci' 
import { CiMail } from 'react-icons/ci'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Intro = () => {

  const handleType = (count) => {
    // access word count number
    console.log(count);
     }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
     <section id='intro'>
      <div className='introContent'>
        <span className='hello'>HELLO!!!</span>
        <span className='introText'>I'm <span className='introName'>PRAVEEN</span>
          <br />a{' '}</span>

        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Web Developer', 'Cyber Security Enthusiast','Programmer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType} />
        </span>

        <Link to='/contact'> <button className='btn'> <img src={btnImg} className="btnImg" alt='Hire me' />Hire ME</button></Link>

        <div className='profileLinks'>
      

        <a
          href='mailto:praveen.r.2020.cse@ritchennai.edu.in'
          target='_blank'
          rel='noopener noreferrer'
        >
           <CiMail className='profileImg' style={{color:'white'}}/>
        </a>

        <a
          href='https://www.linkedin.com/in/praveen-229b8b200'
          target='_blank'
          rel='noopener noreferrer'
        >
           <CiLinkedin className='profileImg' style={{color:'blue'}}/>
        </a>

        <a
          href='https://github.com/Praveen-ranganathan'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='profileImg' style={{color:'white'}}/>
        </a>


     
     
      
      </div>
      </div>
         
      <img src={my} alt='Profile' className='bg' />
      
  </section>
  
  )
}


export default Intro;