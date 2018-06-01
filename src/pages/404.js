import React from "react";
import Link from "gatsby-link"
import sadFace from '../assets/images/icons8-sad-100.png'

const NotFoundPage = () => (
  <div className="bg-secondary text-white py-5 mt-5">
    <div className="container d-flex flex-column text-center">
      <div className="row my-auto">
        <div className="col-lg-12 col-md-8 col-sm-12">
        <img className="mb-3" src={sadFace} height="72px"/>
          <h2 className="display-2 mt-4">Something went wrong</h2>
          <p className="my-3 lead pb-3">
            Seems you're looking for something that doesn't exist
          </p>
          <a className="btn-link ml-3 text-light" href="./">
           <Link className="nav-link js-scroll-trigger pr-3" to="./"><i className="fa fa-angle-left mr-3" />
           <label className="text-white">Return to homepage</label></Link>

          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
