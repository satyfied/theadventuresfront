import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x7ruclv', 'template_cc1haj9', form.current, 'kaRjquy1pm3Uez8QU')

    
      .then((result) => {
        alert("Congratulation Message sent")
        e.target.reset()
          console.log(result);
      }, (error) => {
        alert("Opps, message not sent")
          console.log(error);
      });
  };

  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
              <h4>Email</h4>
              <small>aoatechnologies@outlook</small>
              <a href="mailto:aoatechnologies@outlook.com" target ="_blank"> Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h6>Creating Value with tech ...</h6>
              <a href="https://m.me/satyfied" target ="_blank"> Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
              <h4>Whatsapp</h4>
              <small>Official Whatsapp</small>
              <a href="https://api.whatsapp.com/send?phone+2348163798163" target ="_blank"> Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='You Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
