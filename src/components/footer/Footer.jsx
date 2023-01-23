import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <h1 className='footer__logo'> Suvidha Mahila Mandal </h1>

      <ul className='permalinks'>
        <li><a className='btn btn-secondary btn-sm' href="">Home</a></li>
        <li><a className='btn btn-secondary btn-sm' href="#">About Us</a></li>
        <li><a className='btn btn-secondary btn-sm' href="#">Services</a></li>
        <li><a className='btn btn-secondary btn-sm' href="#">Events</a></li>
        <li><a className='btn btn-secondary btn-sm' href="#">Goals</a></li>
        <li><a className='btn btn-secondary btn-sm' href="#">Collaborations</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="#" rel="noreferrer" target="_blank"><FaGithub/></a>
        <a href="#" rel="noreferrer" target="_blank"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Suvidha Mahila Mandal. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
