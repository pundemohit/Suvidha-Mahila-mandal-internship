import React from 'react'
import img1 from '../../assets/child.jpg'
import img2 from '../../assets/free.jpg'
import img3 from '../../assets/tree.jpg'
import img4 from '../../assets/feed.jpg'
import img5 from '../../assets/dona.jpg'
import img6 from '../../assets/donate.jpg'

import './events.css'

const data = [
    {
        id: 1,
        image: img1,
        title: 'Child Education Events',
        
    },
    {
        id: 2,
        image: img2,
        title: 'Free Education(girls)',
        
    },
    {
        id: 3,
        image: img3,
        title: 'Tree Plantations',
        
    },
    {
        id: 4,
        image: img4,
        title: 'Stray Dog feeding campaign',
        
    },
    {
        id: 5,
        image: img5,
        title: 'Donation Campaigns for orphans',
        
    },
    {
        id: 6,
        image: img6,
        title: 'Awareness Campaign',
        
    },
]
const Events = () => {
    return (
        <div>

            <div className="container">
                <div className="ev_title">
                    <hr />
                    <h1 className="event_head"><b>Events </b></h1>
                    <hr />
                </div>
            </div>
            <div className="container portfolio__container">


                {
                    data.map(({ id, image, title }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href="" className='btn btn-secondary btn-sm' rel="noreferrer" target='_blank'>Know More</a>
                                </div>
                            </article>
                        )
                    })
                }



            </div>
        </div>
    )
}

export default Events
