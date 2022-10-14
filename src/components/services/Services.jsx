import React from 'react'
import './services.css'
import {SiCheckmarx} from 'react-icons/si'

const Services = () => {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Software Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Educational Application Development</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Health Application Development</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Mobile App Development</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Website Designe</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Web Application Development</p>
            </li>
          </ul>
          </article>
          {/*END OF SOFTWARE */}
          <article className="service">
          <div className="service_head">
            <h3>Security and Configuration</h3>
          </div>
          <ul className='service_list'>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Home and Office Networking</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>CCTV Surveillances Installation</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Electric Fencing</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Solar Installation</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Security & Fire Alarm Installation</p>
            </li>
          </ul>
          </article>
          {/*END OF SURVEILLANCE */}
          <article className="service">
          <div className="service_head">
            <h3>Creative Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Business and ID Card</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Wedding & Complementary Card</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>3D Logo</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Cinage and Banner</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Item Branding</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>UI/UX Design</p>
            </li>
          </ul>
          </article>
          {/*END OF Creative */}
          
          <article className="service">
          <div className="service_head">
            <h3>Others</h3>
          </div>
          <ul className='service_list'>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>IT Consultancy</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Office Setup</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>AOA Cakery and Suprises</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Fiber Optic Splicing</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>Internet Installation</p>
            </li>
            <li>
              <SiCheckmarx className='service_list-icon' />
              <p>IT Related Training</p>
            </li>
          </ul>
          </article>
          {/*END OF SURVEILLANCE */}
          </div>      
    </section>
  )
}

export default Services
