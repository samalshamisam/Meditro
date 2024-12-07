import React from 'react';
import img1 from '../images/mobile.png';
import img2 from '../images/love.png';
import img3 from '../images/women.png';
import './book.css';
import FormBook from './FormBook';
function Book() {
  return (
    <>
    <section className='book'>
        <div className="container">
            <div className="row ">
             {/* <div className="re"> */}
              <div className=" col-xl-5 col-lg-6 col-md-6 col-sm-12 a">   <FormBook /> </div> 
                <div className=" col-xl-7 col-lg-6 col-md-6  col-sm-12 a1">
                    <div className="book-img">
                    <img src={img1} alt=""className='img1' />
                        <div className="img">
                         <img src={img2} alt=""className='img2' />
                           
                            <img src={img3} alt=""className='img3' />
                        </div>
                    </div>
                </div>
             {/* </div> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default Book