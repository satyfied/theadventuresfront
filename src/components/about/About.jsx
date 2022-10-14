import React from 'react'
import './about.css'
import Me from '../../assets/Anima.gif'
import{FaAward} from  'react-icons/fa'
import{FiUsers} from  'react-icons/fi'
import{VscFolderLibrary} from  'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
     <h5> Get To Know</h5>
     <h2>About Us</h2>
     <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={Me} alt="About Image" />
        </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small> vast Years of Working</small>
          </article>
          
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small> 200+ Worldwide</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small> 40+ Project</small>
          </article>
        </div>
        <p>
        AOA Technologies is a new generation Information Technology Company, with extensive experience in designing, developing and implementing complete cutting edge IT solutions using latest world class technologies.
We are a multifaceted Information Technology firm with a team of seasoned IT experts that have several years of experience in various fields of Information Technology.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>

    </section>
  )
}

export default About
