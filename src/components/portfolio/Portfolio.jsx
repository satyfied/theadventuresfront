import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Gallery1.gif'
import IMG2 from '../../assets/Gallery2.gif'
import IMG3 from '../../assets/Gallery3.gif'
import IMG4 from '../../assets/Gallery4.gif'
import IMG5 from '../../assets/Gallery5.gif'
import IMG6 from '../../assets/Gallery6.gif'


// Array of Images====================//

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'ICT Training',
    youtube: '',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Web Design',
    youtube: '',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Office Setup',
    youtube: '',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Enterprise Application',
    youtube: '',
    demo: ''
  },
  {
    id: 5,
    image: IMG5,
    title: 'Educational Application',
    youtube: '',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: 'Creative Designs',
    youtube: '',
    demo: ''
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>Our Recent Work</h5>
     <h2>Gallery</h2>

     <div className="container portfolio_container">
      {
        data.map(({id, image, title, youtube, demo}) =>{
          return (
            <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
            </div>
            <h3>{title} </h3>
            <div className="portfolio_item-cta">
            <a href={youtube} className='btn' target='-blank'>Youtube</a>
            <a href={demo} className='btn btn-primary' target='-blank'>Live Demo </a>
            </div>
            </article>
          )
        })
      }
      

          </div> 
    </section>
  )
}

export default Portfolio
