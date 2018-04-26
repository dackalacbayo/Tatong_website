import React, {Component} from 'react'
import Link from 'gatsby-link'
import logo from '../assets/images/white_logo_transparent@2x.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Banner extends Component {
  render(){
    return(
      <div className="bg-banner">
        <div className="position-relative overflow-hidden py-5 text-center">
          <div className="col-md-5 p-lg-6 mx-sm-4 my-5">
            <div className="panel">
              <h2 className="banner display-4 font-weight-normal title-1">DYNAMICALLY DESIGNING </h2>
              <h2 className="banner display-4 font-weight-normal title-2">AND MANUFACTURING QUALITY FURNITURE</h2>
                <div className="vertical-line-right-white"></div>
            <div className="panel-button">
              <a className="btn btn-secondary inquire mr-2 btn-lg" href="#"><span>INQUIRE</span></a>
              <a className="a learn-more" href="#"><span>Learn More ></span></a>
              <br/>
            </div>
            </div>

          </div>
          </div>

      </div>
    )
  }
}

export default Banner
