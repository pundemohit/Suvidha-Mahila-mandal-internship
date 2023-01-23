import React from 'react'
import './goals.css'
import { FaUserGraduate } from 'react-icons/fa'
import { BiDonateBlood } from 'react-icons/bi'
import { AiOutlineProfile } from 'react-icons/ai'
import mymy from '../../assets/auntyji.png'

const Goals = () => {
    return (
        <div className='g_back'>
            <div className="container pd">
                <div className="goals">
                    <h1 className="goalhead">
                        <hr />
                        <b> Our Goals</b>
                        <hr />
                    </h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                
                                <FaUserGraduate className='f1' />
                                <br />
                                <br />
                                <BiDonateBlood className='f2'/>
                                <br />
                                <br />
        
                                <AiOutlineProfile className='f3' />
                                <br />
                            </div>
                            <div className="col">
                                <div className="one">
                                    <h3 className='sh3'>Student Life</h3>
                                    <p>Provide Free Education To Girl Child</p>
                                    <br />
                                </div>
                                <div className="two">
                                    <h3 className='sh3'>Food Camp Donation</h3>
                                    <p>Run Food Donation Campaign In Under Previelage Areas And Awareness Campaign In Rural Region.</p>
                                    <br />
                                </div>
                                <div className="three">
                                    <h3 className='sh3' >Programs and Workshops</h3>
                                    <p>Provide Internship ,Training And Workshops All Over The World.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src={mymy} alt="" className="mymy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals
