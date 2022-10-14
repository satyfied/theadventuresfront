import React from 'react'
import './header.css'
import CTA from './CTA'
import Logo from '../../assets/Anima2.gif'
import Logo2 from '../../assets/AOA.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <div className='logo-icon'>
          <img src={Logo2} alt="AOA" />
        </div>
        <h5>THE POINTER </h5>
        <h1>AOA Technologies</h1>
        <h5 className="text-light">creating value with tech...</h5>
        <CTA />
<HeaderSocials />

        <div className="me">
          <img src={Logo} alt="Anima2" />
          </div>
           <a href="#contact" className='scroll_down'>Scroll Down</a>
                </div>
    </header>
  )
}

export default Header
