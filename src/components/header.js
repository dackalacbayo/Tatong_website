import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Header = () => (

  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbar-style-light">
     <div className="container">
       <a className="navbar-brand js-scroll-trigger" href="#page-top">Tatong</a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarResponsive">
         <ul className="navbar-nav ml-auto">
         <li className="nav-item">
           <a className="nav-link js-scroll-trigger active" href="#">Projects</a>
         </li>
           <li className="nav-item">
             <a className="nav-link js-scroll-trigger" href="#benefits">TheTeam</a>
           </li>

         </ul>
       </div>
     </div>
   </nav>



)

export default Header
