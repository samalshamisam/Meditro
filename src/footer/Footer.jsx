
import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import footerlogo from '../images/logo.png';
import feacbook from '../images/feacbook.png';
import tweetr from '../images/tweetr.png';
import instagram from '../images/instagram.png';
import linkidin from '../images/linkidin.png';
import inps from '../images/inps.png';
import '../App.css';
function Footer() {
  return (
   <footer>
    <div className='container'>
        <div className='row'>
        <div className='col-md-3 col-sm-6' >
          <img src={footerlogo} className='footerlogo' alt="" />    
          <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
          <div className='footer-contact'>
            <div className='footer-icon'>
            <FontAwesomeIcon icon={faPhone} /> 
            </div>
            <div className='footer-text'>
                <h6>conact us </h6>
                <h4>+01 123 456 789</h4>
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-6'>
            <h2 className='footer-title'>Quick Links
            <img src={inps} alt="" /></h2>
            <ul>
                <li><a href="#About">About Us</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Booking"> Booking</a></li>
                <li><a href="#Faq"> Faq's</a></li>
                <li><a href="#Bloga"> Bloga</a></li>
                <li><a href="#Our">Our Team</a></li>
            </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2 className='footer-title'>Our Services<img src={inps} alt="" /></h2>
            <ul>
                <li><a href="#Denatel">Denatel Care</a></li>
                <li><a href="#Caediac">Caediac Clinic</a></li>
                <li><a href="#Massege">Massege Therapy</a></li>
                <li><a href="#Cardiology">Cardiology</a></li>
                <li><a href="#Precise">Precise Diagnosis</a></li>
                <li><a href="#Abmbulance">Abmbulance Services</a></li>
            </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
            <h2 className='footer-title'>Subcribe<img src={inps} alt="" /></h2>
            <form action="">
                <input type="email" placeholder='Email Address'/>
                <button type='submit'> subscribe now</button>

            </form>
            <ul className='social'>
                <li><a href="#https://www.facebook.com/"><img src={feacbook} alt="" /></a></li>
                <li><a href="#https://x.com/"><img src={tweetr} alt="" /></a></li>
                <li><a href="#https://www.instagram.com/"><img src={instagram} alt="" /></a></li>
                <li><a href="#https://www.linkedin.com/"><img src={linkidin} alt="" /></a></li>
            </ul>
        </div>
      </div>
    </div>
    <hr />
    <div className='footer-bottom'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 col-md-12'>
                    <span>Copyright © 2023 Design & Developed by ThemeTrades</span>
                </div>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer;