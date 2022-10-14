import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
  <h5>What Skills we Have</h5>
  <h2>Our Expertise</h2>
  <div className="container experience_container">
    <div className="experience_frontend">
    <h3>Products and Expertise</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Smart School Mangement System</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Inventory Management System</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Hospital management System</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
         <div>
         <h4>IT Consultation</h4>
          <small className='text-light'>Experienced</small>
         </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Hotel Management System</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Figma</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Blender</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Corel Draw</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
      </div>
    </div>
    {/* END OF FRONT END */}
    <div className="experience_backend">
      <h3>Surveillance/Security and Others</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Access Door Installation</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>cabling handling</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Office Setup</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>IT Consultancy</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon'/>
          <div>
          <h4>Estate Security</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
           <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
          <div>
          <h4>Fiber Optics</h4>
          <small className='text-light'>Experienced</small>
          </div>
           </article>
          
      </div>

      </div>
  </div>
    </section>
  )
}

export default Experience
