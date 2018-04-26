import React, { Component } from 'react'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'


class Furnitures extends Component {
  render(){
    return(
      <div className="container-fluid">
          <div className="row" >
              <div className="furniture col-lg-6 col-md-6 col-md-12 ">
                  <h2 className="display-4 furniture-title-1">Furniture </h2>
                  <p className="lead furniture">Eum te percipit platonem gubergren, ne sea dolor possit.</p>
                  <div className="panel-button view-btn">
                    <a className="btn btn-secondary view-furniture mr-2 btn-lg" href="#"><span>View More</span></a><br/>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 col-md-12 ">
                <div className="row pr-0 pl-1 mt-4">
                  <div className="col-6 order-sm-1 pr-0 ">
                    <h1 className="furniture-title-right display-4 font-weight-normal pr-4">Header</h1>
                    <p className="lead furniture-right pr-4">Eum te percipit platonem gubergren, ne sea dolor possit. Ne homero partem lorem ipsum&nbsp;dolor set amet lorem ipsum dolor</p>
                    <div className="vertical-line-right"></div>
                  </div>
                  <div className="col-6 order-sm-1 pr-0"><img className="rounded-0 my-0 w-100" src={image2} height="220"/></div>
                
                  <div className="col-6 order-sm-4 pl-0 ">
                    <h1 className="furniture-title-left display-4 font-weight-normal pl-4">Header</h1>
                    <p className="lead furniture-left pl-4">Eum te percipit platonem gubergren, ne sea dolor possit. Ne homero partem lorem ipsum&nbsp;dolor set amet lorem ipsum dolor</p>
                    <div className="vertical-line-left"></div>
                  </div>
                  <div className="col-6 order-sm-4 pr-0 "><img className="rounded-0 my-0 w-100" src={image3} height="220"/></div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Furnitures
