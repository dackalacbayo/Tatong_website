import React, { Component } from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'


class CompanyProfile extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-10 col-sm-12 py-4 text-white my-auto text-sm-left text-lg-left mx-auto ml-lg-0 mr-lg-auto">
                <h1 className="profile-title display-4 mb-2 font-weight-normal">What we do</h1>
                <hr className="profile my-1 pb-1 border-light"/>
                <p className="lead">Eum te percipit platonem gubergren, ne sea dolor possit. Ne homero partem lorem ipsum&nbsp;dolor set amet lorem ipsum dolor</p>
                <ul className="project-list lead ">
                  <li className="project-list"><a className="" href="#furnitures">Furnitures</a></li>
                  <li className="project-list"><a className="" href="#projects">Lighting</a></li>
                  <li className="project-list"><a className="" href="#projects">Interior Design / Architecture</a></li>
                  <li className="project-list"><a className="" href="#projects">Build</a></li>
                </ul>
             </div>

              <div className="col-lg-5 col-md-6 col-sm-12 text-center mx-auto">
              <div className="carousel slide mb-2" id="carouselExampleIndicators" data-ride="carousel-1">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="img1 active mb-4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="img2 mb-4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="img3 mb-4"></li>
              </ol>
                  <div className="carousel-inner text-center my-5" role="listbox" >
                      <div className="carousel-item active text-center">
                        <img className="rounded-0 mb-4 w-100" src={image1} height="300"/>
                      </div>
                      <div className="carousel-item text-center">
                          <img className="rounded-0 mb-4 w-100" src={image2} height="300"/>
                      </div>
                      <div className="carousel-item text-center">
                          <img className="rounded-0 mb-4 w-100" src={image3} height="300"/>
                      </div>
                  </div>

              </div>
              </div>
        </div>
      </div>
    )
  }
}

export default CompanyProfile
