import React from 'react'
import './testimonial.css'
import AVAT1 from '../../assets/AVATTomi.jpg'
import AVAT2 from '../../assets/AVATTomi.jpg'
import AVAT3 from '../../assets/AVATLekan.jpg'
import AVAT4 from '../../assets/AVATDavid.jpg'

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
//import 'swiper/components/navigation/navigation.min.css'
//import 'swiper/components/EffectCards/EffectCards.min.css'

//import "./styles.css";



 
const data = [
  {
    avatar: AVAT1,
    name: 'olufemi Oluwatomi',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem adipisci, odit ea omnis quam blanditiis beatae quia eligendi ipsum amet possimus expedita ipsa impedit at odio sapiente aspernatur nam quo.'
  },
  {
    avatar: AVAT2,
    name: 'Kayode Damilola',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus suscipit quaerat. Sed distinctio ullam laboriosam harum eaque. Accusantium, exercitationem at accusamus quae tenetur iure asperiores minus dicta laboriosam veritatis.'
  },
  {
    avatar: AVAT3,
    name: 'Anthony Bola',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus suscipit quaerat. Sed distinctio ullam laboriosam harum eaque. Accusantium, exercitationem at accusamus quae tenetur iure asperiores minus dicta laboriosam veritatis.'
  },
  {
    avatar: AVAT4,
    name: 'Kareem Muyideen',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore delectus suscipit quaerat. Sed distinctio ullam laboriosam harum eaque. Accusantium, exercitationem at accusamus quae tenetur iure asperiores minus dicta laboriosam veritatis.'
  },
]
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/*Swiper pagination={true} modules={[Pagination]}*/}
      <Swiper pagination={true} modules={[Pagination]} className="container testimonials_container">
    
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide  key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}
            </small>
        </SwiperSlide>
            )
          })
        }        
      </Swiper>
    </section>
  )
}

export default Testimonial
