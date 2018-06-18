import React, { Component } from "react";
import Link from "gatsby-link";

class Nav extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-dark fixed-top"
        id="navbar-style-light"
      >
        <div className="container nav">
          <Link className="navbar-brand js-scroll-trigger" to="../">
            Tatong
          </Link>
          <button
            className="navbar-toggler mt-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse auto" id="navbarResponsive">
            <ul className="navbar-nav ml-auto pl-4">
              <li className="nav-item">
              <Link className="nav-link js-scroll-trigger pr-3" to="../projects">Projects</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link js-scroll-trigger pr-3" to="../contact">Contact</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link js-scroll-trigger pr-3" to="../faQ">FaQ</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
