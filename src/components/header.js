import React ,{Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Header extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top" id="navbar-style-light">
         <div className="container nav">
           <a className="navbar-brand js-scroll-trigger ml-4" href="/">Tatong</a>
           <button className="navbar-toggler mt-2" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarResponsive">
             <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                 <a className="nav-link" href="#"> Projects</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">TheTeam</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/FaQ">FaQ</a>
               </li>

             </ul>
           </div>
         </div>
       </nav>

    )
  }
}

export default Header
