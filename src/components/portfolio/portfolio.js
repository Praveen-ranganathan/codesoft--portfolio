import React from 'react'
import java from '../../assests/java.jpeg'
import react from '../../assests/react.jpeg'
import js from '../../assests/js.jpeg'
import git from '../../assests/git.jpeg'
import sql from '../../assests/sql.jpeg'
import './portfolio.css'


export default function Portfolio() {
  return (
    <section id='skills'>
        <span className='skillTitle'>Skills</span><br/>
        <span className='skillDoc'>I love to learn new things and experiment with new technologies.
These are some of the major languages, technologies, tools and platforms I have worked with:</span>
        <div className='skillBar'>
            <div id='skillBar' className='languages'>LANGUAGES AND DATABASE
            <img src={java} alt='java' className='skillBarImg'/>
            <img src={sql} alt='sql' className='skillBarImg'/>
            <img src={js} alt='js' className='skillBarImg'/>
            </div>

            <div id='skillBar' className='framework'>FRAMEWORKS AND TECHNLOGIES
            <img src={react} alt='react' className='skillBarImg'/> 
            </div>
            
            <div  id='skillBar' className='tools'>TOOLS AND PLATFORMS
            <img src={git} alt='git' className='skillBarImg'/>
            </div>
        </div>
    </section>
  )
}
