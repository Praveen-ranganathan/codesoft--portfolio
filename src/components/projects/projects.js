import React from 'react'
import ProjectItem from './projectItem'
import hand from '../../assests/hand-sign.jpg'
import cake from "../../assests/cake-shop.jpg"
import health from "../../assests/healthcare-chatbot.jpg"
import portfolio from "../../assests/portfolio.jpg"
import './project.css'

export default function Projects() {
  return (
    <div>
       <center><h1>My Personal Projects</h1></center>
       <div className='projectList'>
        <ProjectItem name="Hand Sign Recognnition" image={hand}/>
        <ProjectItem name="Cake-Shop Website" image={cake}/>
        <ProjectItem name="Healthcare-ChatBot " image={health}/>
        <ProjectItem name="Portfolio Website" image={portfolio}/>

       </div>
    </div>
  )
}
