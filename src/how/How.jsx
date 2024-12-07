import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './How.css';
function How() {
  return (
    <>
    <section className='how'>
        <div className="container">
            <h2>Working Process</h2>
            <h1>How We Works?</h1>
            <div className="row">
                <div className="col-lg-3 col-md-4   col-sm-5  ">
                    <div className="number how1"> <span> 01</span>
                        <div className="text">
                            <h5>Make Appointment</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <a href="#more">View More <span><FontAwesomeIcon icon={faArrowRight} /></span> </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4    col-sm-5 mb-20   how-col ">
                    <div className="number how2"> <span> 02</span>
                        <div className="text">
                            <h5>Take Treatment</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <a href="#more">View More <span><FontAwesomeIcon icon={faArrowRight} /></span> </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4   col-sm-5  ">
                    <div className="number how3"> <span> 03</span>
                        <div className="text">
                            <h5>Registration</h5>
                            <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                            <a href="#more">View More <span><FontAwesomeIcon icon={faArrowRight} /></span> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default How