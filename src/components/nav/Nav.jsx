import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] =useState('#')
  return (
   <nav> 
    <a href="/" onClick ={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
    <a href="#pre-wedding" onClick={() => setActiveNav('#pre-wedding')} className={activeNav === '#pre-wedding' ? 'active' : ''}><BiBookAlt/></a>
    <a href="#introduction" onClick={() => setActiveNav('#introduction')} className={activeNav === '#introduction' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#chruch-wedding" onClick={() => setActiveNav('#chruch-wedding')} className={activeNav === '#chruch-wedding' ? 'active' : ''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav
