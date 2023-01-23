import React from 'react'
import head from '../../assets/loggo.jpg'
import './header.css'

const Header = () => {
    return (
        <div className='bod'>
            <div className="container cons">
                <div className="jumbotron">
                    <div className="container jumbo">
                        <div className="row">
                            <div className="col">
                                <img className='loggo' src={head} alt="" />
                            </div>
                            <div className="col">
                                <h1 className="display-4 wel">Welcome to</h1>
                                <h1 className="display-4 name">Suvidha Mahila Mandal</h1>
                            </div>
                        </div>
                    </div>
                    <p className="lead">
                        <marquee className = "mar" width="100%" direction="left" >
                            Serving For The Betterment of the Society For 27+ Years.
                        </marquee>
                    </p>
                    <hr />
                    <p id='quote'>Helping Others In Need Is Not Only A Responsibilty Of Life, It is What Which Gives Meaning To Life</p>
                    <p className="lead ali">
                        <a className="btn btn-secondary btn-sm bob" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header
