import React from 'react';
import Banner from '../Banner/Banner';
import {  faBoxTissue, faE, faEarDeaf, faFaceAngry, faFileWord, faGamepad, faIdBadge, faMap, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';
import FormContact from './FormContact';
import phone from '../images/phone.png';
import email from '../images/email.png';
import map from '../images/map.png';
import Footer from '../footer/Footer';
function Contact() {
  return (
    <>
     <Banner title="Contact Us " smtitle="Contact Us " />
      <section className='contact-us'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-3 r">
             <FormContact />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-3 r1">
             <div className="side">
              <div className="overlay">
                <h3>Contact Us For Any Informations</h3>
                <div className="icon-box">
                <li> <FontAwesomeIcon icon={faMap} /> Location </li>
                <hr />
                <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                </div>
                <div className="icon-box">
                <li> <FontAwesomeIcon icon={faE} /> Email & Phone </li>
                <hr />
                <a class="text-white" href="/react/contact-us">info@yourdomain.com</a>
                <p>(+68) 120034509</p>
                </div>
                <div className="icon-box">
                <li> <FontAwesomeIcon icon={faGamepad} /> Follow Us </li>
                 <hr />
                 <ul className='social-media'>
                 <li><a href="#https://www.facebook.com/"><FontAwesomeIcon icon={faFaceAngry}/> </a></li>
                <li><a href="#https://x.com/"><FontAwesomeIcon icon={faBoxTissue}/></a></li>
                <li><a href="#https://www.instagram.com/"><FontAwesomeIcon icon={faEarDeaf} /></a></li>
                 </ul>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section>
      <section className='area'>
       <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-mb-30 col ">
            <div className='section-area box'>
              <div className="icon">
                <img src={phone} alt="" />
              </div>
              <div className="text">
                <h2>Contact Number</h2>
                <p>+001123 456 798</p>
                <p>+002443 566 453</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  col-mb-30 col ">
          <div className='section-area box2'>
              <div className="icon">
              <img src={email} alt="" />
              </div>
              <div className="text">
                <h2>Email Address</h2>
                <p>info@yourdomain.com</p>
                <p>example@support.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-mb-30 col ">
          <div className='section-area box3'>
              <div className="icon">
              <img src={map} alt="" />
              </div>
              <div className="text">
                <h2>Address</h2>
                <p>+001123 456 798</p>
                <p>Venaville 100010m USA</p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </section>
     
    </>
  )
}

export default Contact;