import React from 'react';
import './About.css';
import pic2 from '../images/pic-2.jpg';
import pic3 from '../images/pic-3.jpg';
import pic4 from '../images/side.jpg';
import as from '../images/as.png';
import as2 from '../images/asq.png';
import as3 from '../images/der.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKitMedical, faPersonHalfDress, faTruck, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
function About1() {
  return (
    <> 
    <section className='about'>
    {/* <img src={as} alt=""  className='as'/>
          <img src={as} alt=""  className='as1'/>
          <img src={as2} alt=""  className='as2'/>
          <img src={as3} alt=""  className='as3'/> */}
       <div className="container">
        <div className="row">
   
       
       
          <div className="col-lg-6 col-md-12 a">
            
            <ul className='a1'>
            <li className='li'> <img src={pic4} alt="" className='img3' /></li>
                <li > <img src={pic3} alt="" className='img1' /></li>
            </ul>
            <ul className='a2'>
            <li className='li'><img src={pic2} alt=""className='img2' /></li>
            
            <li> <div className='img4'>20 <span>Year Experience</span></div></li>
            </ul>
            
          </div>
          <div className="col-lg-6 col-md-12 b">
            <h2>About Us</h2>
            <h1>The Great Place Of Medical Hospital Center</h1>
            <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
            <div className='b1'>
                <ul>
                  <div className='col-lg-6 col-md-6 col-sm-6 d'>  <li className='p' ><FontAwesomeIcon icon={faTruck} /> <p>Emergency Help</p></li></div>
                  <div className='col-lg-6 col-md-6 col-sm-6 d1'> <li className='p1'><FontAwesomeIcon icon={faUserDoctor} /> <p>Qualified Doctors</p></li></div>
                </ul>
                <ul className='b2'>
                <div className='col-lg-6 col-md-6 col-sm-6 d'>  <li className='p2'><FontAwesomeIcon icon={faPersonHalfDress} /> <p>Best Professionals</p></li></div>
                <div className='col-lg-6 col-md-6 col-sm-6 d1'>  <li className='p3'> <FontAwesomeIcon icon={faKitMedical} /><p>Medical Treatment</p></li></div>
                </ul>
            </div>
            <button> Read More</button>
          </div>
        
        
       </div>
       </div>
    </section>
    </>
  )
}

export default About1;