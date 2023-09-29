import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiGraduateCap} from 'react-icons/gi'
import {LiaSchoolSolid} from 'react-icons/lia'

function About() {
  return (
    <div className='experience'>
      <VerticalTimeline linecolor='black'>
          <VerticalTimelineElement className='vertical-timeline-element--education'
              iconStyle={{background:'black',color:'white'}}
              icon={<GiGraduateCap/>}
              date="2020 - present"
          >
              <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Bachelor of Engineering</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Computer Science and Engineering</h4>
    <p className='description' style={{ color: 'black' }}>
    CGPA-8.6
    </p> 
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education'
              iconStyle={{background:'black',color:'white'}}
              icon={<LiaSchoolSolid/>}
              date="2019-2020"
          >
              <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>HSC</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Velammal MAtic Hr sec School</h4>
    <p className='description' style={{ color: 'black' }}>
      Percentage-85.16%
    </p> 
          </VerticalTimelineElement>


          <VerticalTimelineElement className='vertical-timeline-element--education'
              iconStyle={{background:'black',color:'white'}}
              date="2017 - 2018"
              icon={<LiaSchoolSolid/>}
          >
              <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>SSLC</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Velammal MAtic Hr sec School</h4>
    <p className='description' style={{ color: 'black' }}>
      Percentage-90.6%
    </p> 
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default About;
