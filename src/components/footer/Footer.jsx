import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import{BsLinkedin} from  'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AOA Technologies</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Gallery</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.coom"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
        <a href="https://linkedin.com"><BsLinkedin/></a>
      </div>
    
    <div className="footer_copyright">
      <small>&copy; AOA Technologies. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer
