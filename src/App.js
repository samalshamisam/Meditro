import React, { Fragment } from 'react';
import {createBrowserRouter,createRoutesFromElements ,Route ,RouterProvider} from 'react-router-dom';
// import NavBar from './Nav/NavBar';
import Home from './pages/Home';
import About1 from './About/About1';
import Layout from './layout/Layout';
import Contact from './pages/Contact';
// import Footer from './footer/Footer';
import './App.css';
import About from './About/About';
import Ourteam from './Our team/Ourteam';
const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index path='/Home' element={<Home />} />
    <Route path='/Contact' element={<Contact />} />
    <Route path='/About' element={<About />} />
    <Route path='/Our' element={<Ourteam />} />
    
  </Route>
))
function App() {
  return (
  <Fragment>
    
  <RouterProvider router={routes} />
  
  </Fragment>
   
  )
}

export default App;
