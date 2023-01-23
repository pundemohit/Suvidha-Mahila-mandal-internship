import React from 'react'
import './program.css'
import { GiTeacher } from 'react-icons/gi'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { GrWorkshop } from 'react-icons/gr'
import { FaUserGraduate } from 'react-icons/fa'
import { BsBookmarkStar } from 'react-icons/bs'

const Program = () => {
    return (
        <div className='about__programs'>
            <div className="let">
                <hr />
                <h1> <b> Programs Provided</b></h1>
                <hr />
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        < GiTeacher className='about__icon' />
                        <h4>Student MentorShip</h4>
                        
                    </article>
                    <article className="about__card">
                        < FaChalkboardTeacher className='about__icon' />
                        <h4>Student Internship</h4>        
                    </article>
                    <article className="about__card">
                        < GrWorkshop className='about__icon' />
                        <h4>Free Education</h4>        
                    </article>
                    <article className="about__card">
                        < FaUserGraduate className='about__icon' />
                        <h4>Free Workshops</h4>        
                    </article>
                    <article className="about__card">
                        < BsBookmarkStar className='about__icon' />
                        <h4>Women Empowerment</h4>        
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Program
