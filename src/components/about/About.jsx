import React from 'react'
import './about.css'
import ab from '../../assets/abbb.jpg'

const About = () => {
    return (
        <div className='ab_pad'>
            <div className="ab_back container">
                <div className="leto">
                    <hr />
                    <h1> <b> About Us</b></h1>
                    <hr />
                </div>
                <div>
                <div className="row">
                    <div className="col">
                        <img className='abbb' src={ab} alt="" />
                    </div>
                    <div className="col bol">
                        <h2 id='title'><b>SUVIDHA MAHILA MANDAL</b></h2>
                        <h6>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</h6>
                        <a className="btn btn-secondary btn-sm bob" href="#" role="button">Explore more</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About
