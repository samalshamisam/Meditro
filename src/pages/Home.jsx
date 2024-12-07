import React from 'react';
import headerimg from '../images/doctor.png';
import plus from '../images/plus.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import About1 from '../About/About1';
import How from '../how/How';
import Book from '../book/Book';
function Home() {
  return (
    <>
  <header className='home'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-7 col-md-6 col-sm-12'>
                <h5>We Provide All Health Care Solution</h5>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
                <button><a href="#"> Read More</a></button>
                <img className='img' src={plus} alt="" />
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12'>
              <div className='header-box'>
              <img src={headerimg} alt="" />
              <FontAwesomeIcon icon={faSquare} />
              </div>
                
            </div>
        </div>  
      </div>
  </header>
 
  </>
  )
}

export default Home;