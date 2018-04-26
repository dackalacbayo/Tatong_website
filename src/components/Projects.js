import React, { Component } from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'



class Projects extends Component {
  render(){
    return(
      <div className="container-fluid">

          <div className="row">
            <div className="project lighting text col-lg-4 col-md-6 col-sm-12 text-center p-4">
              <div className="bg-opacity">
                    <h2 className="display-4 lightning-title">Lighting </h2>
                    <p className="lead project">Eum te percipit platonem gubergren, ne sea dolor possit.</p>
                  <div className="panel-button view-btn">
                    <a className="btn btn-secondary view-project mr-2 btn-lg" href="#"><span>View More</span></a><br/>
                  </div>
              </div>
          </div>
          <div className="project interior col-lg-4 col-md-6 col-sm-12 text-center"></div>
          <div className="project build text col-lg-4 col-md-6 col-sm-12 text-center p-4">
              <div className="bg-opacity">
                  <h2 className="display-4 lightning-title">Build </h2>
                  <p className="lead project">Eum te percipit platonem gubergren, ne sea dolor possit.</p>
                <div className="panel-button view-btn">
                  <a className="btn btn-secondary view-project mr-2 btn-lg" href="#"><span>View More</span></a><br/>
                </div>
              </div>
            </div>
          <div className="project lighting col-lg-4 col-md-6 col-sm-12 text-center">  </div>
          <div className=" project interior text col-lg-4 col-md-6 col-sm-12  text-center p-4">
              <div className="bg-opacity">
                  <h2 className="display-4 lightning-title">Interior Design </h2>
                  <p className="lead project">Eum te percipit platonem gubergren, ne sea dolor possit.</p>
                <div className="panel-button view-btn">
                  <a className="btn btn-secondary view-project mr-2 btn-lg" href="#"><span>View More</span></a><br/>
                </div>
              </div>
              </div>
          <div className="project build col-lg-4 col-md-6 col-sm-12 text-center"></div>
          </div>
      </div>


    )
  }
}

export default Projects
