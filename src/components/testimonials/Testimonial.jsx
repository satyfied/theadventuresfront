import React from "react";
import "./testimonial.css";
import AVAT1 from "../../assets/AVAT1.jpg";
import AVAT2 from "../../assets/AVAT2.jpg";
import AVAT3 from "../../assets/AVAT3.jpg";
import AVAT4 from "../../assets/AVAT4.jpg";

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
    name: "SOLIDROCK MICROFINANCE",
    review:
      "We developed a great partnership with AOA Technologies and their dedication to project is exceptional. We appreciate their attention to details and creative approach to bringing our new exhibit to security.",
  },
  {
    avatar: AVAT2,
    name: "MERCY GROUP CLINICS",
    review:
      "We have been thrilled to have AOA Technologies experties collection to our pack of contractors. They have been unique and have lots of amazing work ethics and the ability to easily create solution to any problem. I'm very happy that i gave them a go.",
  },
  {
    avatar: AVAT3,
    name: "SINOTRUST MINNING",
    review:
      "AOA Technologies' staff is really what break the Ice. This Company have got great set of people. They are wonderful and always working hard. Keep up the good work guys and thank you for being trust worthy.",
  },
  {
    avatar: AVAT4,
    name: "TRESAF PHARMACY & STORE",
    review:
      "Amazing guys with unbilivable attitudes to work. The Sinage Project was a sucess. Great job guys!!!.",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/*Swiper pagination={true} modules={[Pagination]}*/}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="container testimonials_container"
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
