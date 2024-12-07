import React, { Fragment } from 'react'
import {Outlet} from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Navbar from '../Nav/NavBar';
import About1 from '../About/About1';
import Home from '../pages/Home';

import How from '../how/How';
import Book from '../book/Book';
function Layout() {
  return (
    <Fragment>
        <Navbar />
        <main>
            <Outlet />
            <About1 />  
            <How />
            <Book />  
        </main>
        
        <Footer />
    </Fragment>
  )
}

export default Layout;