import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import './banner.css';
import art from '../images/art.png';
import art1 from '../images/art1.png';
import art2 from '../images/art2.png';
function Banner(props) {
  return (
    <section className='banner'>
      <img src={art1} alt="" className='art1' />
      <img src={art2} alt="" className='art2' />
        <div className='container'>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <h2>{props.title}</h2>
                     <li>
                      <Link to="/Home">
                        <FontAwesomeIcon icon={faHome} /> Home  
                       </Link> 
                       / {props.smtitle}
                     </li>
                </div>
            </div>
            <img src={art} alt="" className='art' />
        </div>
    </section>
  )
}

export default Banner;