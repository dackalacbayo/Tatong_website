import React, { Component } from "react";
import Link from "gatsby-link";
import { Button } from "semantic-ui-react";

class Banner extends Component {
  render() {
    return (
      <div className="bg-banner">
        <div className="bg-banner opacity position-relative overflow-hidden py-5 text-center">
          <div className="col-md-5 col-lg-8 col-md-8 mx-sm-4 my-5">
            <div className="panel bg">
            <h2 className="display-4 text-uppercase font-400 text-right text-white">
              DYNAMICALLY DESIGNING
            </h2>
            <h2 className="text-uppercase text-right title-2 font-weight-normal text-right text-white">
              AND MANUFACTURING QUALITY FURNITURE
            </h2>
            <div className="vertical-line-right-white" />
          </div>
          <div className="panel-button pt-3">
            <Link to="#aboutUs">
              <Button type="button" className="btn square mr-2 btn-lg">
                Learn More
              </Button>
            </Link>
            <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
